const userRole = "editor";

switch (userRole) {
  case "editor":
    console.log("You have full access.");  
    
  case "editors": 
    console.log("You can edit content.");
    break;
  default:
    console.log("You have limited access.");
}