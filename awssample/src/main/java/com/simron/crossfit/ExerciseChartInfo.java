package com.simron.crossfit;

import java.util.List;

public class ExerciseChartInfo {

    private String exerciseChart; // TODO does String[] or Map<String, Map<String, String[]>> is better?
    private List<ExerciseData> exerciseDataList;
    private long date;

    public String getExerciseChart() {
        return exerciseChart;
    }

    public void setExerciseChart(String exerciseChart) {
        this.exerciseChart = exerciseChart;
    }

    public List<ExerciseData> getExerciseDataList() {
        return exerciseDataList;
    }

    public void setExerciseDataList(List<ExerciseData> exerciseDataList) {
        this.exerciseDataList = exerciseDataList;
    }

    public long getDate() {
        return date;
    }

    public void setDate(long date) {
        this.date = date;
    }
}
