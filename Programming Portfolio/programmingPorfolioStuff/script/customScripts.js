$( "#homeLink" ).click(function() {
    $("#homeLinkLi").attr("class","active");
     $("#resumeLinkLi").attr("class","");
     $("#portfolioLinkLi").attr("class","");
     $("#contactLinkLi").attr("class","");
     $("#classesLinkLi").attr("class","");
    
    $("#homeId").attr("class","shownHome");
    $("#resumeId").attr("class","hiddenResume");
    $("#porfolioId").attr("class","hiddenPorfolio");
    $("#contactId").attr("class","hiddenContact");
     $("#classesId").attr("class","hiddenClasses");
    
  
});
$( "#resumeLink" ).click(function() {
    $("#homeLinkLi").attr("class","");
     $("#resumeLinkLi").attr("class","active");
     $("#portfolioLinkLi").attr("class","");
     $("#contactLinkLi").attr("class","");
    $("#classesLinkLi").attr("class","");
    
    $("#homeId").attr("class","hiddenHome");
    $("#resumeId").attr("class","shownResume");
    $("#porfolioId").attr("class","hiddenPorfolio");
    $("#contactId").attr("class","hiddenContact");
    $("#classesId").attr("class","hiddenClasses");
    
    var success = new PDFObject({url:"programmingPorfolioStuff/RyanSchlernitzauerResumeV2.pdf"}).embed("pdf");
    
  
});
$( "#portfolioLink" ).click(function() {
    $("#homeLinkLi").attr("class","");
     $("#resumeLinkLi").attr("class","");
     $("#portfolioLinkLi").attr("class","active");
     $("#contactLinkLi").attr("class","");
    $("#classesLinkLi").attr("class","");
    
    $("#homeId").attr("class","hiddenHome");
    $("#resumeId").attr("class","hiddenResume");
    $("#porfolioId").attr("class","shownPortfolio");
    $("#contactId").attr("class","hiddenContact");
    $("#classesId").attr("class","hiddenClasses");
    
    $("#geneticAlgDetails").hide();
     $("#VRPBDetails").hide();
     $("#educationProjectDetails").hide();
    $("#chemicalTrackingProjectDetails").hide();
    
  
});
$( "#contactLink" ).click(function() {
    $("#homeLinkLi").attr("class","");
     $("#resumeLinkLi").attr("class","");
     $("#portfolioLinkLi").attr("class","");
     $("#contactLinkLi").attr("class","active");
    $("#classesLinkLi").attr("class","");
    
    $("#homeId").attr("class","hiddenHome");
    $("#resumeId").attr("class","hiddenResume");
    $("#porfolioId").attr("class","hiddenPorfolio");
    $("#contactId").attr("class","shownContact");
    $("#classesId").attr("class","hiddenClasses");
    
  
});
$( "#classesLink" ).click(function() {
    $("#homeLinkLi").attr("class","");
     $("#resumeLinkLi").attr("class","");
     $("#portfolioLinkLi").attr("class","");
     $("#contactLinkLi").attr("class","");
    $("#classesLinkLi").attr("class","active");
    
    $("#homeId").attr("class","hiddenHome");
    $("#resumeId").attr("class","hiddenResume");
    $("#porfolioId").attr("class","hiddenPorfolio");
    $("#contactId").attr("class","hiddenContact");
    $("#classesId").attr("class","shownClasses");
    
  
});
        
        
        //used within the portfolio to show and hide the project details
    $("#educationPlacementDetailsTitle").click(function(){
          $("#educationProjectDetails").toggle();
        });
    $("#chemicalTrackingHeading").click(function(){
          $("#chemicalTrackingProjectDetails").toggle();
        });
     $("#VRPBHeading").click(function(){
          $("#VRPBDetails").toggle();
        });
     $("#GAHeading").click(function(){
          $("#geneticAlgDetails").toggle();
        });