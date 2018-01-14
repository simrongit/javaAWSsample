package com.tools.simron.purchaselistapp;

import android.app.DatePickerDialog;
import android.app.Dialog;
import android.content.Context;
import android.content.Intent;
import android.graphics.Color;
import android.graphics.Typeface;
import android.support.v4.app.DialogFragment;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.Gravity;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewGroup;
import android.view.WindowManager;
import android.widget.Adapter;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.AutoCompleteTextView;
import android.widget.Button;
import android.widget.CompoundButton;
import android.widget.DatePicker;
import android.widget.EditText;
import android.widget.LinearLayout;
import android.widget.ListAdapter;
import android.widget.ListView;
import android.widget.Spinner;
import android.widget.Switch;
import android.widget.TextView;
import android.widget.Toast;

import org.w3c.dom.Text;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class MainActivity extends AppCompatActivity {

    TextView dateTV;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        this.getWindow().setSoftInputMode(WindowManager.LayoutParams.SOFT_INPUT_ADJUST_PAN); // disables launching keyboard at start | also stops scrolling of listview

        dateTV = findViewById(R.id.dateTV);
        Calendar cal = Calendar.getInstance();
        dateTV.setText(cal.get(Calendar.MONTH)+"/"+cal.get(Calendar.DAY_OF_MONTH)+"/"+cal.get(Calendar.YEAR));
        dateTV.setClickable(true);
        dateTV.setTextColor(Color.parseColor("#009933"));
        dateTV.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                showDatePickerDialog(view);
            }
        });
        // or android:onClick="showDatePickerDialog"
        // android:clickable="true"

        List<String> unitL = new ArrayList<>(); unitL.add("Kg"); unitL.add("L"); unitL.add("gm"); unitL.add("Pieces");
        //Potato - Grocery - Vegetables - Kg
        //Tie - Garments - Blank - Pieces

        DataInfo dataInfo = new DataInfo();
        dataInfo.setCategory("Grocery");
        dataInfo.setDate(new Date());
        dataInfo.setItem("Potato");
        dataInfo.setQuantity(2.0);
        dataInfo.setSubCategory("Vegetables");
        dataInfo.setUnit("Kg");
        dataInfoList.add(dataInfo);
        dataInfo = new DataInfo();
        dataInfo.setCategory("Garments");
        dataInfo.setDate(new Date());
        dataInfo.setItem("Tie");
        dataInfo.setQuantity(2.0);
        dataInfo.setSubCategory("Blank");
        dataInfo.setUnit("Pieces");
        dataInfoList.add(dataInfo);
        dataInfo = new DataInfo();
        dataInfo.setCategory("Blank");
        dataInfo.setDate(new Date());
        dataInfo.setItem("");
        dataInfo.setQuantity(2.0);
        dataInfo.setSubCategory("Blank");
        dataInfo.setUnit("");
        dataInfoList.add(dataInfo);

        //item category subcategory relation will be presereved
        // user will be option to update to new or keep existing if he changes it

        List<String> catL = new ArrayList<>();
        List<String> catSubL = new ArrayList<>();
        List<String> itemL = new ArrayList<>();
        TreeNode root = new TreeNode("root", null);
        for(DataInfo dInfo : dataInfoList){
            TreeNode tCategory = root.get(dInfo.getCategory());
            if(tCategory == null){
                catL.add(dInfo.getCategory());
                tCategory = root.put(dInfo.getCategory());
            }
            TreeNode tSubCategory = tCategory.get(dInfo.getSubCategory());
            if(tSubCategory == null){
                catSubL.add(dInfo.getSubCategory());
                tSubCategory = tCategory.put(dInfo.getSubCategory());
            }
            TreeNode item = root.get(dInfo.getItem());
            if(item == null) {
                itemL.add(dInfo.getItem());
                item = tSubCategory.put(dInfo.getItem());
            }
        }



//        List<String> catL = new ArrayList<>(); catL.add("Grocery"); catL.add("Blank"); catL.add("Garments");
        final AutoCompleteTextView categoryAC = findViewById(R.id.categoryAC);
        ArrayAdapter<String> adapterC = new ArrayAdapter(this, android.R.layout.simple_spinner_item, catL){
            public View getView(int position, View convertView, ViewGroup parent) {
                View v = super.getView(position, convertView, parent);
                TextView tv = (TextView)v;
                tv.setTextSize(16);
                tv.setGravity(Gravity.LEFT|Gravity.CENTER_VERTICAL);
                return v;
            }
        };
        createAutoCompleteTV(catL, categoryAC, "All Categories", adapterC);
        AutoCompleteTextView subCatAC = findViewById(R.id.subCategoryAC);
        ArrayAdapter<String> adapterSC = new ArrayAdapter(this, android.R.layout.simple_spinner_item, catSubL){
            public View getView(int position, View convertView, ViewGroup parent) {
                View v = super.getView(position, convertView, parent);
                TextView tv = (TextView)v;
                tv.setTextSize(16);
                tv.setGravity(Gravity.LEFT|Gravity.CENTER_VERTICAL);
                return v;
            }
        };
        createAutoCompleteTV(catSubL, subCatAC, "All Sub Categories", adapterSC);


        categoryAC.setOnItemClickListener((adapterView, view, position, l) -> {
            String selectedCategory = adapterView.getItemAtPosition(position).toString();
            adapterSC.clear();
            adapterSC.addAll(root.get(selectedCategory).child.keySet());
            adapterSC.notifyDataSetChanged();
//            List<String> newCatSubL = new ArrayList<>();
//            newCatSubL.addAll(root.get(selectedCategory).child.keySet());
//            root.get(selectedCategory);
//            createAutoCompleteTV(newCatSubL, subCatAC, "All Categories");
            Toast.makeText(adapterView.getContext(),"Selected : " + adapterView.getItemAtPosition(position).toString(), Toast.LENGTH_SHORT).show();
        });
        categoryAC.setOnFocusChangeListener((view, movedIn) -> {
            if(!movedIn){ // false mean focus moved out
//            Toast.makeText(view.getContext(),"Clicked In : "+clickedIn+" "+categoryAC.getText().toString(), Toast.LENGTH_SHORT).show();
            }
        });

