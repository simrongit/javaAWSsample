package com.simron.domain;

public class MovieInfo{
	private String movie;
	private String magnet;
	private String filter;
	private String youtube;
	private String subscene;
	
	public String getMovie() {
		return movie;
	}

	public void setMovie(String movie) {
		this.movie = movie;
	}

	public String getMagnet() {
		return magnet;
	}

	public void setMagnet(String magnet) {
		this.magnet = magnet;
	}

	public String getFilter() {
		return filter;
	}

	public void setFilter(String filter) {
		this.filter = filter;
	}

	public String getYoutube() {
		return youtube;
	}

	public void setYoutube(String youtube) {
		this.youtube = youtube;
	}

	public String getSubscene() {
		return subscene;
	}

	public void setSubscene(String subscene) {
		this.subscene = subscene;
	}

	public String toString() {
		return filter+"\t"+movie+"\t";//+magnet;
	}
}