students={}
username=""
password=""

while True:
    print("1.registration")
    print("2.login")
    print("3.Add stusent")
    print("4.update student")
    print("5.Delete student")
    print("6.Search student")
    print("7.Display student")
    print("0.Exit")
    choice=input("enter your choice:")
    if choice=="1":
        username=input("enter username:")
        password=input("entre password:")
        print("registration successfull..")
    elif choice=="2":
        user=input("entrt username:")
        pwd=input("entert passworrd")
        if user==username and pwd==password and username=="":
            print("login successfull")
        else:
            print("invalid username and password")
    elif choice=="3":
        sid=in[ur]

