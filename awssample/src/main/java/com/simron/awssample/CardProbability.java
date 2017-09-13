package com.simron.awssample;

import java.util.HashSet;
import java.util.Set;

public class CardProbability {

	public static void main(String[] args) {
		CardProbability cardProbability = new CardProbability();
		cardProbability.execute();
	}

	private final int groupSize = 6;
	private void execute() {
		System.out.println("Probability of not pulling an ace in 4 tries "+(float)48/52*47/51*46/50*45/49);
		System.out.println("Probability of pulling an ace in 4 tries "+(float)4/52 + (float)48/52*4/51 + (float)48/52*47/51*4/50 + (float)48/52*47/51*46/50*4/49);
		String[] cards = new String[]{"HA",/*"H2",*/"H3","H4","H5","H6","H7","H8","H9","H10","HJ","HQ","HK" // 2 is removed for group size 6
				,"SA",/*"S2",*/"S3","S4","S5","S6","S7","S8","S9","S10","SJ","SQ","SK"
				,"CA",/*"C2",*/"C3","C4","C5","C6","C7","C8","C9","C10","CJ","CQ","CK"
				,"DA",/*"D2",*/"D3","D4","D5","D6","D7","D8","D9","D10","DJ","DQ","DK"};
		//distribute cards to group
		System.out.println("Probability of getting one ace from dec of 48 with 8 cards "+(1 - probabilityOfOneAceInXpullsAndInYcardsWithZacesInDeck(16,48,4)));
//		System.out.println("If I have 0 ace then probability that my team has one ace "+2*(1 - (float)44/48 * 43/47 * 42/46 * 41/45 * 40/44 * 39/43 * 38/42 * 37/41));
		Set<Integer> cardsGivenFromDeck = new HashSet<>();
		for(int i=0; i<groupSize; i++) { // 6
			for(int j=0; j<cards.length/groupSize; j++) { // 8 
				Double d = Math.random() * cards.length;
				Integer indexNumber = d.intValue();
				if(cardsGivenFromDeck.add(indexNumber)) {
					System.out.print(cards[indexNumber]+",");
				}else {
					--j;
				}
			}
			System.out.println();
		}
	}
	
	private float probabilityOfOneAceInXpullsAndInYcardsWithZacesInDeck(int xpull, int ycards, int zace) {
		float ret = 1;
		for(int i=0; i<xpull; i++) {
			ret = ret*(ycards-zace-i)/(ycards-i);
		}
		return ret;
	}
}
