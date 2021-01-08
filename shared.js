var backdrop=document.querySelector(".backdrop");
var messagePlan=document.querySelector(".message-plan");
var choosePlanButtons=document.querySelectorAll(".plan button");
var messageNoButton=document.querySelector(".message-plan__actions button");
var toggleButton=document.querySelector(".toggle-button");
var mobileNav=document.querySelector(".mobile-nav");

choosePlanButtons.forEach(button => {
    button.addEventListener("click",() => {
        backdrop.style.display = "block";
        messagePlan.style.display = "block";
    })
});

if(messageNoButton){
    messageNoButton.addEventListener("click",() => {
        backdrop.style.display = "none";
        messagePlan.style.display = "none";
    });
}

backdrop.addEventListener("click",() => {
    mobileNav.style.display = "none";
    backdrop.style.display = "none";
    if(messagePlan){
        messagePlan.style.display = "none";
    }
});

toggleButton.addEventListener("click",() => {
    mobileNav.style.display = "block";
    backdrop.style.display="block";
});