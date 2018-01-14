package com.tools.simron.purchaselistapp;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.TextView;

import java.text.SimpleDateFormat;
import java.util.List;

/**
 * Created by simro on 11/17/2017.
 */

public class RowForLinearLayout extends BaseAdapter {

    LayoutInflater inflater;
    List<DataInfo> listDataInfo;
    SimpleDateFormat dateFormat = new SimpleDateFormat("MMM-dd-YYYY");

    @Override
    public int getCount() {
        return listDataInfo.size();
    }

    @Override
    public Object getItem(int i) {
        return listDataInfo.get(i);
    }

    @Override
    public long getItemId(int i) {
        return i;
    }

    @Override
    public View getView(int i, View view, ViewGroup viewGroup) {
        View v = inflater.inflate(R.layout.displaydata, null);
        TextView textView1 = (TextView) v.findViewById(R.id.dateTV);
        textView1.setText(dateFormat.format(listDataInfo.get(i).getDate()));
        TextView textView2 = (TextView) v.findViewById(R.id.itemTV);
        textView2.setText(listDataInfo.get(i).getItem());
        TextView textView3 = (TextView) v.findViewById(R.id.quantityTV);
        textView3.setText(Double.valueOf(listDataInfo.get(i).getQuantity()).toString());
        TextView textView4 = (TextView) v.findViewById(R.id.unitTV);
        textView4.setText(listDataInfo.get(i).getUnit());
        return v;
    }

    public RowForLinearLayout(Context c, List<DataInfo> listDataInfo){
        this.listDataInfo = listDataInfo;
        inflater = (LayoutInflater) c.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
    }

}
