package com.simron.movies;

import java.net.URL;
import java.net.URLConnection;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

import org.springframework.context.annotation.Scope;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.simron.awssample.DbInteraction;
import com.simron.domain.MovieInfo;
import com.simron.weightLoggin.WeightInfo;

@Service
@Scope(scopeName="singleton")
public class MovieService {

	public static void main(String[] args) {
		MovieService client = new MovieService();
//		client.getMovies();
		
//		String query = "create table movie_filters (movie_name varchar(256), constraint pk_movie_filters primary key (movie_name))";
//		System.out.println(DbInteraction.executeUpdate(query, new String[] {}));
//		query = "create index movie_filters_1x on movie_filters(movie_name)";
//		System.out.println(DbInteraction.executeUpdate(query, new String[] {}));

//		for(int i=1; i<client.filters.length; i++) {
//			query = "insert into movie_filters values(?)";
//			System.out.println(DbInteraction.executeUpdate(query, new String[] {client.filters[i]}));
//		}
		
	}
	
	private String subsceneGet(String movieName) {
//		String movieName = "Valerian.and.the.City.of.a.Thousand.Planets.2017.1080p.WEBDL...";
		movieName = movieName.replace(" ", "%20");
		String url = "https://subscene.com/subtitles/release?q="+movieName;
		RestTemplate restTemplate = new RestTemplate();
		HttpHeaders headers = new HttpHeaders();
		headers.add("Cookie", "LanguageFilter=13");
//		headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
        headers.add("user-agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.99 Safari/537.36");
        HttpEntity<String> entity = new HttpEntity<String>("parameters", headers);
		ResponseEntity<String> strs = restTemplate.exchange(url, HttpMethod.GET, entity,  String.class);
		String subtitleLink = 
		Arrays.asList(strs.getBody().split("<|>")).stream()
		.filter(str -> str.startsWith("a href=\"/subtitles/"))
		.findFirst().get()
		.split("\"")[1];
		System.out.println(subtitleLink);
		
		
		url = "https://subscene.com"+subtitleLink;
		strs = restTemplate.exchange(url, HttpMethod.GET, entity,  String.class);
		String downloadLink = 
		Arrays.asList(strs.getBody().split("<|>")).stream()
		.filter(str -> str.startsWith("a href=\"/subtitle/download"))
		.findFirst().get()
		.split("\"")[1];
		
		url = "https://subscene.com"+downloadLink;
		
		System.out.println(">>>>>>>>> "+url);
		
		return url;
		
//		strs = restTemplate.exchange(url, HttpMethod.GET, entity,  String.class);
//		System.out.println(downloadLink);
//		
//		System.out.println(strs);
	}

	private void post() {
		RestTemplate restTemplate = new RestTemplate();
		WeightInfo weightInfo = restTemplate.postForObject("http://localhost:8080/lw/lastEntry", "simron", WeightInfo.class);
		System.out.println(weightInfo.getHour());
	}
	
	private void get1() {
		RestTemplate restTemplate = new RestTemplate();
		HttpHeaders headers = new HttpHeaders();
		headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
        headers.add("user-agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.99 Safari/537.36");
        HttpEntity<String> entity = new HttpEntity<String>("parameters", headers);
		ResponseEntity<String> strs = restTemplate.exchange("https://thepiratebay.org/browse/207/0/7/0", HttpMethod.GET, entity,  String.class);
		System.out.println(strs);
	}
	
	private List<MovieInfo> finalMovieList = new ArrayList<>();
	public List<MovieInfo> getMovies() {
		if(finalMovieList.size() < 5) {
			getFilters();// populate filter
			int pageNumber = 0;
			while(finalMovieList.size() < 5) {
				ArrayList<MovieInfo> parsedMovieList = new ArrayList<>();
				parsedMovies.add(parsedMovieList);
				System.out.println("\n**** Page "+pageNumber+" ****\n");
				String content = getHtml(pageNumber);
				List<MovieInfo> moviesList = Arrays.stream(content.split("<|>")).filter(str -> str.startsWith("a href") && str.contains("magnet:?")).map(str -> createMovieInfo(str)).collect(Collectors.toList());
				moviesList.stream().forEach(movie -> {
					if(movie.getFilter() == null) {
						finalMovieList.add(movie);
					}
					parsedMovieList.add(movie);
					System.out.println(movie);
				});
				++pageNumber;
			}
			
			finalMovieList.stream().forEach(movie -> {
				movie.setYoutube(youTubeGet(movie));
				movie.setSubscene(subsceneGet(movie.getMovie()));
			});
			
			System.out.println("\n\n\n");
			finalMovieList.stream().forEach(movie -> System.out.println(">>>>>>>>> "+movie.getMovie()+" "+movie.getFilter()+" "+movie.getYoutube()+" "+movie.getSubscene()+" "+movie.getMagnet()));
		}
		return finalMovieList;
	}

