
function checkAccess(object) {
    if(object.role === "admin"){
        if(object.active === false){
            console.log("Admin Access Revoked");
        }else if(object.experience > 5 && object.department === "IT"){
            console.log("Full IT Admin Access");
            
        }else if(object.experience > 5){
            console.log("Full General Admin Access");
        }else if(object.experience <= 5){
            console.log("Limited Admin Access");
        }
    }
    else if(object.role === "manager"){
        if(object.active === false){
            console.log("Manager Access Revoked");
        }else if(object.experience > 3 && object.department === "Sales"){
            console.log("Full Sales Manager Access");
        }else if(object.experience > 3){
            console.log("Full Manager Access");
        }else if(object.experience <= 3){
            console.log("Limited Manager Access");
        }
    }
    else if(object.role === "user"){
        if(object.active === false){
            console.log("User Access Revoked");
        }else if(object.department === "Support"){
            console.log("Priority Support Access");
        }else if(object.department !== "Support"){
            console.log("User Access");
        }
    }
    else{
        console.log("Invalid Role");
    }
}

let person = { role: "user", experience: 2, active: true, department: "Support" };
checkAccess(person);