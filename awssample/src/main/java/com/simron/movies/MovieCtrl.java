package com.simron.movies;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.simron.domain.MovieInfo;
import com.simron.utils.MandatoryInputs;

@RestController
@RequestMapping("/mov")
public class MovieCtrl {

	@Autowired
	private MovieService movieService;
	
	@GetMapping("/mlg")
	public List<String> getMovieListG() {
		return movieService.getFilters();
	}
	
	@PostMapping("/mlp")
	public List<String> getMovieListP(@RequestBody String userId) {
		MandatoryInputs.string(userId, "User Id");
		return movieService.getFilters();
	}
	
	
	@GetMapping("/mpg")
	public List<List<MovieInfo>> getCheckedMoviesListG() {
		return movieService.getParsedMovies();
	}
	
	@PostMapping("/mpp")
	public List<List<MovieInfo>> getCheckedMoviesListP(@RequestBody String userId) {
		MandatoryInputs.string(userId, "User Id");
		return movieService.getParsedMovies();
	}
	
	@GetMapping("/movieg")
	public List<MovieInfo> getMoviesG() {
		return movieService.getMovies();
	}
	
	@PostMapping("/moviep")
	public List<MovieInfo> getMoviesP(@RequestBody String userId) {
		MandatoryInputs.string(userId, "User Id");
		return movieService.getMovies();
	}
	
	@PostMapping("/addMovie")
	public String addMovieToFilter(@RequestBody String movieName) {
		MandatoryInputs.string(movieName, "Movie Name");
		String returnValue;
		int ret = movieService.addMovieToFilter(movieName);
		if(ret == 1) {
			returnValue = "Success";
		} else {
			returnValue = "Failed";
		}
		return returnValue;
	}
	
}