	@SuppressWarnings("rawtypes")
	private String youTubeGet(MovieInfo movie) {
		String serachMovieName = getMovieNameForYoutube(movie);
		RestTemplate restTemplate = new RestTemplate();
		String youTubeUrl = "";
		String url = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q="+serachMovieName+"&type=video&key=AIzaSyCi3YEhpaOhdl1kZS4TYK4y4Tuo2AMyHvE";
		LinkedHashMap jsonData = restTemplate.getForObject(url, LinkedHashMap.class);
		if(((List)jsonData.get("items")).size() == 1) {
			LinkedHashMap jsonData1 = (LinkedHashMap)((List)jsonData.get("items")).get(0);
			LinkedHashMap jsonData2 = (LinkedHashMap)jsonData1.get("id");
			String movieId = (String)jsonData2.get("videoId");
			youTubeUrl = "https://www.youtube.com/watch?v="+movieId;
			System.out.println(">>>>>>>>> URL = https://www.youtube.com/watch?v="+movieId);
		}else {
			System.out.println(">>>>>>>>> URL = Not found for "+url);
		}
		return youTubeUrl;
	}

	private String getMovieNameForYoutube(MovieInfo movie) {
		String[] movieWords = movie.getMovie().split("[+.]+");
		String serachMovieName = "";
		for(int i=0; i<movieWords.length; i++) {
			if(movieWords[i].matches("^[0-9]{4}")) {
				int year = Integer.parseInt(movieWords[i]);
				if(year > 1800 && year < 2025) {
					movie.setFilter(Arrays.asList(movieWords).subList(0, i+1).stream().collect(Collectors.joining(" "))); // reusing empty field as optimized name for the movie ?? see if it can be avoided
					serachMovieName = Arrays.asList(movieWords).subList(0, i+1).stream().collect(Collectors.joining("%20"))+"%20trailer";
					break;
				}
			}
		}
		if(serachMovieName.isEmpty()) {
			serachMovieName = movie.getMovie().replace(".", "%20").replace("+", "%20")+"%20trailer";
		}
		return serachMovieName;
	}

	private String getHtml(int i) {
		String content = null;
		URLConnection connection;
		try {
		  connection =  new URL("https://thepiratebay.org/browse/207/"+i+"/7").openConnection();
		  connection.addRequestProperty("User-Agent", "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:25.0) Gecko/20100101 Firefox/25.0");
		  Scanner scanner = new Scanner(connection.getInputStream());
		  scanner.useDelimiter("\\Z");
		  content = scanner.next();
		  scanner.close();
		}catch ( Exception ex ) {
		    ex.printStackTrace();
		}
		return content;
	}

	private MovieInfo createMovieInfo(String str) {
		MovieInfo movieInfo = new MovieInfo();
		movieInfo.setMagnet(str.split("\"")[1]);
		movieInfo.setMovie(movieInfo.getMagnet().split("&")[1].substring(3).replace("%28", "").replace("%29", "").replace("%3A", "").replace("%27", "").replace("-", "")); // removing ( ) : ' -
		if(movieInfo.getMovie().startsWith("+")) {
			movieInfo.setMovie(movieInfo.getMovie().substring(1));
		}
		String[] movieWords = movieInfo.getMovie().split("[+.]+");
		int matchedIndex = -1;
		for(int index=0; index<filters.size(); index++) {
			String[] filterWords = filters.get(index).split("[ ]+");
			boolean allMatched = true;
			for(int fIndex=0; fIndex<filterWords.length; fIndex++) {
				if(! filterWords[fIndex].toLowerCase().trim().equals(movieWords[fIndex].toLowerCase().trim())) {
					allMatched = false;
					break;
				}
			}
			if(allMatched) {
				matchedIndex = index;
				break;
			}
		}
		if(matchedIndex != -1) {
			movieInfo.setFilter(filters.get(matchedIndex));
		}
		return movieInfo;
	}
	
	
	private List<String> filters = null;
	public List<String> getFilters() {
		if(filters == null) {
			String query = "select * from movie_filters";
			String[][] data = DbInteraction.executeQuery(query, new String[] {});
			filters = new ArrayList<>(data.length);
			for(int i=0; i<data.length; i++) {
				filters.add(data[i][0]);
			}
		}
		return filters;
	}
	
	private List<List<MovieInfo>> parsedMovies = new ArrayList<>();
	public List<List<MovieInfo>> getParsedMovies() {
		return parsedMovies;
	}

