package com.tools.simron.purchaselistapp;

import android.view.View;
import android.widget.AdapterView;
import android.widget.Toast;

/**
 * Created by simro on 11/15/2017.
 */

public class SpinnerSelectListener implements AdapterView.OnItemSelectedListener {

    public void onItemSelected(AdapterView<?> parent, View view, int pos, long id) {
        Toast.makeText(parent.getContext(),
                "OnItemSelectedListener : " + parent.getItemAtPosition(pos).toString(),
                Toast.LENGTH_SHORT).show();
    }

    @Override
    public void onNothingSelected(AdapterView<?> arg0) {
        Toast.makeText(arg0.getContext(),"OnItemSelectedListener : ",Toast.LENGTH_SHORT).show();
    }

}