//        List<String> catSubL = new ArrayList<>(); catSubL.add("Vegetables"); catSubL.add("Blank");
        subCatAC.setOnItemClickListener((adapterView, view, position, l) -> {
            Toast.makeText(adapterView.getContext(),"Selected2 : " + adapterView.getItemAtPosition(position).toString(), Toast.LENGTH_SHORT).show();
        });

//        List<String> itemL = new ArrayList<>(); itemL.add("Potato"); itemL.add("Tie");
        AutoCompleteTextView itemAC = findViewById(R.id.itemAC);
        ArrayAdapter<String> adapterI = new ArrayAdapter(this, android.R.layout.simple_spinner_item, itemL){
            public View getView(int position, View convertView, ViewGroup parent) {
                View v = super.getView(position, convertView, parent);
                TextView tv = (TextView)v;
                tv.setTextSize(16);
                tv.setGravity(Gravity.LEFT|Gravity.CENTER_VERTICAL);
                return v;
            }
        };
        createAutoCompleteTV(itemL, itemAC, "Select an Item", adapterI);
        itemAC.setOnItemClickListener((adapterView, view, position, l) -> {
            Toast.makeText(adapterView.getContext(),"Selected3 : " + adapterView.getItemAtPosition(position).toString(), Toast.LENGTH_SHORT).show();
        });

        Spinner unitsS = findViewById(R.id.unitsS);
        ArrayAdapter<String> adapter = new ArrayAdapter(this, android.R.layout.simple_spinner_item, unitL);
        adapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        unitsS.setAdapter(adapter);
        unitsS.setOnItemSelectedListener(new SpinnerSelectListener());

        Button addEntryB = findViewById(R.id.addEntryB);
        addEntryB.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

            }
        });

        Button submitEntriesB = findViewById(R.id.submitEntriesB);
        submitEntriesB.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

            }
        });
        submitEntriesB.setEnabled(false);

        Switch categoryS = findViewById(R.id.categoryS);
        categoryS.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener() {
            public void onClick(View view) {

            }

            @Override
            public void onCheckedChanged(CompoundButton compoundButton, boolean isChecked) {
                if (isChecked) {
                    // The toggle is enabled
                } else {
                    // The toggle is disabled
                }
            }
        });


        populateListView(this);

    }

    private void createAutoCompleteTV(List<String> acList, AutoCompleteTextView autoComTV, String hint, ArrayAdapter<String> adapter) {
//        ArrayAdapter<String> adapter = new ArrayAdapter(this, android.R.layout.simple_spinner_item, acList);
//        ArrayAdapter<String> adapter = new ArrayAdapter(this, android.R.layout.simple_spinner_item, acList){
//            public View getView(int position, View convertView, ViewGroup parent) {
//                View v = super.getView(position, convertView, parent);
//                TextView tv = (TextView)v;
//                tv.setTextSize(16);
//                tv.setGravity(Gravity.LEFT|Gravity.CENTER_VERTICAL);
//                return v;
//            }
//        };
        adapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        autoComTV.setAdapter(adapter);
        autoComTV.setOnTouchListener((v,event)->{autoComTV.showDropDown();return false;});
        autoComTV.setHint(hint);
        autoComTV.setSelectAllOnFocus(true);
    }


    public void showDatePickerDialog(View v) {
        DatePickerFragment newFragment = new DatePickerFragment();
        newFragment.setTextView(dateTV);
        newFragment.show(getSupportFragmentManager(), "datePicker");
    }

    private List<DataInfo> dataInfoList = new ArrayList<>();

    private void populateListView(Context c) {
        RowForLinearLayout row = new RowForLinearLayout(c, dataInfoList);
        ListView listView = (ListView) findViewById(R.id.dataList);
        listView.setAdapter(row);
        listView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> adapterView, View view, int i, long l) {
                // Intent activity = new Intent(getApplicationContext(), DetailActivity.class);
                //activity.putExtra("item_index", i);
//                Intent activity = new Intent(getApplicationContext(), DetailActivity.class);
//                activity.putExtra("weightInfo",weightList.get(i));
//                startActivity(activity);
            }
        });
    }

    private class TreeNode{
        String name;
        Map<String, TreeNode> child = new HashMap<>();
        TreeNode parent;
        public TreeNode(String aName, TreeNode aParent){
            name = aName;
            parent = aParent;
        }
        public TreeNode get(String aName){
            return child.get(aName);
        }
        public TreeNode put(String aName){
            TreeNode newChild = new TreeNode(aName, this);
            child.put(aName, newChild);
            return newChild;
        }
    }
}
