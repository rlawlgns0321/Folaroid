package com.folaroid.portfolio.api.controller;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;

public class ReadmeController {

    public ArrayList<String> getMDContent (String urlString) {
        URL url; // The URL to read
        HttpURLConnection conn; // The actual connection to the web page
        BufferedReader rd; // Used to read results from the web page
        String line; // An individual line of the web page HTML
        ArrayList<String> res = new ArrayList<>(); // A long string containing all the HTML
        try {
            url = new URL(urlString);
            conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");
            rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
            while ((line = rd.readLine()) != null) {
                System.out.println(line);
                if (line.length() != 0) {
                    if (line.contains("|")) { //table parsing
                       int barNumber = 0;
                       for (int i = 0 ; i < line.length() ; i++) {
                           if (line.charAt(i) == '|')
                               barNumber++;
                       }
                       String headerCheckLine = rd.readLine();
                       if (headerCheckLine != null && headerCheckLine.contains("|")) {
                           boolean isTable = true;
                           boolean passDash = false;
                           char currentChar = headerCheckLine.charAt(0);
                           char nextChar;

                           if (currentChar != '|' && currentChar != '-')
                               isTable = false;
                           else {
                               for (int i = 0; i < headerCheckLine.length() - 1; i++) {
                                   currentChar = headerCheckLine.charAt(i);
                                   nextChar = headerCheckLine.charAt(i + 1);
                                   if (nextChar != '|' && nextChar != ':' && nextChar != '-' && nextChar != ' ') {
                                       isTable = false;
                                       break;
                                   }
                                   if (currentChar == '|') {
                                       if (passDash)
                                           passDash = false;
                                       else {
                                            isTable = false;
                                            break;
                                       }
                                   }
                                   else if (currentChar == ':') {
                                       if (nextChar == '-' && passDash) {
                                           isTable = false;
                                           break;
                                       }
                                   }
                                   else if (currentChar == ' ') {
                                       if (passDash && nextChar == '-') {
                                           isTable = false;
                                           break;
                                       }
                                   }
                                   else if (currentChar == '-') {
                                        if (!passDash)
                                            passDash = true;

                                   }
                                   else {
                                       isTable = false;
                                       break;
                                   }
                               }
                           }
                          /* String[] headerCheckSplitLine = headerCheckLine.split("\\|");
                           System.out.println("barNumber = " + barNumber + " Table col number is " + headerCheckSplitLine.length);
                           boolean isTable = true;
                           if (headerCheckSplitLine.length >= barNumber - 1 && headerCheckSplitLine.length <= barNumber + 1) {
                               for (int i = 0 ; i < headerCheckSplitLine.length ; i++) {
                                   headerCheckSplitLine[i].replace(" ", "");
                                   String check = new String(new char[headerCheckSplitLine[i].length()]).replace('\0', '-');
                                    System.out.println("line is " + headerCheckSplitLine[i] + ", check is : " + check);
                                   String checkLeft = "";
                                   String checkRight = "";
                                   String checkMid = "";

                                   if (headerCheckSplitLine[i].length() > 1) {
                                       checkLeft = ":" + check.substring(1);
                                       checkRight = check.substring(1) + ":";
                                   }
                                   if (headerCheckSplitLine[i].length() > 2) {
                                       checkMid = ":" + check.substring(2) + ":";
                                   }

                                   if (!headerCheckSplitLine[i].equals(check)
                                           && !(headerCheckSplitLine[i].length() > 1 && headerCheckSplitLine[i].equals(checkLeft))
                                           && !(headerCheckSplitLine[i].length() > 1 && headerCheckSplitLine[i].equals(checkRight))
                                           && !(headerCheckSplitLine[i].length() > 2 && headerCheckSplitLine[i].equals(checkMid))) {
                                       isTable = false;
                                       break;
                                   }
                               }
                           }*/
                           if (!isTable) {
                               res.add(line);
                               line = headerCheckLine;
                           }
                           else {
                               line += "\n" + headerCheckLine;
                               String tableLine;
                               while ((tableLine = rd.readLine()) != null && tableLine.length() != 0)
                                   line += "\n" + tableLine;
                               res.add(line);
                               line = tableLine;
                           }
                       }
                    }
                    if (line.length() == 0)
                        continue;
                    if (line.charAt(0) == '!' && line.charAt(1) == '[') { //link, image parsing
                        int imgOpenIdx = 0;
                        int imgCloseIdx = 0;
                        while (imgOpenIdx < line.length() - 1 && !(line.charAt(imgOpenIdx) == ']' && line.charAt(imgOpenIdx + 1) == '('))
                            imgOpenIdx++;
                        if (imgOpenIdx != line.length() - 1) {
                            imgCloseIdx = imgOpenIdx;
                            while (imgCloseIdx < line.length() && line.charAt(imgCloseIdx) != ')')
                                imgCloseIdx++;
                            if (imgCloseIdx != line.length())
                                line = line.substring(imgOpenIdx + 2, imgCloseIdx);
                        }
                        //continue;
                    }
                    else if (line.length() > 2   //header parsing
                        && (line.charAt(0) == '='
                        || line.charAt(0) == '-')
                        && line.charAt(0) == line.charAt(1)
                        && line.charAt(1) == line.charAt(2))
                        continue;

                    else if (line.length() > 2   //codeblock parsing
                        && line.charAt(0) == '`'
                        && line.charAt(0) == line.charAt(1)
                        && line.charAt(1) == line.charAt(2)) {
                        String codeLine;
                        while ((codeLine = rd.readLine()) != null) {
                            line += "\n" + codeLine;
                            if (codeLine.length() > 2 && codeLine.substring(codeLine.length() - 3).equals("```"))
                                break;
                        }
                    }

                    else if (line.charAt(0) == '>') { //quotes parsing
                        String quoteLine;
                        while ((quoteLine = rd.readLine()) != null && quoteLine.charAt(0) == '>')
                            line += "\n" + quoteLine;
                    }

                    else if ((line.charAt(0) == '-' //unordered list parsing
                    || line.charAt(0) == '*'
                    || line.charAt(0) == '+')) {
                        String unorderedListLine;
                        while ((unorderedListLine = rd.readLine()) != null && unorderedListLine.length() != 0) {
                            line += "\n" + unorderedListLine;
                        }
                    }

                    else if (line.charAt(0) >= '0' && line.charAt(0) <= 9) { //ordered list parsing
                        for (int i = 1 ; i < line.length() - 1 ; i++) {
                            if (line.charAt(i) < '0' || line.charAt(i) > '9')
                                break;
                            if (line.charAt(i) == '.' && line.charAt(i + 1) == ' ') {
                                String orderedListLine;
                                while ((orderedListLine = rd.readLine()) != null && orderedListLine.length() != 0) {
                                    line += "\n" + orderedListLine;
                                }
                                break;
                            }
                        }
                    }

                    res.add(line);
                }
            }
            rd.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return res;
    }

}
