STATIC_EMAIL = "test@gmail.com"
STATIC_PASSWORD = "123456" 
MAX_ATTEMPTS = 3   
def login(email, password):    
     if email == STATIC_EMAIL and password == STATIC_PASSWORD:
                 return True     
     return False   
print("========== LOGIN ==========") 
attempts = 0
while attempts < MAX_ATTEMPTS:  
       email = input("Enter Email    : ").strip() 
       password = input("Enter Password : ").strip()   
       if login(email, password):         
        print("Login Successful")        
        break     
       else:       
          attempts += 1    
          print("Login Failed: Invalid email or password")      
          print("Attempts left:", MAX_ATTEMPTS - attempts)
else:  
          print("Too many failed attempts. Access blocked.") 