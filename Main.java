/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.te4.testjava;
import java.util.Calendar;
import java.util.Scanner;
import javax.swing.*;
import java.util.*;
import java.math.*;



/**
 *
 * @author Elev
 */
public class Main {
    public static void main(String[] args){
        text();
        
    } 
    
    
    
    
      static void text (){
           
      }
    
    static void avstånd(){
        String n11 = JOptionPane.showInputDialog("nummer 1/1");
        int N11 = Integer.parseInt(n11);
        String n12 = JOptionPane.showInputDialog("nummer 1/2");
        int N12 = Integer.parseInt(n12);
        String n21 = JOptionPane.showInputDialog("nummer 2/1");
        int N21 = Integer.parseInt(n21);
        String n22 = JOptionPane.showInputDialog("nummer 2/2");
        int N22 = Integer.parseInt(n22);
        
        int N111 = (N11 - N21);
        int N222 = (N12 - N22);
        
        double dsf = Double.NaN;
        
        int result = N111 + N222;
        
        System.out.println("avståndert mella de är: " + result);
    }
    
    
    
    
    
    
    
    
    
    static void temperature(){
        String numer = JOptionPane.showInputDialog("Hi");
        float temperature = Integer.parseInt(numer);
        
         temperature = ((temperature - 32)*5)/9;
         
         System.out.println(temperature);
        
    }
    static void Räknaradie(){
        String radie = JOptionPane.showInputDialog("Mata in radie: ");
        
        
        
        
    } 
    static void läsain(){
        String username = JOptionPane.showInputDialog("Your Name");
        String[] ord = username.split(" ");
        System.out.println(username);
        System.out.println( "Du skriv " + username.length() + " tecken");
        System.out.println("Första " + ord[0]);
        System.out.println("Sista " + ord[1]);
        /*inte klar (sista raden)*/
                
    } 
     static void Klocka(){
        String Calan = Calendar.getInstance().getTime().toString();
         System.out.println("Klockan är:");
         System.out.println(Calan.substring(10,19));
    
    }
     static void tid(){
        
        String Calan = Calendar.getInstance().getTime().toString();
        System.out.println("Datum och Tid:");
        System.out.println(Calan);
    }
}

    /*int age = input.age.nextint();*/