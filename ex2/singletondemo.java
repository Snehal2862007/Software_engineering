package ex2;
class Singleton{
    private static Singleton instance;
    private Singleton(){

    }
    public static Singleton getInstances(){
        if(instance==null){
            instance=new Singleton();
            
        }
        return instance;
    }
    public void display(){
        System.out.println("Singledon object created");
    }
}
public class singletondemo{
    public static void main(String[] args) {
        Singleton s1=Singleton.getInstances();
        Singleton s2=Singleton.getInstances();
        s1.display();
        System.out.println(s1==s2);

    }
}