	public int addMovieToFilter(String movieName) {
		String query = "insert into movie_filters values(?)";
		int ret = DbInteraction.executeUpdate(query, new String[] {movieName});
		filters.add(movieName);
		List<MovieInfo> moviesToRemove = new ArrayList<>();
		for(MovieInfo movieToRemove : finalMovieList) {
			if(movieToRemove.getFilter().equals(movieName)) {
				moviesToRemove.add(movieToRemove);
			}
		}
		finalMovieList.removeAll(moviesToRemove);
		parsedMovies.add(moviesToRemove);
		return ret;
	}

	
//	private String[] filters = new String[] {
//			"Valerian and the city of a thousand planets 2017",
//			"IT 2017",
//			"Baby Driver 2017",
//			"Wonder Woman 2017", "Mulher Maravilha 2017",
//			"Atomic Blonde 2017",
//			"Kong Skull Island 2017",
//			"King Arthur Legend of the Sword 2017",
//			"Kingsman The Secret Service 2014",
//			"War For The Planet of The Apes 2017",
//			"The Boss Baby 2017",
//			"American Made 2017",
//			"The Dark Tower 2017",
//			"Spider Man Homecoming 2017", "Spiderman Homecoming 2017",
//			"Ghost in the Shell 2017",
//			"Split 2016",
//			"Transformers The Last Knight 2017",
//			"Cars 3 2017",
//			"Jungle 2017",
//			"Blade Runner 1982",
//			"The Mummy 2017",
//			"Despicable Me 3 2017",
//			"Pirates of the Caribbean Dead Men Tell No Tales",
//			"The Fate of the Furious", "The Fate of the Furious Fast and Furious 2017", "The Fate of the Furious Fast and Furious 8",
//			"Gifted 2017",
//			"Guardians of the Galaxy 2014",
//			"John Wick Chapter 2", "John Wick Um Novo Dia Para Matar",
//			"Guardians of the Galaxy Vol 2",
//			"24 Hours to Live 2017",
//			"Logan 2017",
//			"Moana 2016",
//			"Brawl in Cell Block 99 2017",
//			"Singularity 2017",
//			"Fantastic Beasts and Where to Find Them 2016",
//			"A Cabana",
//			"Stephen Kings It 1990",
//			"Mersal",
//			"Rogue One 2016", "Rogue One A Star Wars Story 2016",
//			"Power Rangers 2017",
//			"Interstellar 2014",
//			"Alien Covenant 2017",
//			"Kidnap 2017",
//			"The Circle 2017",
//			"Arrival 2016",
//			"Star Wars Episode VII",
//			"The Accountant 2016",
//			"Deadpool 2016",
//			"Wheelman 2017",
//			"Thor The Dark World",
//			"Mad Max Fury Road 2015",
//			"Blade Runner 2049",
//			"Sing 2016",
//			"Avengers Age Of Ultron 2015",
//			"Batman Vs Superman Dawn Of Justice 2016",
//			"Suicide Squad 2016",
//			"The Lost City of Z 2016",
//			"Harry Potter And The Deathly Hallows Part 2 2011",
//			"The Lego Batman Movie 2017",
//			"Baadshaho",
//			"Inception 2010",
//			"Doutor Estranho 2017",
//			"Harry Potter and the Order of the Phoenix 2007",
//			"Chips 2017",
//			"Inside out 2015",
//			"Harry Potter and the Sorcerers Stone 2001",
//			"Harry Potter and the Chamber of Secrets",
//			"The Wolf of Wall Street 2013",
//			"Hacksaw Ridge 2016",
//			"Operation Dunkirk 2017",
//			"The Hitmans Bodyguard 2017",
//			"It comes at night 2017",
//			"The Villainess 2017",
//			"Harry Potter and the Deathly Hallows Part 1 2010",
//			"Fifty Shades of Grey 2015",
//			"Once Upon a Time in Venice 2017",
//			"Harry Potter and the Goblet of Fire 2005",
//			"What Happened to Monday 2017",
//			"The Emoji Movie 2017",
//			
//			"Harry Potter and the Half Blood Prince 2009",
//			"John Wick 2014",
//			"Sausage Party 2016",
//			"Harry Potter and the Prisoner of Azkaban 2004",
//			"Zootopia 2016",
//			"UFC 217 PPV Bisping vs St Pierre",
//			"Dawn of the Planet of the Apes 2014",
//			"Vida 2017",
//			"Fight Club 1999",
//			"The Godfather 1972",
//			"Star Wars Episode V The Empire Strikes Back 1980",
//			"Seven Sisters 2017",
//			"Frozen 2013",
//			"Star Wars Episode VI Return of the Jedi 1983",
//			"Rogue One Uma",
//			//"The Lego Ninjago Movie 2017",
//			"The Lion King 1994",
//			"The Dark Knight 2008",
//			"V for Vendetta 2005",
//			"The Adventurers 2017",
//			"Harry Potter and the Philosophers Stone 2001",
//			"The Girl on the Train 2016",
//			"A Bela e a Fera 2017",
//			"Gone Girl 2014",
//			
//			"Good Time 2017",
//			"The Prestige 2006",
//			"Star Wars Episode IV A New Hope 1977",
//			"The Shawshank Redemption 1994",
//			"The Magnificent Seven 2016",
//			"A Vigilante",
//			"Passengers 2016",
//			"XMen Apocalypse 2016",
//			"Rough Night 2017",
//			"Rise of the Planet of the Apes 2011",
//			"The Lord of the Rings The Fellowship of the Ring EXTENDED 2001",
//			"Miss Peregrines Home for Peculiar Children 2016",
////			"The Nice Guys 2016",
//			"The Avengers 2012",
//			"The Lord of the Rings The Return of the King EXTENDED 2003",
//			"Cinquenta Tons Mais Escuros 2017",
//			"Toilet Ek Prem Katha",
//			"Gremlin 2017",
//			
//			"Kingsman The Golden Circle 2017",
//			"Ex Machina 2015",
//			"The Jungle Book 2016",
//			"Resident Evil  Vendetta 2017",
//			"La La Land 2016",
//			"Annabelle Creation 2017",
//			"Doctor Strange 2016",
//			"Golmaal Again",
//			"Wind River 2017",
//			"The Only Living Boy in New York 2017",
//			"Hell or High Water 2016",
//			"Girls Trip 2017",
//			"Prometheus 2012",
//			"Hocus Pocus 1993",
//			"Jason Bourne 2016",
//			"Amityville The Awakening 2017",
//			"The Notebook 2004",
//			"The Conjuring 2013",
//			"Unforgettable 2017",
//			"Smurfs The Lost Village 2017",
//
//			"Trainspotting 1996",
//			"Shutter Island 2010",
//			"Kong A Ilha da Caveira 2017",
//			"Fist Fight 2017",
//			"The Nightmare Before Christmas 1993",
//			"Pirates of the Caribbean The Curse of the Black Pearl 2003",
//			"Moonlight 2016",
//			"The Matrix 1999",
//			"Despicable Me 2 2013",
//			"The Glass Castle 2017",
//			"Goodfellas 1990",
//			"Going in Style 2017",
////			"Colossal 2016",
//			"Boo A Madea Halloween 2016",
//			"The Lobster 2015",
//			"Shot Caller 2017",
//			"Everything Everything 2017",
//			"Aladdin 1992",
//			"The Thing 1982",
//			"Now You See Me 2 2016",
//			"AlienCovenant 2017",
//			"Acts Of Vengeance 2017",
//			"Star Wars Episode I  The Phantom Menace 1999",
//			"Finding Dory 2016",
//			"Resident Evil The Final Chapter 2016",
//			"Prisoners 2013",
//
//			"Baywatch 2017",
//			"Memento 2000",
//			"Captain Underpants The First Epic Movie 2017",
//			"Leatherface 2017",
//			"Sicario 2015",
//			"Hidden Figures 2016",
//			"Collateral Beauty 2016",
//			"Pirates of the Caribbean Dead Mans Chest 2006",
//			"Pulp Fiction 1994",
//			"On Wings of Eagles 2017",
//			"The Godfather Part II 1974",
//			"Life 2017",
//			
//			"Titanic 1997",
//			"Secret Superstar 2017",
//			"S W A T  Under Siege 2017",
//			"Pirates of the Caribbean At Worlds End 2007",
//			"Big Hero 6 2014",
//			"Focus 2015",
//			"Star Trek Beyond 2016",
//			"The Departed 2006",
//			"Mechanic Resurrection 2016",
//			"The Lord of the Rings The Two Towers",
//			"Sleepless 2017",
//			"Forrest Gump 1994",
//			"Spectre 2015",
//			"Cars 2006",
//			"47 Meters Down 2017",
//			"The Hunger Games Mockingjay Part 1 2014",
//			"Elle 2016",
//			"The Zookeepers Wife 2017",
//			"1922 2017",
//			"The Hangover 2009UNRATED",
//			"Pirates of the Caribbean On Stranger Tides 2011",
//			"Lucy 2014",
//			"Ratatouille 2007",
//
//
//			
//	};

}
