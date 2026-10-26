package pex9;

import java.util.Scanner;

public class login {

    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        String cusername="snehal12@gmail.com";
        String pass="456";
        int attempts=3;
        for(int i=1;i<4;i++){
            System.out.println("enter eamil:");
            String user=sc.nextLine();
            System.out.println("enter Password:");
            String cpass=sc.nextLine();
            if(user.equals(cusername) && pass.equals(cpass)){
                System.out.println("login sucesffull");
                break;
            }
            else{
                attempts=attempts-1;
                System.out.println("attempts left:"+attempts);
                System.out.println("invalid username and pssword");
            }
            
        }System.out.println("locked");
    }
}

