   $(document).ready(function(){

	   //--------------------------------------1     
	   
   	
   	   $('#sel1').on('change', function() {
                var type = document.getElementById("sel1").value;
            switch(type) {
                case "Single Rigid":
                      $("#pmfn1").removeAttr("disabled");
                      $("#pmreg1").removeAttr("disabled");
                      $("#ext1").removeAttr("disabled");
                      $("#t1fn1").attr("disabled", "disabled");
                      $("#t1reg1").attr("disabled", "disabled");
                      $("#t2fn1").attr("disabled", "disabled");
                      $("#t2reg1").attr("disabled", "disabled");
                        break;
                case "Bogie Rigid":
                   $("#pmfn1").removeAttr("disabled");
                   $("#pmreg1").removeAttr("disabled");
                   $("#ext1").removeAttr("disabled");
                   $("#t1fn1").attr("disabled", "disabled");
                   $("#t1reg1").attr("disabled", "disabled");
                   $("#t2fn1").attr("disabled", "disabled");
                   $("#t2reg1").attr("disabled", "disabled");
                     break;
                case "Prime Mover":
                  $("#pmfn1").removeAttr("disabled");
                    $("#pmreg1").removeAttr("disabled");
                    $("#ext1").removeAttr("disabled");
                    $("#t1fn1").attr("disabled", "disabled");
                    $("#t1reg1").attr("disabled", "disabled");
                    $("#t2fn1").attr("disabled", "disabled");
                    $("#t2reg1").attr("disabled", "disabled");
                break;
                
                case "Single Combination":
                    $("#t1fn1").removeAttr("disabled");
                    $("#t1reg1").removeAttr("disabled");
                    $("#ext1").removeAttr("disabled");    
                    $("#pmfn1").removeAttr("disabled");
                    $("#pmreg1").removeAttr("disabled");
                    $("#t2fn1").attr("disabled", "disabled");
                    $("#t2reg1").attr("disabled", "disabled");          
            break;
            
                case "B Double Combination":
                    

              	  $("#t1fn1").removeAttr("disabled");
                    $("#t2fn1").removeAttr("disabled");
                    $("#t1reg1").removeAttr("disabled");
                    $("#t2reg1").removeAttr("disabled");
                    $("#pmfn1").removeAttr("disabled");
                    $("#pmreg1").removeAttr("disabled");
                    $("#ext1").removeAttr("disabled");
                  
                    
                    break;
                    
                    
                case "Single Trailer":
                    $("#t1fn1").removeAttr("disabled");
                    $("#t1reg1").removeAttr("disabled");
                    $("#ext1").removeAttr("disabled");    
                    $("#pmfn1").attr("disabled", "disabled");
                    $("#pmreg1").attr("disabled", "disabled");
                    $("#t2fn1").attr("disabled", "disabled");
                    $("#t2reg1").attr("disabled", "disabled");
            break;
            
            
                case "B Double Trailer":
                    $("#t1fn1").removeAttr("disabled");
                    $("#t1reg1").removeAttr("disabled");
                    $("#ext1").removeAttr("disabled");    
                    $("#pmfn1").attr("disabled", "disabled");
                    $("#pmreg1").attr("disabled", "disabled");
                    $("#t2fn1").removeAttr("disabled");
                    $("#t2reg1").removeAttr("disabled");
            break;
            
                case "FORKLIFT":
                    $("#pmfn1").removeAttr("disabled");
                      $("#pmreg1").removeAttr("disabled");
                      $("#ext1").removeAttr("disabled");
                      $("#t1fn1").attr("disabled", "disabled");
                      $("#t1reg1").attr("disabled", "disabled");
                      $("#t2fn1").attr("disabled", "disabled");
                      $("#t2reg1").attr("disabled", "disabled");
                  break;
            
            
                
                case "VAN/UTE/CAR":
                      $("#pmfn1").removeAttr("disabled");
                      $("#pmreg1").removeAttr("disabled");
                      $("#ext1").removeAttr("disabled");
                        $("#t1fn1").attr("disabled", "disabled");
                        $("#t1reg1").attr("disabled", "disabled");
                        $("#t2fn1").attr("disabled", "disabled");
                        $("#t2reg1").attr("disabled", "disabled"); 
                break;
                
                case "Dolly Trailer":
                    $("#t1fn1").removeAttr("disabled");
                    $("#t1reg1").removeAttr("disabled");
                    $("#ext1").removeAttr("disabled");    
                    $("#pmfn1").attr("disabled", "disabled");
                    $("#pmreg1").attr("disabled", "disabled");
                    $("#t2fn1").attr("disabled", "disabled");
                    $("#t2reg1").attr("disabled", "disabled");
            break;
                case "Other 1":


            						$("#pmfn1").removeAttr("disabled");
            						$("#pmreg1").removeAttr("disabled");
            						$("#t1fn1").attr("disabled", "disabled");
                                    $("#t1reg1").attr("disabled", "disabled");
                                    $("#t2fn1").attr("disabled", "disabled");
                                    $("#t2reg1").attr("disabled", "disabled");
                                    $("#ext1").removeAttr("disabled");    
                                  
                                    
                                      
                                      break;
                                      
            					case "Other 2":
                

            						$("#pmfn1").removeAttr("disabled");
            						$("#pmreg1").removeAttr("disabled");
            						$("#t1fn1").removeAttr("disabled");
            						$("#t1reg1").removeAttr("disabled");
                                    $("#t2fn1").attr("disabled", "disabled");
                                    $("#t2reg1").attr("disabled", "disabled");
                                    $("#ext1").removeAttr("disabled");  
                
                  
                  break;
            					case "Other 3":
                

            						$("#pmfn1").removeAttr("disabled");
            						$("#pmreg1").removeAttr("disabled");
            						$("#t1fn1").removeAttr("disabled");
            						$("#t1reg1").removeAttr("disabled");
            						$("#t2fn1").removeAttr("disabled");
            						$("#t2reg1").removeAttr("disabled");
                                    $("#ext1").removeAttr("disabled");  
                
                  
                  break;
                 default:
                        $("#t1fn1").removeAttr("disabled");
                        $("#t2fn1").removeAttr("disabled");
                        $("#t1reg1").removeAttr("disabled");
                        $("#t2reg1").removeAttr("disabled");
                        $("#pmfn1").removeAttr("disabled");
                        $("#pmreg1").removeAttr("disabled");
                        $("#ext1").removeAttr("disabled");
                    break;
            } 
        	
            
            
            if(type == "Single Rigid"){
            $('#type1').html('<option value="">Type</option><option value="Box">Box</option><option value="Flat Top">Flat Top</option>');
            }
            if(type == "Bogie Rigid"){
            $('#type1').html('<option value="">Type</option><option value=" ">All</option>');
            }
            if(type == "Prime Mover"){
            $('#type1').html('<option value="">Type</option><option value="Day Cab">Day Cab</option><option value="Sleeper Cab">Sleeper Cab</option>');
            }
            if(type == "Single Combination"){
            $('#type1').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option><option value="Car Carrier">Car Carrier</option>');
            }
            if(type == "B Double Combination"){
            $('#type1').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
            }
            if(type == "Single Trailer"){
            $('#type1').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option>');
            }
            if(type == "B Double Trailer"){
            $('#type1').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
            }
            if(type == "FORKLIFT"){
            $('#type1').html('<option value="">Type</option><option value="Small">Small</option><option value="Medium">Medium</option><option value="Large">Large</option>');
            }
            if(type == "VAN/UTE/CAR"){
            $('#type1').html('<option value="">Type</option><option value=" ">All</option>');
            }
            if(type == "Dolly Trailer"){
            $('#type1').html('<option value="">Type</option><option value=" ">All</option>');
            }
            if(type == "Other 1"){
            $('#type1').html('<option value="">Type</option><option value=" ">All</option>');
            }
            if(type == "Other 2"){
            $('#type1').html('<option value="">Type</option><option value=" ">All</option>');
            }
            if(type == "Other 3"){
            $('#type1').html('<option value="">Type</option><option value=" ">All</option>');
            }
        	}).trigger("change");       
	   
	   
	   
	   
	   
	 
	   
	   
	   
                
 //----------- 2 
  	   $('#sel2').on('change', function() {
           var type = document.getElementById("sel2").value;
       switch(type) {
           case "Single Rigid":
                 $("#pmfn2").removeAttr("disabled");
                 $("#pmreg2").removeAttr("disabled");
                 $("#ext2").removeAttr("disabled");
                 $("#t1fn2").attr("disabled", "disabled");
                 $("#t1reg2").attr("disabled", "disabled");
                 $("#t2fn2").attr("disabled", "disabled");
                 $("#t2reg2").attr("disabled", "disabled");
                   break;
           case "Bogie Rigid":
              $("#pmfn2").removeAttr("disabled");
              $("#pmreg2").removeAttr("disabled");
              $("#ext2").removeAttr("disabled");
              $("#t1fn2").attr("disabled", "disabled");
              $("#t1reg2").attr("disabled", "disabled");
              $("#t2fn2").attr("disabled", "disabled");
              $("#t2reg2").attr("disabled", "disabled");
                break;
           case "Prime Mover":
             $("#pmfn2").removeAttr("disabled");
               $("#pmreg2").removeAttr("disabled");
               $("#ext2").removeAttr("disabled");
               $("#t1fn2").attr("disabled", "disabled");
               $("#t1reg2").attr("disabled", "disabled");
               $("#t2fn2").attr("disabled", "disabled");
               $("#t2reg2").attr("disabled", "disabled");
           break;
           
           case "Single Combination":
               $("#t1fn2").removeAttr("disabled");
               $("#t1reg2").removeAttr("disabled");
               $("#ext2").removeAttr("disabled");    
               $("#pmfn2").removeAttr("disabled");
               $("#pmreg2").removeAttr("disabled");
               $("#t2fn2").attr("disabled", "disabled");
               $("#t2reg2").attr("disabled", "disabled");          
       break;
       
           case "B Double Combination":
               

         	  $("#t1fn2").removeAttr("disabled");
               $("#t2fn2").removeAttr("disabled");
               $("#t1reg2").removeAttr("disabled");
               $("#t2reg2").removeAttr("disabled");
               $("#pmfn2").removeAttr("disabled");
               $("#pmreg2").removeAttr("disabled");
               $("#ext2").removeAttr("disabled");
             
               
               break;
               
               
           case "Single Trailer":
               $("#t1fn2").removeAttr("disabled");
               $("#t1reg2").removeAttr("disabled");
               $("#ext2").removeAttr("disabled");    
               $("#pmfn2").attr("disabled", "disabled");
               $("#pmreg2").attr("disabled", "disabled");
               $("#t2fn2").attr("disabled", "disabled");
               $("#t2reg2").attr("disabled", "disabled");
       break;
       
       
           case "B Double Trailer":
               $("#t1fn2").removeAttr("disabled");
               $("#t1reg2").removeAttr("disabled");
               $("#ext2").removeAttr("disabled");    
               $("#pmfn2").attr("disabled", "disabled");
               $("#pmreg2").attr("disabled", "disabled");
               $("#t2fn2").removeAttr("disabled");
               $("#t2reg2").removeAttr("disabled");
       break;
       
           case "FORKLIFT":
               $("#pmfn2").removeAttr("disabled");
                 $("#pmreg2").removeAttr("disabled");
                 $("#ext2").removeAttr("disabled");
                 $("#t1fn2").attr("disabled", "disabled");
                 $("#t1reg2").attr("disabled", "disabled");
                 $("#t2fn2").attr("disabled", "disabled");
                 $("#t2reg2").attr("disabled", "disabled");
             break;
       
       
           
           case "VAN/UTE/CAR":
                 $("#pmfn2").removeAttr("disabled");
                 $("#pmreg2").removeAttr("disabled");
                 $("#ext2").removeAttr("disabled");
                   $("#t1fn2").attr("disabled", "disabled");
                   $("#t1reg2").attr("disabled", "disabled");
                   $("#t2fn2").attr("disabled", "disabled");
                   $("#t2reg2").attr("disabled", "disabled"); 
           break;
           
           case "Dolly Trailer":
               $("#t1fn2").removeAttr("disabled");
               $("#t1reg2").removeAttr("disabled");
               $("#ext2").removeAttr("disabled");    
               $("#pmfn2").attr("disabled", "disabled");
               $("#pmreg2").attr("disabled", "disabled");
               $("#t2fn2").attr("disabled", "disabled");
               $("#t2reg2").attr("disabled", "disabled");
       break;
           case "Other 1":


       						$("#pmfn2").removeAttr("disabled");
       						$("#pmreg2").removeAttr("disabled");
       						$("#t1fn2").attr("disabled", "disabled");
                               $("#t1reg2").attr("disabled", "disabled");
                               $("#t2fn2").attr("disabled", "disabled");
                               $("#t2reg2").attr("disabled", "disabled");
                               $("#ext2").removeAttr("disabled");    
                             
                               
                                 
                                 break;
                                 
       					case "Other 2":
           

       						$("#pmfn2").removeAttr("disabled");
       						$("#pmreg2").removeAttr("disabled");
       						$("#t1fn2").removeAttr("disabled");
       						$("#t1reg2").removeAttr("disabled");
                               $("#t2fn2").attr("disabled", "disabled");
                               $("#t2reg2").attr("disabled", "disabled");
                               $("#ext2").removeAttr("disabled");  
           
             
             break;
       					case "Other 3":
           

       						$("#pmfn2").removeAttr("disabled");
       						$("#pmreg2").removeAttr("disabled");
       						$("#t1fn2").removeAttr("disabled");
       						$("#t1reg2").removeAttr("disabled");
       						$("#t2fn2").removeAttr("disabled");
       						$("#t2reg2").removeAttr("disabled");
                               $("#ext2").removeAttr("disabled");  
           
             
             break;
            default:
                   $("#t1fn2").removeAttr("disabled");
                   $("#t2fn2").removeAttr("disabled");
                   $("#t1reg2").removeAttr("disabled");
                   $("#t2reg2").removeAttr("disabled");
                   $("#pmfn2").removeAttr("disabled");
                   $("#pmreg2").removeAttr("disabled");
                   $("#ext2").removeAttr("disabled");
               break;
       } 
   	
       
       
       if(type == "Single Rigid"){
           $('#type2').html('<option value="">Type</option><option value="Box">Box</option><option value="Flat Top">Flat Top</option>');
           }
           if(type == "Bogie Rigid"){
           $('#type2').html('<option value="">Type</option><option value=" ">All</option>');
           }
           if(type == "Prime Mover"){
           $('#type2').html('<option value="">Type</option><option value="Day Cab">Day Cab</option><option value="Sleeper Cab">Sleeper Cab</option>');
           }
           if(type == "Single Combination"){
           $('#type2').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option><option value="Car Carrier">Car Carrier</option>');
           }
           if(type == "B Double Combination"){
           $('#type2').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
           }
           if(type == "Single Trailer"){
           $('#type2').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option>');
           }
           if(type == "B Double Trailer"){
           $('#type2').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
           }
           if(type == "FORKLIFT"){
           $('#type2').html('<option value="">Type</option><option value="Small">Small</option><option value="Medium">Medium</option><option value="Large">Large</option>');
           }
           if(type == "VAN/UTE/CAR"){
           $('#type2').html('<option value="">Type</option><option value=" ">All</option>');
           }
           if(type == "Dolly Trailer"){
           $('#type2').html('<option value="">Type</option><option value=" ">All</option>');
           }
           if(type == "Other 1"){
           $('#type2').html('<option value="">Type</option><option value=" ">All</option>');
           }
           if(type == "Other 2"){
           $('#type2').html('<option value="">Type</option><option value=" ">All</option>');
           }
           if(type == "Other 3"){
           $('#type2').html('<option value="">Type</option><option value=" ">All</option>');
           }
       	}).trigger("change");  
  
  
//==================================================== 3    	   
  	  $('#sel3').on('change', function() {
          var type = document.getElementById("sel3").value;
      switch(type) {
          case "Single Rigid":
                $("#pmfn3").removeAttr("disabled");
                $("#pmreg3").removeAttr("disabled");
                $("#ext3").removeAttr("disabled");
                $("#t1fn3").attr("disabled", "disabled");
                $("#t1reg3").attr("disabled", "disabled");
                $("#t2fn3").attr("disabled", "disabled");
                $("#t2reg3").attr("disabled", "disabled");
                  break;
          case "Bogie Rigid":
             $("#pmfn3").removeAttr("disabled");
             $("#pmreg3").removeAttr("disabled");
             $("#ext3").removeAttr("disabled");
             $("#t1fn3").attr("disabled", "disabled");
             $("#t1reg3").attr("disabled", "disabled");
             $("#t2fn3").attr("disabled", "disabled");
             $("#t2reg3").attr("disabled", "disabled");
               break;
          case "Prime Mover":
            $("#pmfn3").removeAttr("disabled");
              $("#pmreg3").removeAttr("disabled");
              $("#ext3").removeAttr("disabled");
              $("#t1fn3").attr("disabled", "disabled");
              $("#t1reg3").attr("disabled", "disabled");
              $("#t2fn3").attr("disabled", "disabled");
              $("#t2reg3").attr("disabled", "disabled");
          break;
          
          case "Single Combination":
              $("#t1fn3").removeAttr("disabled");
              $("#t1reg3").removeAttr("disabled");
              $("#ext3").removeAttr("disabled");    
              $("#pmfn3").removeAttr("disabled");
              $("#pmreg3").removeAttr("disabled");
              $("#t2fn3").attr("disabled", "disabled");
              $("#t2reg3").attr("disabled", "disabled");          
      break;
      
          case "B Double Combination":
              

        	  $("#t1fn3").removeAttr("disabled");
              $("#t2fn3").removeAttr("disabled");
              $("#t1reg3").removeAttr("disabled");
              $("#t2reg3").removeAttr("disabled");
              $("#pmfn3").removeAttr("disabled");
              $("#pmreg3").removeAttr("disabled");
              $("#ext3").removeAttr("disabled");
            
              
              break;
              
              
          case "Single Trailer":
              $("#t1fn3").removeAttr("disabled");
              $("#t1reg3").removeAttr("disabled");
              $("#ext3").removeAttr("disabled");    
              $("#pmfn3").attr("disabled", "disabled");
              $("#pmreg3").attr("disabled", "disabled");
              $("#t2fn3").attr("disabled", "disabled");
              $("#t2reg3").attr("disabled", "disabled");
      break;
      
      
          case "B Double Trailer":
              $("#t1fn3").removeAttr("disabled");
              $("#t1reg3").removeAttr("disabled");
              $("#ext3").removeAttr("disabled");    
              $("#pmfn3").attr("disabled", "disabled");
              $("#pmreg3").attr("disabled", "disabled");
              $("#t2fn3").removeAttr("disabled");
              $("#t2reg3").removeAttr("disabled");
      break;
      
          case "FORKLIFT":
              $("#pmfn3").removeAttr("disabled");
                $("#pmreg3").removeAttr("disabled");
                $("#ext3").removeAttr("disabled");
                $("#t1fn3").attr("disabled", "disabled");
                $("#t1reg3").attr("disabled", "disabled");
                $("#t2fn3").attr("disabled", "disabled");
                $("#t2reg3").attr("disabled", "disabled");
            break;
      
      
          
          case "VAN/UTE/CAR":
                $("#pmfn3").removeAttr("disabled");
                $("#pmreg3").removeAttr("disabled");
                $("#ext3").removeAttr("disabled");
                  $("#t1fn3").attr("disabled", "disabled");
                  $("#t1reg3").attr("disabled", "disabled");
                  $("#t2fn3").attr("disabled", "disabled");
                  $("#t2reg3").attr("disabled", "disabled"); 
          break;
          
          case "Dolly Trailer":
              $("#t1fn3").removeAttr("disabled");
              $("#t1reg3").removeAttr("disabled");
              $("#ext3").removeAttr("disabled");    
              $("#pmfn3").attr("disabled", "disabled");
              $("#pmreg3").attr("disabled", "disabled");
              $("#t2fn3").attr("disabled", "disabled");
              $("#t2reg3").attr("disabled", "disabled");
      break;
          case "Other 1":


      						$("#pmfn3").removeAttr("disabled");
      						$("#pmreg3").removeAttr("disabled");
      						$("#t1fn3").attr("disabled", "disabled");
                              $("#t1reg3").attr("disabled", "disabled");
                              $("#t2fn3").attr("disabled", "disabled");
                              $("#t2reg3").attr("disabled", "disabled");
                              $("#ext3").removeAttr("disabled");    
                            
                              
                                
                                break;
                                
      					case "Other 2":
          

      						$("#pmfn3").removeAttr("disabled");
      						$("#pmreg3").removeAttr("disabled");
      						$("#t1fn3").removeAttr("disabled");
      						$("#t1reg3").removeAttr("disabled");
                              $("#t2fn3").attr("disabled", "disabled");
                              $("#t2reg3").attr("disabled", "disabled");
                              $("#ext3").removeAttr("disabled");  
          
            
            break;
      					case "Other 3":
          

      						$("#pmfn3").removeAttr("disabled");
      						$("#pmreg3").removeAttr("disabled");
      						$("#t1fn3").removeAttr("disabled");
      						$("#t1reg3").removeAttr("disabled");
      						$("#t2fn3").removeAttr("disabled");
      						$("#t2reg3").removeAttr("disabled");
                              $("#ext3").removeAttr("disabled");  
          
            
            break;
           default:
                  $("#t1fn3").removeAttr("disabled");
                  $("#t2fn3").removeAttr("disabled");
                  $("#t1reg3").removeAttr("disabled");
                  $("#t2reg3").removeAttr("disabled");
                  $("#pmfn3").removeAttr("disabled");
                  $("#pmreg3").removeAttr("disabled");
                  $("#ext3").removeAttr("disabled");
              break;
      } 
  	
      
      
      if(type == "Single Rigid"){
          $('#type3').html('<option value="">Type</option><option value="Box">Box</option><option value="Flat Top">Flat Top</option>');
          }
          if(type == "Bogie Rigid"){
          $('#type3').html('<option value="">Type</option><option value=" ">All</option>');
          }
          if(type == "Prime Mover"){
          $('#type3').html('<option value="">Type</option><option value="Day Cab">Day Cab</option><option value="Sleeper Cab">Sleeper Cab</option>');
          }
          if(type == "Single Combination"){
          $('#type3').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option><option value="Car Carrier">Car Carrier</option>');
          }
          if(type == "B Double Combination"){
          $('#type3').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
          }
          if(type == "Single Trailer"){
          $('#type3').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option>');
          }
          if(type == "B Double Trailer"){
          $('#type3').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
          }
          if(type == "FORKLIFT"){
          $('#type3').html('<option value="">Type</option><option value="Small">Small</option><option value="Medium">Medium</option><option value="Large">Large</option>');
          }
          if(type == "VAN/UTE/CAR"){
          $('#type3').html('<option value="">Type</option><option value=" ">All</option>');
          }
          if(type == "Dolly Trailer"){
          $('#type3').html('<option value="">Type</option><option value=" ">All</option>');
          }
          if(type == "Other 1"){
          $('#type3').html('<option value="">Type</option><option value=" ">All</option>');
          }
          if(type == "Other 2"){
          $('#type3').html('<option value="">Type</option><option value=" ">All</option>');
          }
          if(type == "Other 3"){
          $('#type3').html('<option value="">Type</option><option value=" ">All</option>');
          }
      	}).trigger("change");   
 
  	  
  	  
  	   //--------------------------------------4   	
     	
  	   $('#sel4').on('change', function() {
               var type = document.getElementById("sel4").value;
           switch(type) {
               case "Single Rigid":
                     $("#pmfn4").removeAttr("disabled");
                     $("#pmreg4").removeAttr("disabled");
                     $("#ext4").removeAttr("disabled");
                     $("#t1fn4").attr("disabled", "disabled");
                     $("#t1reg4").attr("disabled", "disabled");
                     $("#t2fn4").attr("disabled", "disabled");
                     $("#t2reg4").attr("disabled", "disabled");
                       break;
               case "Bogie Rigid":
                  $("#pmfn4").removeAttr("disabled");
                  $("#pmreg4").removeAttr("disabled");
                  $("#ext4").removeAttr("disabled");
                  $("#t1fn4").attr("disabled", "disabled");
                  $("#t1reg4").attr("disabled", "disabled");
                  $("#t2fn4").attr("disabled", "disabled");
                  $("#t2reg4").attr("disabled", "disabled");
                    break;
               case "Prime Mover":
                 $("#pmfn4").removeAttr("disabled");
                   $("#pmreg4").removeAttr("disabled");
                   $("#ext4").removeAttr("disabled");
                   $("#t1fn4").attr("disabled", "disabled");
                   $("#t1reg4").attr("disabled", "disabled");
                   $("#t2fn4").attr("disabled", "disabled");
                   $("#t2reg4").attr("disabled", "disabled");
               break;
               
               case "Single Combination":
                   $("#t1fn4").removeAttr("disabled");
                   $("#t1reg4").removeAttr("disabled");
                   $("#ext4").removeAttr("disabled");    
                   $("#pmfn4").removeAttr("disabled");
                   $("#pmreg4").removeAttr("disabled");
                   $("#t2fn4").attr("disabled", "disabled");
                   $("#t2reg4").attr("disabled", "disabled");          
           break;
           
               case "B Double Combination":
                   

             	  $("#t1fn4").removeAttr("disabled");
                   $("#t2fn4").removeAttr("disabled");
                   $("#t1reg4").removeAttr("disabled");
                   $("#t2reg4").removeAttr("disabled");
                   $("#pmfn4").removeAttr("disabled");
                   $("#pmreg4").removeAttr("disabled");
                   $("#ext4").removeAttr("disabled");
                 
                   
                   break;
                   
                   
               case "Single Trailer":
                   $("#t1fn4").removeAttr("disabled");
                   $("#t1reg4").removeAttr("disabled");
                   $("#ext4").removeAttr("disabled");    
                   $("#pmfn4").attr("disabled", "disabled");
                   $("#pmreg4").attr("disabled", "disabled");
                   $("#t2fn4").attr("disabled", "disabled");
                   $("#t2reg4").attr("disabled", "disabled");
           break;
           
           
               case "B Double Trailer":
                   $("#t1fn4").removeAttr("disabled");
                   $("#t1reg4").removeAttr("disabled");
                   $("#ext4").removeAttr("disabled");    
                   $("#pmfn4").attr("disabled", "disabled");
                   $("#pmreg4").attr("disabled", "disabled");
                   $("#t2fn4").removeAttr("disabled");
                   $("#t2reg4").removeAttr("disabled");
           break;
           
               case "FORKLIFT":
                   $("#pmfn4").removeAttr("disabled");
                     $("#pmreg4").removeAttr("disabled");
                     $("#ext4").removeAttr("disabled");
                     $("#t1fn4").attr("disabled", "disabled");
                     $("#t1reg4").attr("disabled", "disabled");
                     $("#t2fn4").attr("disabled", "disabled");
                     $("#t2reg4").attr("disabled", "disabled");
                 break;
           
           
               
               case "VAN/UTE/CAR":
                     $("#pmfn4").removeAttr("disabled");
                     $("#pmreg4").removeAttr("disabled");
                     $("#ext4").removeAttr("disabled");
                       $("#t1fn4").attr("disabled", "disabled");
                       $("#t1reg4").attr("disabled", "disabled");
                       $("#t2fn4").attr("disabled", "disabled");
                       $("#t2reg4").attr("disabled", "disabled"); 
               break;
               
               case "Dolly Trailer":
                   $("#t1fn4").removeAttr("disabled");
                   $("#t1reg4").removeAttr("disabled");
                   $("#ext4").removeAttr("disabled");    
                   $("#pmfn4").attr("disabled", "disabled");
                   $("#pmreg4").attr("disabled", "disabled");
                   $("#t2fn4").attr("disabled", "disabled");
                   $("#t2reg4").attr("disabled", "disabled");
           break;
               case "Other 1":


           						$("#pmfn4").removeAttr("disabled");
           						$("#pmreg4").removeAttr("disabled");
           						$("#t1fn4").attr("disabled", "disabled");
                                   $("#t1reg4").attr("disabled", "disabled");
                                   $("#t2fn4").attr("disabled", "disabled");
                                   $("#t2reg4").attr("disabled", "disabled");
                                   $("#ext4").removeAttr("disabled");    
                                 
                                   
                                     
                                     break;
                                     
           					case "Other 2":
               

           						$("#pmfn4").removeAttr("disabled");
           						$("#pmreg4").removeAttr("disabled");
           						$("#t1fn4").removeAttr("disabled");
           						$("#t1reg4").removeAttr("disabled");
                                   $("#t2fn4").attr("disabled", "disabled");
                                   $("#t2reg4").attr("disabled", "disabled");
                                   $("#ext4").removeAttr("disabled");  
               
                 
                 break;
           					case "Other 3":
               

           						$("#pmfn4").removeAttr("disabled");
           						$("#pmreg4").removeAttr("disabled");
           						$("#t1fn4").removeAttr("disabled");
           						$("#t1reg4").removeAttr("disabled");
           						$("#t2fn4").removeAttr("disabled");
           						$("#t2reg4").removeAttr("disabled");
                                   $("#ext4").removeAttr("disabled");  
               
                 
                 break;
                default:
                       $("#t1fn4").removeAttr("disabled");
                       $("#t2fn4").removeAttr("disabled");
                       $("#t1reg4").removeAttr("disabled");
                       $("#t2reg4").removeAttr("disabled");
                       $("#pmfn4").removeAttr("disabled");
                       $("#pmreg4").removeAttr("disabled");
                       $("#ext4").removeAttr("disabled");
                   break;
           } 
       	
           
           
           if(type == "Single Rigid"){
               $('#type4').html('<option value="">Type</option><option value="Box">Box</option><option value="Flat Top">Flat Top</option>');
               }
               if(type == "Bogie Rigid"){
               $('#type4').html('<option value="">Type</option><option value=" ">All</option>');
               }
               if(type == "Prime Mover"){
               $('#type4').html('<option value="">Type</option><option value="Day Cab">Day Cab</option><option value="Sleeper Cab">Sleeper Cab</option>');
               }
               if(type == "Single Combination"){
               $('#type4').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option><option value="Car Carrier">Car Carrier</option>');
               }
               if(type == "B Double Combination"){
               $('#type4').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
               }
               if(type == "Single Trailer"){
               $('#type4').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option>');
               }
               if(type == "B Double Trailer"){
               $('#type4').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
               }
               if(type == "FORKLIFT"){
               $('#type4').html('<option value="">Type</option><option value="Small">Small</option><option value="Medium">Medium</option><option value="Large">Large</option>');
               }
               if(type == "VAN/UTE/CAR"){
               $('#type4').html('<option value="">Type</option><option value=" ">All</option>');
               }
               if(type == "Dolly Trailer"){
               $('#type4').html('<option value="">Type</option><option value=" ">All</option>');
               }
               if(type == "Other 1"){
               $('#type4').html('<option value="">Type</option><option value=" ">All</option>');
               }
               if(type == "Other 2"){
               $('#type4').html('<option value="">Type</option><option value=" ">All</option>');
               }
               if(type == "Other 3"){
               $('#type4').html('<option value="">Type</option><option value=" ">All</option>');
               }
           	}).trigger("change");
	   
  	   //--------------------------------------5     	
  	   	
   	   $('#sel5').on('change', function() {
                var type = document.getElementById("sel5").value;
            switch(type) {
                case "Single Rigid":
                      $("#pmfn5").removeAttr("disabled");
                      $("#pmreg5").removeAttr("disabled");
                      $("#ext5").removeAttr("disabled");
                      $("#t1fn5").attr("disabled", "disabled");
                      $("#t1reg5").attr("disabled", "disabled");
                      $("#t2fn5").attr("disabled", "disabled");
                      $("#t2reg5").attr("disabled", "disabled");
                        break;
                case "Bogie Rigid":
                   $("#pmfn5").removeAttr("disabled");
                   $("#pmreg5").removeAttr("disabled");
                   $("#ext5").removeAttr("disabled");
                   $("#t1fn5").attr("disabled", "disabled");
                   $("#t1reg5").attr("disabled", "disabled");
                   $("#t2fn5").attr("disabled", "disabled");
                   $("#t2reg5").attr("disabled", "disabled");
                     break;
                case "Prime Mover":
                  $("#pmfn5").removeAttr("disabled");
                    $("#pmreg5").removeAttr("disabled");
                    $("#ext5").removeAttr("disabled");
                    $("#t1fn5").attr("disabled", "disabled");
                    $("#t1reg5").attr("disabled", "disabled");
                    $("#t2fn5").attr("disabled", "disabled");
                    $("#t2reg5").attr("disabled", "disabled");
                break;
                
                case "Single Combination":
                    $("#t1fn5").removeAttr("disabled");
                    $("#t1reg5").removeAttr("disabled");
                    $("#ext5").removeAttr("disabled");    
                    $("#pmfn5").removeAttr("disabled");
                    $("#pmreg5").removeAttr("disabled");
                    $("#t2fn5").attr("disabled", "disabled");
                    $("#t2reg5").attr("disabled", "disabled");          
            break;
            
                case "B Double Combination":
                    

              	  $("#t1fn5").removeAttr("disabled");
                    $("#t2fn5").removeAttr("disabled");
                    $("#t1reg5").removeAttr("disabled");
                    $("#t2reg5").removeAttr("disabled");
                    $("#pmfn5").removeAttr("disabled");
                    $("#pmreg5").removeAttr("disabled");
                    $("#ext5").removeAttr("disabled");
                  
                    
                    break;
                    
                    
                case "Single Trailer":
                    $("#t1fn5").removeAttr("disabled");
                    $("#t1reg5").removeAttr("disabled");
                    $("#ext5").removeAttr("disabled");    
                    $("#pmfn5").attr("disabled", "disabled");
                    $("#pmreg5").attr("disabled", "disabled");
                    $("#t2fn5").attr("disabled", "disabled");
                    $("#t2reg5").attr("disabled", "disabled");
            break;
            
            
                case "B Double Trailer":
                    $("#t1fn5").removeAttr("disabled");
                    $("#t1reg5").removeAttr("disabled");
                    $("#ext5").removeAttr("disabled");    
                    $("#pmfn5").attr("disabled", "disabled");
                    $("#pmreg5").attr("disabled", "disabled");
                    $("#t2fn5").removeAttr("disabled");
                    $("#t2reg5").removeAttr("disabled");
            break;
            
                case "FORKLIFT":
                    $("#pmfn5").removeAttr("disabled");
                      $("#pmreg5").removeAttr("disabled");
                      $("#ext5").removeAttr("disabled");
                      $("#t1fn5").attr("disabled", "disabled");
                      $("#t1reg5").attr("disabled", "disabled");
                      $("#t2fn5").attr("disabled", "disabled");
                      $("#t2reg5").attr("disabled", "disabled");
                  break;
            
            
                
                case "VAN/UTE/CAR":
                      $("#pmfn5").removeAttr("disabled");
                      $("#pmreg5").removeAttr("disabled");
                      $("#ext5").removeAttr("disabled");
                        $("#t1fn5").attr("disabled", "disabled");
                        $("#t1reg5").attr("disabled", "disabled");
                        $("#t2fn5").attr("disabled", "disabled");
                        $("#t2reg5").attr("disabled", "disabled"); 
                break;
                
                case "Dolly Trailer":
                    $("#t1fn5").removeAttr("disabled");
                    $("#t1reg5").removeAttr("disabled");
                    $("#ext5").removeAttr("disabled");    
                    $("#pmfn5").attr("disabled", "disabled");
                    $("#pmreg5").attr("disabled", "disabled");
                    $("#t2fn5").attr("disabled", "disabled");
                    $("#t2reg5").attr("disabled", "disabled");
            break;
                case "Other 1":


            						$("#pmfn5").removeAttr("disabled");
            						$("#pmreg5").removeAttr("disabled");
            						$("#t1fn5").attr("disabled", "disabled");
                                    $("#t1reg5").attr("disabled", "disabled");
                                    $("#t2fn5").attr("disabled", "disabled");
                                    $("#t2reg5").attr("disabled", "disabled");
                                    $("#ext5").removeAttr("disabled");    
                                  
                                    
                                      
                                      break;
                                      
            					case "Other 2":
                

            						$("#pmfn5").removeAttr("disabled");
            						$("#pmreg5").removeAttr("disabled");
            						$("#t1fn5").removeAttr("disabled");
            						$("#t1reg5").removeAttr("disabled");
                                    $("#t2fn5").attr("disabled", "disabled");
                                    $("#t2reg5").attr("disabled", "disabled");
                                    $("#ext5").removeAttr("disabled");  
                
                  
                  break;
            					case "Other 3":
                

            						$("#pmfn5").removeAttr("disabled");
            						$("#pmreg5").removeAttr("disabled");
            						$("#t1fn5").removeAttr("disabled");
            						$("#t1reg5").removeAttr("disabled");
            						$("#t2fn5").removeAttr("disabled");
            						$("#t2reg5").removeAttr("disabled");
                                    $("#ext5").removeAttr("disabled");  
                
                  
                  break;
                 default:
                        $("#t1fn5").removeAttr("disabled");
                        $("#t2fn5").removeAttr("disabled");
                        $("#t1reg5").removeAttr("disabled");
                        $("#t2reg5").removeAttr("disabled");
                        $("#pmfn5").removeAttr("disabled");
                        $("#pmreg5").removeAttr("disabled");
                        $("#ext5").removeAttr("disabled");
                    break;
            } 
        	
            
            if(type == "Single Rigid"){
                $('#type5').html('<option value="">Type</option><option value="Box">Box</option><option value="Flat Top">Flat Top</option>');
                }
                if(type == "Bogie Rigid"){
                $('#type5').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Prime Mover"){
                $('#type5').html('<option value="">Type</option><option value="Day Cab">Day Cab</option><option value="Sleeper Cab">Sleeper Cab</option>');
                }
                if(type == "Single Combination"){
                $('#type5').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "B Double Combination"){
                $('#type5').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "Single Trailer"){
                $('#type5').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option>');
                }
                if(type == "B Double Trailer"){
                $('#type5').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "FORKLIFT"){
                $('#type5').html('<option value="">Type</option><option value="Small">Small</option><option value="Medium">Medium</option><option value="Large">Large</option>');
                }
                if(type == "VAN/UTE/CAR"){
                $('#type5').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Dolly Trailer"){
                $('#type5').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 1"){
                $('#type5').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 2"){
                $('#type5').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 3"){
                $('#type5').html('<option value="">Type</option><option value=" ">All</option>');
                }
            	}).trigger("change");       
	   
	   
	   	   
   	   //-------------------------------------- 6    	
      	
   	   $('#sel6').on('change', function() {
                var type = document.getElementById("sel6").value;
            switch(type) {
                case "Single Rigid":
                      $("#pmfn6").removeAttr("disabled");
                      $("#pmreg6").removeAttr("disabled");
                      $("#ext6").removeAttr("disabled");
                      $("#t1fn6").attr("disabled", "disabled");
                      $("#t1reg6").attr("disabled", "disabled");
                      $("#t2fn6").attr("disabled", "disabled");
                      $("#t2reg6").attr("disabled", "disabled");
                        break;
                case "Bogie Rigid":
                   $("#pmfn6").removeAttr("disabled");
                   $("#pmreg6").removeAttr("disabled");
                   $("#ext6").removeAttr("disabled");
                   $("#t1fn6").attr("disabled", "disabled");
                   $("#t1reg6").attr("disabled", "disabled");
                   $("#t2fn6").attr("disabled", "disabled");
                   $("#t2reg6").attr("disabled", "disabled");
                     break;
                case "Prime Mover":
                  $("#pmfn6").removeAttr("disabled");
                    $("#pmreg6").removeAttr("disabled");
                    $("#ext6").removeAttr("disabled");
                    $("#t1fn6").attr("disabled", "disabled");
                    $("#t1reg6").attr("disabled", "disabled");
                    $("#t2fn6").attr("disabled", "disabled");
                    $("#t2reg6").attr("disabled", "disabled");
                break;
                
                case "Single Combination":
                    $("#t1fn6").removeAttr("disabled");
                    $("#t1reg6").removeAttr("disabled");
                    $("#ext6").removeAttr("disabled");    
                    $("#pmfn6").removeAttr("disabled");
                    $("#pmreg6").removeAttr("disabled");
                    $("#t2fn6").attr("disabled", "disabled");
                    $("#t2reg6").attr("disabled", "disabled");          
            break;
            
                case "B Double Combination":
                    

              	  $("#t1fn6").removeAttr("disabled");
                    $("#t2fn6").removeAttr("disabled");
                    $("#t1reg6").removeAttr("disabled");
                    $("#t2reg6").removeAttr("disabled");
                    $("#pmfn6").removeAttr("disabled");
                    $("#pmreg6").removeAttr("disabled");
                    $("#ext6").removeAttr("disabled");
                  
                    
                    break;
                    
                    
                case "Single Trailer":
                    $("#t1fn6").removeAttr("disabled");
                    $("#t1reg6").removeAttr("disabled");
                    $("#ext6").removeAttr("disabled");    
                    $("#pmfn6").attr("disabled", "disabled");
                    $("#pmreg6").attr("disabled", "disabled");
                    $("#t2fn6").attr("disabled", "disabled");
                    $("#t2reg6").attr("disabled", "disabled");
            break;
            
            
                case "B Double Trailer":
                    $("#t1fn6").removeAttr("disabled");
                    $("#t1reg6").removeAttr("disabled");
                    $("#ext6").removeAttr("disabled");    
                    $("#pmfn6").attr("disabled", "disabled");
                    $("#pmreg6").attr("disabled", "disabled");
                    $("#t2fn6").removeAttr("disabled");
                    $("#t2reg6").removeAttr("disabled");
            break;
            
                case "FORKLIFT":
                    $("#pmfn6").removeAttr("disabled");
                      $("#pmreg6").removeAttr("disabled");
                      $("#ext6").removeAttr("disabled");
                      $("#t1fn6").attr("disabled", "disabled");
                      $("#t1reg6").attr("disabled", "disabled");
                      $("#t2fn6").attr("disabled", "disabled");
                      $("#t2reg6").attr("disabled", "disabled");
                  break;
            
            
                
                case "VAN/UTE/CAR":
                      $("#pmfn6").removeAttr("disabled");
                      $("#pmreg6").removeAttr("disabled");
                      $("#ext6").removeAttr("disabled");
                        $("#t1fn6").attr("disabled", "disabled");
                        $("#t1reg6").attr("disabled", "disabled");
                        $("#t2fn6").attr("disabled", "disabled");
                        $("#t2reg6").attr("disabled", "disabled"); 
                break;
                
                case "Dolly Trailer":
                    $("#t1fn6").removeAttr("disabled");
                    $("#t1reg6").removeAttr("disabled");
                    $("#ext6").removeAttr("disabled");    
                    $("#pmfn6").attr("disabled", "disabled");
                    $("#pmreg6").attr("disabled", "disabled");
                    $("#t2fn6").attr("disabled", "disabled");
                    $("#t2reg6").attr("disabled", "disabled");
            break;
                case "Other 1":


            						$("#pmfn6").removeAttr("disabled");
            						$("#pmreg6").removeAttr("disabled");
            						$("#t1fn6").attr("disabled", "disabled");
                                    $("#t1reg6").attr("disabled", "disabled");
                                    $("#t2fn6").attr("disabled", "disabled");
                                    $("#t2reg6").attr("disabled", "disabled");
                                    $("#ext6").removeAttr("disabled");    
                                  
                                    
                                      
                                      break;
                                      
            					case "Other 2":
                

            						$("#pmfn6").removeAttr("disabled");
            						$("#pmreg6").removeAttr("disabled");
            						$("#t1fn6").removeAttr("disabled");
            						$("#t1reg6").removeAttr("disabled");
                                    $("#t2fn6").attr("disabled", "disabled");
                                    $("#t2reg6").attr("disabled", "disabled");
                                    $("#ext6").removeAttr("disabled");  
                
                  
                  break;
            					case "Other 3":
                

            						$("#pmfn6").removeAttr("disabled");
            						$("#pmreg6").removeAttr("disabled");
            						$("#t1fn6").removeAttr("disabled");
            						$("#t1reg6").removeAttr("disabled");
            						$("#t2fn6").removeAttr("disabled");
            						$("#t2reg6").removeAttr("disabled");
                                    $("#ext6").removeAttr("disabled");  
                
                  
                  break;
                 default:
                        $("#t1fn6").removeAttr("disabled");
                        $("#t2fn6").removeAttr("disabled");
                        $("#t1reg6").removeAttr("disabled");
                        $("#t2reg6").removeAttr("disabled");
                        $("#pmfn6").removeAttr("disabled");
                        $("#pmreg6").removeAttr("disabled");
                        $("#ext6").removeAttr("disabled");
                    break;
            } 
        	
            
            
            if(type == "Single Rigid"){
                $('#type6').html('<option value="">Type</option><option value="Box">Box</option><option value="Flat Top">Flat Top</option>');
                }
                if(type == "Bogie Rigid"){
                $('#type6').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Prime Mover"){
                $('#type6').html('<option value="">Type</option><option value="Day Cab">Day Cab</option><option value="Sleeper Cab">Sleeper Cab</option>');
                }
                if(type == "Single Combination"){
                $('#type6').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "B Double Combination"){
                $('#type6').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "Single Trailer"){
                $('#type6').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option>');
                }
                if(type == "B Double Trailer"){
                $('#type6').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "FORKLIFT"){
                $('#type6').html('<option value="">Type</option><option value="Small">Small</option><option value="Medium">Medium</option><option value="Large">Large</option>');
                }
                if(type == "VAN/UTE/CAR"){
                $('#type6').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Dolly Trailer"){
                $('#type6').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 1"){
                $('#type6').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 2"){
                $('#type6').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 3"){
                $('#type6').html('<option value="">Type</option><option value=" ">All</option>');
                }
            	}).trigger("change");
	   
	   	     	  
  	  
  	  
   	   //-------------------------------------- 7     	
      	
   	   $('#sel7').on('change', function() {
                var type = document.getElementById("sel7").value;
            switch(type) {
                case "Single Rigid":
                      $("#pmfn7").removeAttr("disabled");
                      $("#pmreg7").removeAttr("disabled");
                      $("#ext7").removeAttr("disabled");
                      $("#t1fn7").attr("disabled", "disabled");
                      $("#t1reg7").attr("disabled", "disabled");
                      $("#t2fn7").attr("disabled", "disabled");
                      $("#t2reg7").attr("disabled", "disabled");
                        break;
                case "Bogie Rigid":
                   $("#pmfn7").removeAttr("disabled");
                   $("#pmreg7").removeAttr("disabled");
                   $("#ext7").removeAttr("disabled");
                   $("#t1fn7").attr("disabled", "disabled");
                   $("#t1reg7").attr("disabled", "disabled");
                   $("#t2fn7").attr("disabled", "disabled");
                   $("#t2reg7").attr("disabled", "disabled");
                     break;
                case "Prime Mover":
                  $("#pmfn7").removeAttr("disabled");
                    $("#pmreg7").removeAttr("disabled");
                    $("#ext7").removeAttr("disabled");
                    $("#t1fn7").attr("disabled", "disabled");
                    $("#t1reg7").attr("disabled", "disabled");
                    $("#t2fn7").attr("disabled", "disabled");
                    $("#t2reg7").attr("disabled", "disabled");
                break;
                
                case "Single Combination":
                    $("#t1fn7").removeAttr("disabled");
                    $("#t1reg7").removeAttr("disabled");
                    $("#ext7").removeAttr("disabled");    
                    $("#pmfn7").removeAttr("disabled");
                    $("#pmreg7").removeAttr("disabled");
                    $("#t2fn7").attr("disabled", "disabled");
                    $("#t2reg7").attr("disabled", "disabled");          
            break;
            
                case "B Double Combination":
                    

              	  $("#t1fn7").removeAttr("disabled");
                    $("#t2fn7").removeAttr("disabled");
                    $("#t1reg7").removeAttr("disabled");
                    $("#t2reg7").removeAttr("disabled");
                    $("#pmfn7").removeAttr("disabled");
                    $("#pmreg7").removeAttr("disabled");
                    $("#ext7").removeAttr("disabled");
                  
                    
                    break;
                    
                    
                case "Single Trailer":
                    $("#t1fn7").removeAttr("disabled");
                    $("#t1reg7").removeAttr("disabled");
                    $("#ext7").removeAttr("disabled");    
                    $("#pmfn7").attr("disabled", "disabled");
                    $("#pmreg7").attr("disabled", "disabled");
                    $("#t2fn7").attr("disabled", "disabled");
                    $("#t2reg7").attr("disabled", "disabled");
            break;
            
            
                case "B Double Trailer":
                    $("#t1fn7").removeAttr("disabled");
                    $("#t1reg7").removeAttr("disabled");
                    $("#ext7").removeAttr("disabled");    
                    $("#pmfn7").attr("disabled", "disabled");
                    $("#pmreg7").attr("disabled", "disabled");
                    $("#t2fn7").removeAttr("disabled");
                    $("#t2reg7").removeAttr("disabled");
            break;
            
                case "FORKLIFT":
                    $("#pmfn7").removeAttr("disabled");
                      $("#pmreg7").removeAttr("disabled");
                      $("#ext7").removeAttr("disabled");
                      $("#t1fn7").attr("disabled", "disabled");
                      $("#t1reg7").attr("disabled", "disabled");
                      $("#t2fn7").attr("disabled", "disabled");
                      $("#t2reg7").attr("disabled", "disabled");
                  break;
            
            
                
                case "VAN/UTE/CAR":
                      $("#pmfn7").removeAttr("disabled");
                      $("#pmreg7").removeAttr("disabled");
                      $("#ext7").removeAttr("disabled");
                        $("#t1fn7").attr("disabled", "disabled");
                        $("#t1reg7").attr("disabled", "disabled");
                        $("#t2fn7").attr("disabled", "disabled");
                        $("#t2reg7").attr("disabled", "disabled"); 
                break;
                
                case "Dolly Trailer":
                    $("#t1fn7").removeAttr("disabled");
                    $("#t1reg7").removeAttr("disabled");
                    $("#ext7").removeAttr("disabled");    
                    $("#pmfn7").attr("disabled", "disabled");
                    $("#pmreg7").attr("disabled", "disabled");
                    $("#t2fn7").attr("disabled", "disabled");
                    $("#t2reg7").attr("disabled", "disabled");
            break;
                case "Other 1":


            						$("#pmfn7").removeAttr("disabled");
            						$("#pmreg7").removeAttr("disabled");
            						$("#t1fn7").attr("disabled", "disabled");
                                    $("#t1reg7").attr("disabled", "disabled");
                                    $("#t2fn7").attr("disabled", "disabled");
                                    $("#t2reg7").attr("disabled", "disabled");
                                    $("#ext7").removeAttr("disabled");    
                                  
                                    
                                      
                                      break;
                                      
            					case "Other 2":
                

            						$("#pmfn7").removeAttr("disabled");
            						$("#pmreg7").removeAttr("disabled");
            						$("#t1fn7").removeAttr("disabled");
            						$("#t1reg7").removeAttr("disabled");
                                    $("#t2fn7").attr("disabled", "disabled");
                                    $("#t2reg7").attr("disabled", "disabled");
                                    $("#ext7").removeAttr("disabled");  
                
                  
                  break;
            					case "Other 3":
                

            						$("#pmfn7").removeAttr("disabled");
            						$("#pmreg7").removeAttr("disabled");
            						$("#t1fn7").removeAttr("disabled");
            						$("#t1reg7").removeAttr("disabled");
            						$("#t2fn7").removeAttr("disabled");
            						$("#t2reg7").removeAttr("disabled");
                                    $("#ext7").removeAttr("disabled");  
                
                  
                  break;
                 default:
                        $("#t1fn7").removeAttr("disabled");
                        $("#t2fn7").removeAttr("disabled");
                        $("#t1reg7").removeAttr("disabled");
                        $("#t2reg7").removeAttr("disabled");
                        $("#pmfn7").removeAttr("disabled");
                        $("#pmreg7").removeAttr("disabled");
                        $("#ext7").removeAttr("disabled");
                    break;
            } 
        	
            
            
            if(type == "Single Rigid"){
                $('#type7').html('<option value="">Type</option><option value="Box">Box</option><option value="Flat Top">Flat Top</option>');
                }
                if(type == "Bogie Rigid"){
                $('#type7').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Prime Mover"){
                $('#type7').html('<option value="">Type</option><option value="Day Cab">Day Cab</option><option value="Sleeper Cab">Sleeper Cab</option>');
                }
                if(type == "Single Combination"){
                $('#type7').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "B Double Combination"){
                $('#type7').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "Single Trailer"){
                $('#type7').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option>');
                }
                if(type == "B Double Trailer"){
                $('#type7').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "FORKLIFT"){
                $('#type7').html('<option value="">Type</option><option value="Small">Small</option><option value="Medium">Medium</option><option value="Large">Large</option>');
                }
                if(type == "VAN/UTE/CAR"){
                $('#type7').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Dolly Trailer"){
                $('#type7').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 1"){
                $('#type7').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 2"){
                $('#type7').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 3"){
                $('#type7').html('<option value="">Type</option><option value=" ">All</option>');
                }
            	}).trigger("change");      
	   
	   
   	   //--------------------------------------  8     	
      	
   	   $('#sel8').on('change', function() {
                var type = document.getElementById("sel8").value;
            switch(type) {
                case "Single Rigid":
                      $("#pmfn8").removeAttr("disabled");
                      $("#pmreg8").removeAttr("disabled");
                      $("#ext8").removeAttr("disabled");
                      $("#t1fn8").attr("disabled", "disabled");
                      $("#t1reg8").attr("disabled", "disabled");
                      $("#t2fn8").attr("disabled", "disabled");
                      $("#t2reg8").attr("disabled", "disabled");
                        break;
                case "Bogie Rigid":
                   $("#pmfn8").removeAttr("disabled");
                   $("#pmreg8").removeAttr("disabled");
                   $("#ext8").removeAttr("disabled");
                   $("#t1fn8").attr("disabled", "disabled");
                   $("#t1reg8").attr("disabled", "disabled");
                   $("#t2fn8").attr("disabled", "disabled");
                   $("#t2reg8").attr("disabled", "disabled");
                     break;
                case "Prime Mover":
                  $("#pmfn8").removeAttr("disabled");
                    $("#pmreg8").removeAttr("disabled");
                    $("#ext8").removeAttr("disabled");
                    $("#t1fn8").attr("disabled", "disabled");
                    $("#t1reg8").attr("disabled", "disabled");
                    $("#t2fn8").attr("disabled", "disabled");
                    $("#t2reg8").attr("disabled", "disabled");
                break;
                
                case "Single Combination":
                    $("#t1fn8").removeAttr("disabled");
                    $("#t1reg8").removeAttr("disabled");
                    $("#ext8").removeAttr("disabled");    
                    $("#pmfn8").removeAttr("disabled");
                    $("#pmreg8").removeAttr("disabled");
                    $("#t2fn8").attr("disabled", "disabled");
                    $("#t2reg8").attr("disabled", "disabled");          
            break;
            
                case "B Double Combination":
                    

              	  $("#t1fn8").removeAttr("disabled");
                    $("#t2fn8").removeAttr("disabled");
                    $("#t1reg8").removeAttr("disabled");
                    $("#t2reg8").removeAttr("disabled");
                    $("#pmfn8").removeAttr("disabled");
                    $("#pmreg8").removeAttr("disabled");
                    $("#ext8").removeAttr("disabled");
                  
                    
                    break;
                    
                    
                case "Single Trailer":
                    $("#t1fn8").removeAttr("disabled");
                    $("#t1reg8").removeAttr("disabled");
                    $("#ext8").removeAttr("disabled");    
                    $("#pmfn8").attr("disabled", "disabled");
                    $("#pmreg8").attr("disabled", "disabled");
                    $("#t2fn8").attr("disabled", "disabled");
                    $("#t2reg8").attr("disabled", "disabled");
            break;
            
            
                case "B Double Trailer":
                    $("#t1fn8").removeAttr("disabled");
                    $("#t1reg8").removeAttr("disabled");
                    $("#ext8").removeAttr("disabled");    
                    $("#pmfn8").attr("disabled", "disabled");
                    $("#pmreg8").attr("disabled", "disabled");
                    $("#t2fn8").removeAttr("disabled");
                    $("#t2reg8").removeAttr("disabled");
            break;
            
                case "FORKLIFT":
                    $("#pmfn8").removeAttr("disabled");
                      $("#pmreg8").removeAttr("disabled");
                      $("#ext8").removeAttr("disabled");
                      $("#t1fn8").attr("disabled", "disabled");
                      $("#t1reg8").attr("disabled", "disabled");
                      $("#t2fn8").attr("disabled", "disabled");
                      $("#t2reg8").attr("disabled", "disabled");
                  break;
            
            
                
                case "VAN/UTE/CAR":
                      $("#pmfn8").removeAttr("disabled");
                      $("#pmreg8").removeAttr("disabled");
                      $("#ext8").removeAttr("disabled");
                        $("#t1fn8").attr("disabled", "disabled");
                        $("#t1reg8").attr("disabled", "disabled");
                        $("#t2fn8").attr("disabled", "disabled");
                        $("#t2reg8").attr("disabled", "disabled"); 
                break;
                
                case "Dolly Trailer":
                    $("#t1fn8").removeAttr("disabled");
                    $("#t1reg8").removeAttr("disabled");
                    $("#ext8").removeAttr("disabled");    
                    $("#pmfn8").attr("disabled", "disabled");
                    $("#pmreg8").attr("disabled", "disabled");
                    $("#t2fn8").attr("disabled", "disabled");
                    $("#t2reg8").attr("disabled", "disabled");
            break;
                case "Other 1":


            						$("#pmfn8").removeAttr("disabled");
            						$("#pmreg8").removeAttr("disabled");
            						$("#t1fn8").attr("disabled", "disabled");
                                    $("#t1reg8").attr("disabled", "disabled");
                                    $("#t2fn8").attr("disabled", "disabled");
                                    $("#t2reg8").attr("disabled", "disabled");
                                    $("#ext8").removeAttr("disabled");    
                                  
                                    
                                      
                                      break;
                                      
            					case "Other 2":
                

            						$("#pmfn8").removeAttr("disabled");
            						$("#pmreg8").removeAttr("disabled");
            						$("#t1fn8").removeAttr("disabled");
            						$("#t1reg8").removeAttr("disabled");
                                    $("#t2fn8").attr("disabled", "disabled");
                                    $("#t2reg8").attr("disabled", "disabled");
                                    $("#ext8").removeAttr("disabled");  
                
                  
                  break;
            					case "Other 3":
                

            						$("#pmfn8").removeAttr("disabled");
            						$("#pmreg8").removeAttr("disabled");
            						$("#t1fn8").removeAttr("disabled");
            						$("#t1reg8").removeAttr("disabled");
            						$("#t2fn8").removeAttr("disabled");
            						$("#t2reg8").removeAttr("disabled");
                                    $("#ext8").removeAttr("disabled");  
                
                  
                  break;
                 default:
                        $("#t1fn8").removeAttr("disabled");
                        $("#t2fn8").removeAttr("disabled");
                        $("#t1reg8").removeAttr("disabled");
                        $("#t2reg8").removeAttr("disabled");
                        $("#pmfn8").removeAttr("disabled");
                        $("#pmreg8").removeAttr("disabled");
                        $("#ext8").removeAttr("disabled");
                    break;
            } 
        	
            
            
            if(type == "Single Rigid"){
                $('#type8').html('<option value="">Type</option><option value="Box">Box</option><option value="Flat Top">Flat Top</option>');
                }
                if(type == "Bogie Rigid"){
                $('#type8').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Prime Mover"){
                $('#type8').html('<option value="">Type</option><option value="Day Cab">Day Cab</option><option value="Sleeper Cab">Sleeper Cab</option>');
                }
                if(type == "Single Combination"){
                $('#type8').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "B Double Combination"){
                $('#type8').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "Single Trailer"){
                $('#type8').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option>');
                }
                if(type == "B Double Trailer"){
                $('#type8').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "FORKLIFT"){
                $('#type8').html('<option value="">Type</option><option value="Small">Small</option><option value="Medium">Medium</option><option value="Large">Large</option>');
                }
                if(type == "VAN/UTE/CAR"){
                $('#type8').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Dolly Trailer"){
                $('#type8').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 1"){
                $('#type8').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 2"){
                $('#type8').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 3"){
                $('#type8').html('<option value="">Type</option><option value=" ">All</option>');
                }
            	}).trigger("change"); 
	   
	   
	   	    	  
   	   //--------------------------------------   9    	
      	
   	   $('#sel9').on('change', function() {
                var type = document.getElementById("sel9").value;
            switch(type) {
                case "Single Rigid":
                      $("#pmfn9").removeAttr("disabled");
                      $("#pmreg9").removeAttr("disabled");
                      $("#ext9").removeAttr("disabled");
                      $("#t1fn9").attr("disabled", "disabled");
                      $("#t1reg9").attr("disabled", "disabled");
                      $("#t2fn9").attr("disabled", "disabled");
                      $("#t2reg9").attr("disabled", "disabled");
                        break;
                case "Bogie Rigid":
                   $("#pmfn9").removeAttr("disabled");
                   $("#pmreg9").removeAttr("disabled");
                   $("#ext9").removeAttr("disabled");
                   $("#t1fn9").attr("disabled", "disabled");
                   $("#t1reg9").attr("disabled", "disabled");
                   $("#t2fn9").attr("disabled", "disabled");
                   $("#t2reg9").attr("disabled", "disabled");
                     break;
                case "Prime Mover":
                  $("#pmfn9").removeAttr("disabled");
                    $("#pmreg9").removeAttr("disabled");
                    $("#ext9").removeAttr("disabled");
                    $("#t1fn9").attr("disabled", "disabled");
                    $("#t1reg9").attr("disabled", "disabled");
                    $("#t2fn9").attr("disabled", "disabled");
                    $("#t2reg9").attr("disabled", "disabled");
                break;
                
                case "Single Combination":
                    $("#t1fn9").removeAttr("disabled");
                    $("#t1reg9").removeAttr("disabled");
                    $("#ext9").removeAttr("disabled");    
                    $("#pmfn9").removeAttr("disabled");
                    $("#pmreg9").removeAttr("disabled");
                    $("#t2fn9").attr("disabled", "disabled");
                    $("#t2reg9").attr("disabled", "disabled");          
            break;
            
                case "B Double Combination":
                    

              	  $("#t1fn9").removeAttr("disabled");
                    $("#t2fn9").removeAttr("disabled");
                    $("#t1reg9").removeAttr("disabled");
                    $("#t2reg9").removeAttr("disabled");
                    $("#pmfn9").removeAttr("disabled");
                    $("#pmreg9").removeAttr("disabled");
                    $("#ext9").removeAttr("disabled");
                  
                    
                    break;
                    
                    
                case "Single Trailer":
                    $("#t1fn9").removeAttr("disabled");
                    $("#t1reg9").removeAttr("disabled");
                    $("#ext9").removeAttr("disabled");    
                    $("#pmfn9").attr("disabled", "disabled");
                    $("#pmreg9").attr("disabled", "disabled");
                    $("#t2fn9").attr("disabled", "disabled");
                    $("#t2reg9").attr("disabled", "disabled");
            break;
            
            
                case "B Double Trailer":
                    $("#t1fn9").removeAttr("disabled");
                    $("#t1reg9").removeAttr("disabled");
                    $("#ext9").removeAttr("disabled");    
                    $("#pmfn9").attr("disabled", "disabled");
                    $("#pmreg9").attr("disabled", "disabled");
                    $("#t2fn9").removeAttr("disabled");
                    $("#t2reg9").removeAttr("disabled");
            break;
            
                case "FORKLIFT":
                    $("#pmfn9").removeAttr("disabled");
                      $("#pmreg9").removeAttr("disabled");
                      $("#ext9").removeAttr("disabled");
                      $("#t1fn9").attr("disabled", "disabled");
                      $("#t1reg9").attr("disabled", "disabled");
                      $("#t2fn9").attr("disabled", "disabled");
                      $("#t2reg9").attr("disabled", "disabled");
                  break;
            
            
                
                case "VAN/UTE/CAR":
                      $("#pmfn9").removeAttr("disabled");
                      $("#pmreg9").removeAttr("disabled");
                      $("#ext9").removeAttr("disabled");
                        $("#t1fn9").attr("disabled", "disabled");
                        $("#t1reg9").attr("disabled", "disabled");
                        $("#t2fn9").attr("disabled", "disabled");
                        $("#t2reg9").attr("disabled", "disabled"); 
                break;
                
                case "Dolly Trailer":
                    $("#t1fn9").removeAttr("disabled");
                    $("#t1reg9").removeAttr("disabled");
                    $("#ext9").removeAttr("disabled");    
                    $("#pmfn9").attr("disabled", "disabled");
                    $("#pmreg9").attr("disabled", "disabled");
                    $("#t2fn9").attr("disabled", "disabled");
                    $("#t2reg9").attr("disabled", "disabled");
            break;
                case "Other 1":


            						$("#pmfn9").removeAttr("disabled");
            						$("#pmreg9").removeAttr("disabled");
            						$("#t1fn9").attr("disabled", "disabled");
                                    $("#t1reg9").attr("disabled", "disabled");
                                    $("#t2fn9").attr("disabled", "disabled");
                                    $("#t2reg9").attr("disabled", "disabled");
                                    $("#ext9").removeAttr("disabled");    
                                  
                                    
                                      
                                      break;
                                      
            					case "Other 2":
                

            						$("#pmfn9").removeAttr("disabled");
            						$("#pmreg9").removeAttr("disabled");
            						$("#t1fn9").removeAttr("disabled");
            						$("#t1reg9").removeAttr("disabled");
                                    $("#t2fn9").attr("disabled", "disabled");
                                    $("#t2reg9").attr("disabled", "disabled");
                                    $("#ext9").removeAttr("disabled");  
                
                  
                  break;
            					case "Other 3":
                

            						$("#pmfn9").removeAttr("disabled");
            						$("#pmreg9").removeAttr("disabled");
            						$("#t1fn9").removeAttr("disabled");
            						$("#t1reg9").removeAttr("disabled");
            						$("#t2fn9").removeAttr("disabled");
            						$("#t2reg9").removeAttr("disabled");
                                    $("#ext9").removeAttr("disabled");  
                
                  
                  break;
                 default:
                        $("#t1fn9").removeAttr("disabled");
                        $("#t2fn9").removeAttr("disabled");
                        $("#t1reg9").removeAttr("disabled");
                        $("#t2reg9").removeAttr("disabled");
                        $("#pmfn9").removeAttr("disabled");
                        $("#pmreg9").removeAttr("disabled");
                        $("#ext9").removeAttr("disabled");
                    break;
            } 
        	
            
            
            if(type == "Single Rigid"){
                $('#type9').html('<option value="">Type</option><option value="Box">Box</option><option value="Flat Top">Flat Top</option>');
                }
                if(type == "Bogie Rigid"){
                $('#type9').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Prime Mover"){
                $('#type9').html('<option value="">Type</option><option value="Day Cab">Day Cab</option><option value="Sleeper Cab">Sleeper Cab</option>');
                }
                if(type == "Single Combination"){
                $('#type9').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "B Double Combination"){
                $('#type9').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "Single Trailer"){
                $('#type9').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option>');
                }
                if(type == "B Double Trailer"){
                $('#type9').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "FORKLIFT"){
                $('#type9').html('<option value="">Type</option><option value="Small">Small</option><option value="Medium">Medium</option><option value="Large">Large</option>');
                }
                if(type == "VAN/UTE/CAR"){
                $('#type9').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Dolly Trailer"){
                $('#type9').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 1"){
                $('#type9').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 2"){
                $('#type9').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 3"){
                $('#type9').html('<option value="">Type</option><option value=" ">All</option>');
                }
            	}).trigger("change");
	   
	   
	    	  
   	   //-------------------------------------- 10     	
      	
   	   $('#sel10').on('change', function() {
                var type = document.getElementById("sel10").value;
            switch(type) {
                case "Single Rigid":
                      $("#pmfn10").removeAttr("disabled");
                      $("#pmreg10").removeAttr("disabled");
                      $("#ext10").removeAttr("disabled");
                      $("#t1fn10").attr("disabled", "disabled");
                      $("#t1reg10").attr("disabled", "disabled");
                      $("#t2fn10").attr("disabled", "disabled");
                      $("#t2reg10").attr("disabled", "disabled");
                        break;
                case "Bogie Rigid":
                   $("#pmfn10").removeAttr("disabled");
                   $("#pmreg10").removeAttr("disabled");
                   $("#ext10").removeAttr("disabled");
                   $("#t1fn10").attr("disabled", "disabled");
                   $("#t1reg10").attr("disabled", "disabled");
                   $("#t2fn10").attr("disabled", "disabled");
                   $("#t2reg10").attr("disabled", "disabled");
                     break;
                case "Prime Mover":
                  $("#pmfn10").removeAttr("disabled");
                    $("#pmreg10").removeAttr("disabled");
                    $("#ext10").removeAttr("disabled");
                    $("#t1fn10").attr("disabled", "disabled");
                    $("#t1reg10").attr("disabled", "disabled");
                    $("#t2fn10").attr("disabled", "disabled");
                    $("#t2reg10").attr("disabled", "disabled");
                break;
                
                case "Single Combination":
                    $("#t1fn10").removeAttr("disabled");
                    $("#t1reg10").removeAttr("disabled");
                    $("#ext10").removeAttr("disabled");    
                    $("#pmfn10").removeAttr("disabled");
                    $("#pmreg10").removeAttr("disabled");
                    $("#t2fn10").attr("disabled", "disabled");
                    $("#t2reg10").attr("disabled", "disabled");          
            break;
            
                case "B Double Combination":
                    

              	  $("#t1fn10").removeAttr("disabled");
                    $("#t2fn10").removeAttr("disabled");
                    $("#t1reg10").removeAttr("disabled");
                    $("#t2reg10").removeAttr("disabled");
                    $("#pmfn10").removeAttr("disabled");
                    $("#pmreg10").removeAttr("disabled");
                    $("#ext10").removeAttr("disabled");
                  
                    
                    break;
                    
                    
                case "Single Trailer":
                    $("#t1fn10").removeAttr("disabled");
                    $("#t1reg10").removeAttr("disabled");
                    $("#ext10").removeAttr("disabled");    
                    $("#pmfn10").attr("disabled", "disabled");
                    $("#pmreg10").attr("disabled", "disabled");
                    $("#t2fn10").attr("disabled", "disabled");
                    $("#t2reg10").attr("disabled", "disabled");
            break;
            
            
                case "B Double Trailer":
                    $("#t1fn10").removeAttr("disabled");
                    $("#t1reg10").removeAttr("disabled");
                    $("#ext10").removeAttr("disabled");    
                    $("#pmfn10").attr("disabled", "disabled");
                    $("#pmreg10").attr("disabled", "disabled");
                    $("#t2fn10").removeAttr("disabled");
                    $("#t2reg10").removeAttr("disabled");
            break;
            
                case "FORKLIFT":
                    $("#pmfn10").removeAttr("disabled");
                      $("#pmreg10").removeAttr("disabled");
                      $("#ext10").removeAttr("disabled");
                      $("#t1fn10").attr("disabled", "disabled");
                      $("#t1reg10").attr("disabled", "disabled");
                      $("#t2fn10").attr("disabled", "disabled");
                      $("#t2reg10").attr("disabled", "disabled");
                  break;
            
            
                
                case "VAN/UTE/CAR":
                      $("#pmfn10").removeAttr("disabled");
                      $("#pmreg10").removeAttr("disabled");
                      $("#ext10").removeAttr("disabled");
                        $("#t1fn10").attr("disabled", "disabled");
                        $("#t1reg10").attr("disabled", "disabled");
                        $("#t2fn10").attr("disabled", "disabled");
                        $("#t2reg10").attr("disabled", "disabled"); 
                break;
                
                case "Dolly Trailer":
                    $("#t1fn10").removeAttr("disabled");
                    $("#t1reg10").removeAttr("disabled");
                    $("#ext10").removeAttr("disabled");    
                    $("#pmfn10").attr("disabled", "disabled");
                    $("#pmreg10").attr("disabled", "disabled");
                    $("#t2fn10").attr("disabled", "disabled");
                    $("#t2reg10").attr("disabled", "disabled");
            break;
                case "Other 1":


            						$("#pmfn10").removeAttr("disabled");
            						$("#pmreg10").removeAttr("disabled");
            						$("#t1fn10").attr("disabled", "disabled");
                                    $("#t1reg10").attr("disabled", "disabled");
                                    $("#t2fn10").attr("disabled", "disabled");
                                    $("#t2reg10").attr("disabled", "disabled");
                                    $("#ext10").removeAttr("disabled");    
                                  
                                    
                                      
                                      break;
                                      
            					case "Other 2":
                

            						$("#pmfn10").removeAttr("disabled");
            						$("#pmreg10").removeAttr("disabled");
            						$("#t1fn10").removeAttr("disabled");
            						$("#t1reg10").removeAttr("disabled");
                                    $("#t2fn10").attr("disabled", "disabled");
                                    $("#t2reg10").attr("disabled", "disabled");
                                    $("#ext10").removeAttr("disabled");  
                
                  
                  break;
            					case "Other 3":
                

            						$("#pmfn10").removeAttr("disabled");
            						$("#pmreg10").removeAttr("disabled");
            						$("#t1fn10").removeAttr("disabled");
            						$("#t1reg10").removeAttr("disabled");
            						$("#t2fn10").removeAttr("disabled");
            						$("#t2reg10").removeAttr("disabled");
                                    $("#ext10").removeAttr("disabled");  
                
                  
                  break;
                 default:
                        $("#t1fn10").removeAttr("disabled");
                        $("#t2fn10").removeAttr("disabled");
                        $("#t1reg10").removeAttr("disabled");
                        $("#t2reg10").removeAttr("disabled");
                        $("#pmfn10").removeAttr("disabled");
                        $("#pmreg10").removeAttr("disabled");
                        $("#ext10").removeAttr("disabled");
                    break;
            } 
        	
            
            
            if(type == "Single Rigid")
            {
            $('#type10').html('<option value="">Type</option><option value="Box">Box</option><option value="Flat Top">Flat Top</option>');
            }
            if(type == "Bogie Rigid"){
            $('#type10').html('<option value="">Type</option><option value="."></option>');
            }
            if(type == "Prime Mover"){
            $('#type10').html('<option value="">Type</option><option value="Day Cab">Day Cab</option><option value="Sleeper Cab">Sleeper Cab</option>');
            }
            if(type == "Single Combination")
            {
            $('#type10').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option><option value="Car Carrier">Car Carrier</option>');
            }
            if(type == "B Double Combination")
            {
            $('#type10').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
            }
            if(type == "Single Trailer")
            {
            $('#type10').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option>');
            }
            if(type == "B Double Trailer")
            {
            $('#type10').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
            }
            if(type == "FORKLIFT")
            {
            $('#type10').html('<option value="">Type</option><option value="Small">Small</option><option value="Medium">Medium</option><option value="Large">Large</option>');
            }
            if(type == "VAN/UTE/CAR")
            {
            $('#type10').html('<option value="">Type</option><option value="."></option>');
            }
            if(type == "Dolly Trailer"){
            $('#type10').html('<option value="">Type</option><option value="."></option>');
            }
            if(type == "Other 1"){
            $('#type10').html('<option value="">Type</option><option value="."></option>');
            }
            if(type == "Other 2"){
            $('#type10').html('<option value="">Type</option><option value="."></option>');
            }
            if(type == "Other 3"){
            $('#type10').html('<option value="">Type</option><option value="."></option>');
            }
        	}).trigger("change"); 
	    	  
  	  
  	  
  	  
   	   //-------------------------------------- 11    	
      	
   	   $('#sel11').on('change', function() {
                var type = document.getElementById("sel11").value;
            switch(type) {
                case "Single Rigid":
                      $("#pmfn11").removeAttr("disabled");
                      $("#pmreg11").removeAttr("disabled");
                      $("#ext1").removeAttr("disabled");
                      $("#t1fn11").attr("disabled", "disabled");
                      $("#t1reg11").attr("disabled", "disabled");
                      $("#t2fn11").attr("disabled", "disabled");
                      $("#t2reg11").attr("disabled", "disabled");
                        break;
                case "Bogie Rigid":
                   $("#pmfn11").removeAttr("disabled");
                   $("#pmreg11").removeAttr("disabled");
                   $("#ext1").removeAttr("disabled");
                   $("#t1fn11").attr("disabled", "disabled");
                   $("#t1reg11").attr("disabled", "disabled");
                   $("#t2fn11").attr("disabled", "disabled");
                   $("#t2reg11").attr("disabled", "disabled");
                     break;
                case "Prime Mover":
                  $("#pmfn11").removeAttr("disabled");
                    $("#pmreg11").removeAttr("disabled");
                    $("#ext1").removeAttr("disabled");
                    $("#t1fn11").attr("disabled", "disabled");
                    $("#t1reg11").attr("disabled", "disabled");
                    $("#t2fn11").attr("disabled", "disabled");
                    $("#t2reg11").attr("disabled", "disabled");
                break;
                
                case "Single Combination":
                    $("#t1fn11").removeAttr("disabled");
                    $("#t1reg11").removeAttr("disabled");
                    $("#ext1").removeAttr("disabled");    
                    $("#pmfn11").removeAttr("disabled");
                    $("#pmreg11").removeAttr("disabled");
                    $("#t2fn11").attr("disabled", "disabled");
                    $("#t2reg11").attr("disabled", "disabled");          
            break;
            
                case "B Double Combination":
                    

              	  $("#t1fn11").removeAttr("disabled");
                    $("#t2fn11").removeAttr("disabled");
                    $("#t1reg11").removeAttr("disabled");
                    $("#t2reg11").removeAttr("disabled");
                    $("#pmfn11").removeAttr("disabled");
                    $("#pmreg11").removeAttr("disabled");
                    $("#ext1").removeAttr("disabled");
                  
                    
                    break;
                    
                    
                case "Single Trailer":
                    $("#t1fn11").removeAttr("disabled");
                    $("#t1reg11").removeAttr("disabled");
                    $("#ext1").removeAttr("disabled");    
                    $("#pmfn11").attr("disabled", "disabled");
                    $("#pmreg11").attr("disabled", "disabled");
                    $("#t2fn11").attr("disabled", "disabled");
                    $("#t2reg11").attr("disabled", "disabled");
            break;
            
            
                case "B Double Trailer":
                    $("#t1fn11").removeAttr("disabled");
                    $("#t1reg11").removeAttr("disabled");
                    $("#ext1").removeAttr("disabled");    
                    $("#pmfn11").attr("disabled", "disabled");
                    $("#pmreg11").attr("disabled", "disabled");
                    $("#t2fn11").removeAttr("disabled");
                    $("#t2reg11").removeAttr("disabled");
            break;
            
                case "FORKLIFT":
                    $("#pmfn11").removeAttr("disabled");
                      $("#pmreg11").removeAttr("disabled");
                      $("#ext1").removeAttr("disabled");
                      $("#t1fn11").attr("disabled", "disabled");
                      $("#t1reg11").attr("disabled", "disabled");
                      $("#t2fn11").attr("disabled", "disabled");
                      $("#t2reg11").attr("disabled", "disabled");
                  break;
            
            
                
                case "VAN/UTE/CAR":
                      $("#pmfn11").removeAttr("disabled");
                      $("#pmreg11").removeAttr("disabled");
                      $("#ext1").removeAttr("disabled");
                        $("#t1fn11").attr("disabled", "disabled");
                        $("#t1reg11").attr("disabled", "disabled");
                        $("#t2fn11").attr("disabled", "disabled");
                        $("#t2reg11").attr("disabled", "disabled"); 
                break;
                
                case "Dolly Trailer":
                    $("#t1fn11").removeAttr("disabled");
                    $("#t1reg11").removeAttr("disabled");
                    $("#ext1").removeAttr("disabled");    
                    $("#pmfn11").attr("disabled", "disabled");
                    $("#pmreg11").attr("disabled", "disabled");
                    $("#t2fn11").attr("disabled", "disabled");
                    $("#t2reg11").attr("disabled", "disabled");
            break;
                case "Other 1":


            						$("#pmfn11").removeAttr("disabled");
            						$("#pmreg11").removeAttr("disabled");
            						$("#t1fn11").attr("disabled", "disabled");
                                    $("#t1reg11").attr("disabled", "disabled");
                                    $("#t2fn11").attr("disabled", "disabled");
                                    $("#t2reg11").attr("disabled", "disabled");
                                    $("#ext1").removeAttr("disabled");    
                                  
                                    
                                      
                                      break;
                                      
            					case "Other 2":
                

            						$("#pmfn11").removeAttr("disabled");
            						$("#pmreg11").removeAttr("disabled");
            						$("#t1fn11").removeAttr("disabled");
            						$("#t1reg11").removeAttr("disabled");
                                    $("#t2fn11").attr("disabled", "disabled");
                                    $("#t2reg11").attr("disabled", "disabled");
                                    $("#ext1").removeAttr("disabled");  
                
                  
                  break;
            					case "Other 3":
                

            						$("#pmfn11").removeAttr("disabled");
            						$("#pmreg11").removeAttr("disabled");
            						$("#t1fn11").removeAttr("disabled");
            						$("#t1reg11").removeAttr("disabled");
            						$("#t2fn11").removeAttr("disabled");
            						$("#t2reg11").removeAttr("disabled");
                                    $("#ext1").removeAttr("disabled");  
                
                  
                  break;
                 default:
                        $("#t1fn11").removeAttr("disabled");
                        $("#t2fn11").removeAttr("disabled");
                        $("#t1reg11").removeAttr("disabled");
                        $("#t2reg11").removeAttr("disabled");
                        $("#pmfn11").removeAttr("disabled");
                        $("#pmreg11").removeAttr("disabled");
                        $("#ext1").removeAttr("disabled");
                    break;
            } 
        	
            
            
            if(type == "Single Rigid"){
                $('#type11').html('<option value="">Type</option><option value="Box">Box</option><option value="Flat Top">Flat Top</option>');
                }
                if(type == "Bogie Rigid"){
                $('#type11').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Prime Mover"){
                $('#type11').html('<option value="">Type</option><option value="Day Cab">Day Cab</option><option value="Sleeper Cab">Sleeper Cab</option>');
                }
                if(type == "Single Combination"){
                $('#type11').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "B Double Combination"){
                $('#type11').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "Single Trailer"){
                $('#type11').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option>');
                }
                if(type == "B Double Trailer"){
                $('#type11').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "FORKLIFT"){
                $('#type11').html('<option value="">Type</option><option value="Small">Small</option><option value="Medium">Medium</option><option value="Large">Large</option>');
                }
                if(type == "VAN/UTE/CAR"){
                $('#type11').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Dolly Trailer"){
                $('#type11').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 1"){
                $('#type11').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 2"){
                $('#type11').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 3"){
                $('#type11').html('<option value="">Type</option><option value=" ">All</option>');
                }
            	}).trigger("change");
  	  

   	   //--------------------------------------12     	
      	
   	   $('#sel12').on('change', function() {
                var type = document.getElementById("sel12").value;
            switch(type) {
                case "Single Rigid":
                      $("#pmfn12").removeAttr("disabled");
                      $("#pmreg12").removeAttr("disabled");
                      $("#ext1").removeAttr("disabled");
                      $("#t1fn12").attr("disabled", "disabled");
                      $("#t1reg12").attr("disabled", "disabled");
                      $("#t2fn12").attr("disabled", "disabled");
                      $("#t2reg12").attr("disabled", "disabled");
                        break;
                case "Bogie Rigid":
                   $("#pmfn12").removeAttr("disabled");
                   $("#pmreg12").removeAttr("disabled");
                   $("#ext1").removeAttr("disabled");
                   $("#t1fn12").attr("disabled", "disabled");
                   $("#t1reg12").attr("disabled", "disabled");
                   $("#t2fn12").attr("disabled", "disabled");
                   $("#t2reg12").attr("disabled", "disabled");
                     break;
                case "Prime Mover":
                  $("#pmfn12").removeAttr("disabled");
                    $("#pmreg12").removeAttr("disabled");
                    $("#ext1").removeAttr("disabled");
                    $("#t1fn12").attr("disabled", "disabled");
                    $("#t1reg12").attr("disabled", "disabled");
                    $("#t2fn12").attr("disabled", "disabled");
                    $("#t2reg12").attr("disabled", "disabled");
                break;
                
                case "Single Combination":
                    $("#t1fn12").removeAttr("disabled");
                    $("#t1reg12").removeAttr("disabled");
                    $("#ext1").removeAttr("disabled");    
                    $("#pmfn12").removeAttr("disabled");
                    $("#pmreg12").removeAttr("disabled");
                    $("#t2fn12").attr("disabled", "disabled");
                    $("#t2reg12").attr("disabled", "disabled");          
            break;
            
                case "B Double Combination":
                    

              	  $("#t1fn12").removeAttr("disabled");
                    $("#t2fn12").removeAttr("disabled");
                    $("#t1reg12").removeAttr("disabled");
                    $("#t2reg12").removeAttr("disabled");
                    $("#pmfn12").removeAttr("disabled");
                    $("#pmreg12").removeAttr("disabled");
                    $("#ext1").removeAttr("disabled");
                  
                    
                    break;
                    
                    
                case "Single Trailer":
                    $("#t1fn12").removeAttr("disabled");
                    $("#t1reg12").removeAttr("disabled");
                    $("#ext1").removeAttr("disabled");    
                    $("#pmfn12").attr("disabled", "disabled");
                    $("#pmreg12").attr("disabled", "disabled");
                    $("#t2fn12").attr("disabled", "disabled");
                    $("#t2reg12").attr("disabled", "disabled");
            break;
            
            
                case "B Double Trailer":
                    $("#t1fn12").removeAttr("disabled");
                    $("#t1reg12").removeAttr("disabled");
                    $("#ext1").removeAttr("disabled");    
                    $("#pmfn12").attr("disabled", "disabled");
                    $("#pmreg12").attr("disabled", "disabled");
                    $("#t2fn12").removeAttr("disabled");
                    $("#t2reg12").removeAttr("disabled");
            break;
            
                case "FORKLIFT":
                    $("#pmfn12").removeAttr("disabled");
                      $("#pmreg12").removeAttr("disabled");
                      $("#ext1").removeAttr("disabled");
                      $("#t1fn12").attr("disabled", "disabled");
                      $("#t1reg12").attr("disabled", "disabled");
                      $("#t2fn12").attr("disabled", "disabled");
                      $("#t2reg12").attr("disabled", "disabled");
                  break;
            
            
                
                case "VAN/UTE/CAR":
                      $("#pmfn12").removeAttr("disabled");
                      $("#pmreg12").removeAttr("disabled");
                      $("#ext1").removeAttr("disabled");
                        $("#t1fn12").attr("disabled", "disabled");
                        $("#t1reg12").attr("disabled", "disabled");
                        $("#t2fn12").attr("disabled", "disabled");
                        $("#t2reg12").attr("disabled", "disabled"); 
                break;
                
                case "Dolly Trailer":
                    $("#t1fn12").removeAttr("disabled");
                    $("#t1reg12").removeAttr("disabled");
                    $("#ext1").removeAttr("disabled");    
                    $("#pmfn12").attr("disabled", "disabled");
                    $("#pmreg12").attr("disabled", "disabled");
                    $("#t2fn12").attr("disabled", "disabled");
                    $("#t2reg12").attr("disabled", "disabled");
            break;
                case "Other 1":


            						$("#pmfn12").removeAttr("disabled");
            						$("#pmreg12").removeAttr("disabled");
            						$("#t1fn12").attr("disabled", "disabled");
                                    $("#t1reg12").attr("disabled", "disabled");
                                    $("#t2fn12").attr("disabled", "disabled");
                                    $("#t2reg12").attr("disabled", "disabled");
                                    $("#ext1").removeAttr("disabled");    
                                  
                                    
                                      
                                      break;
                                      
            					case "Other 2":
                

            						$("#pmfn12").removeAttr("disabled");
            						$("#pmreg12").removeAttr("disabled");
            						$("#t1fn12").removeAttr("disabled");
            						$("#t1reg12").removeAttr("disabled");
                                    $("#t2fn12").attr("disabled", "disabled");
                                    $("#t2reg12").attr("disabled", "disabled");
                                    $("#ext1").removeAttr("disabled");  
                
                  
                  break;
            					case "Other 3":
                

            						$("#pmfn12").removeAttr("disabled");
            						$("#pmreg12").removeAttr("disabled");
            						$("#t1fn12").removeAttr("disabled");
            						$("#t1reg12").removeAttr("disabled");
            						$("#t2fn12").removeAttr("disabled");
            						$("#t2reg12").removeAttr("disabled");
                                    $("#ext1").removeAttr("disabled");  
                
                  
                  break;
                 default:
                        $("#t1fn12").removeAttr("disabled");
                        $("#t2fn12").removeAttr("disabled");
                        $("#t1reg12").removeAttr("disabled");
                        $("#t2reg12").removeAttr("disabled");
                        $("#pmfn12").removeAttr("disabled");
                        $("#pmreg12").removeAttr("disabled");
                        $("#ext1").removeAttr("disabled");
                    break;
            } 
        	
            
            if(type == "Single Rigid"){
                $('#type12').html('<option value="">Type</option><option value="Box">Box</option><option value="Flat Top">Flat Top</option>');
                }
                if(type == "Bogie Rigid"){
                $('#type12').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Prime Mover"){
                $('#type12').html('<option value="">Type</option><option value="Day Cab">Day Cab</option><option value="Sleeper Cab">Sleeper Cab</option>');
                }
                if(type == "Single Combination"){
                $('#type12').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "B Double Combination"){
                $('#type12').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "Single Trailer"){
                $('#type12').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option>');
                }
                if(type == "B Double Trailer"){
                $('#type12').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "FORKLIFT"){
                $('#type12').html('<option value="">Type</option><option value="Small">Small</option><option value="Medium">Medium</option><option value="Large">Large</option>');
                }
                if(type == "VAN/UTE/CAR"){
                $('#type12').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Dolly Trailer"){
                $('#type12').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 1"){
                $('#type12').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 2"){
                $('#type12').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 3"){
                $('#type12').html('<option value="">Type</option><option value=" ">All</option>');
                }
            	}).trigger("change");
  	  
  	  
   	   //--------------------------------------13     	
      	
   	   $('#sel13').on('change', function() {
                var type = document.getElementById("sel13").value;
            switch(type) {
                case "Single Rigid":
                      $("#pmfn13").removeAttr("disabled");
                      $("#pmreg13").removeAttr("disabled");
                      $("#ext13").removeAttr("disabled");
                      $("#t1fn13").attr("disabled", "disabled");
                      $("#t1reg13").attr("disabled", "disabled");
                      $("#t2reg13").attr("disabled", "disabled");
                      $("#t2reg1").attr("disabled", "disabled");
                        break;
                case "Bogie Rigid":
                   $("#pmfn13").removeAttr("disabled");
                   $("#pmreg13").removeAttr("disabled");
                   $("#ext13").removeAttr("disabled");
                   $("#t1fn13").attr("disabled", "disabled");
                   $("#t1reg13").attr("disabled", "disabled");
                   $("#t2reg13").attr("disabled", "disabled");
                   $("#t2reg1").attr("disabled", "disabled");
                     break;
                case "Prime Mover":
                  $("#pmfn13").removeAttr("disabled");
                    $("#pmreg13").removeAttr("disabled");
                    $("#ext13").removeAttr("disabled");
                    $("#t1fn13").attr("disabled", "disabled");
                    $("#t1reg13").attr("disabled", "disabled");
                    $("#t2reg13").attr("disabled", "disabled");
                    $("#t2reg1").attr("disabled", "disabled");
                break;
                
                case "Single Combination":
                    $("#t1fn13").removeAttr("disabled");
                    $("#t1reg13").removeAttr("disabled");
                    $("#ext13").removeAttr("disabled");    
                    $("#pmfn13").removeAttr("disabled");
                    $("#pmreg13").removeAttr("disabled");
                    $("#t2reg13").attr("disabled", "disabled");
                    $("#t2reg1").attr("disabled", "disabled");          
            break;
            
                case "B Double Combination":
                    

              	  $("#t1fn13").removeAttr("disabled");
                    $("#t2reg13").removeAttr("disabled");
                    $("#t1reg13").removeAttr("disabled");
                    $("#t2reg1").removeAttr("disabled");
                    $("#pmfn13").removeAttr("disabled");
                    $("#pmreg13").removeAttr("disabled");
                    $("#ext13").removeAttr("disabled");
                  
                    
                    break;
                    
                    
                case "Single Trailer":
                    $("#t1fn13").removeAttr("disabled");
                    $("#t1reg13").removeAttr("disabled");
                    $("#ext13").removeAttr("disabled");    
                    $("#pmfn13").attr("disabled", "disabled");
                    $("#pmreg13").attr("disabled", "disabled");
                    $("#t2reg13").attr("disabled", "disabled");
                    $("#t2reg1").attr("disabled", "disabled");
            break;
            
            
                case "B Double Trailer":
                    $("#t1fn13").removeAttr("disabled");
                    $("#t1reg13").removeAttr("disabled");
                    $("#ext13").removeAttr("disabled");    
                    $("#pmfn13").attr("disabled", "disabled");
                    $("#pmreg13").attr("disabled", "disabled");
                    $("#t2reg13").removeAttr("disabled");
                    $("#t2reg1").removeAttr("disabled");
            break;
            
                case "FORKLIFT":
                    $("#pmfn13").removeAttr("disabled");
                      $("#pmreg13").removeAttr("disabled");
                      $("#ext13").removeAttr("disabled");
                      $("#t1fn13").attr("disabled", "disabled");
                      $("#t1reg13").attr("disabled", "disabled");
                      $("#t2reg13").attr("disabled", "disabled");
                      $("#t2reg1").attr("disabled", "disabled");
                  break;
            
            
                
                case "VAN/UTE/CAR":
                      $("#pmfn13").removeAttr("disabled");
                      $("#pmreg13").removeAttr("disabled");
                      $("#ext13").removeAttr("disabled");
                        $("#t1fn13").attr("disabled", "disabled");
                        $("#t1reg13").attr("disabled", "disabled");
                        $("#t2reg13").attr("disabled", "disabled");
                        $("#t2reg1").attr("disabled", "disabled"); 
                break;
                
                case "Dolly Trailer":
                    $("#t1fn13").removeAttr("disabled");
                    $("#t1reg13").removeAttr("disabled");
                    $("#ext13").removeAttr("disabled");    
                    $("#pmfn13").attr("disabled", "disabled");
                    $("#pmreg13").attr("disabled", "disabled");
                    $("#t2reg13").attr("disabled", "disabled");
                    $("#t2reg1").attr("disabled", "disabled");
            break;
                case "Other 1":


            						$("#pmfn13").removeAttr("disabled");
            						$("#pmreg13").removeAttr("disabled");
            						$("#t1fn13").attr("disabled", "disabled");
                                    $("#t1reg13").attr("disabled", "disabled");
                                    $("#t2reg13").attr("disabled", "disabled");
                                    $("#t2reg1").attr("disabled", "disabled");
                                    $("#ext13").removeAttr("disabled");    
                                  
                                    
                                      
                                      break;
                                      
            					case "Other 2":
                

            						$("#pmfn13").removeAttr("disabled");
            						$("#pmreg13").removeAttr("disabled");
            						$("#t1fn13").removeAttr("disabled");
            						$("#t1reg13").removeAttr("disabled");
                                    $("#t2reg13").attr("disabled", "disabled");
                                    $("#t2reg1").attr("disabled", "disabled");
                                    $("#ext13").removeAttr("disabled");  
                
                  
                  break;
            					case "Other 3":
                

            						$("#pmfn13").removeAttr("disabled");
            						$("#pmreg13").removeAttr("disabled");
            						$("#t1fn13").removeAttr("disabled");
            						$("#t1reg13").removeAttr("disabled");
            						$("#t2reg13").removeAttr("disabled");
            						$("#t2reg1").removeAttr("disabled");
                                    $("#ext13").removeAttr("disabled");  
                
                  
                  break;
                 default:
                        $("#t1fn13").removeAttr("disabled");
                        $("#t2reg13").removeAttr("disabled");
                        $("#t1reg13").removeAttr("disabled");
                        $("#t2reg1").removeAttr("disabled");
                        $("#pmfn13").removeAttr("disabled");
                        $("#pmreg13").removeAttr("disabled");
                        $("#ext13").removeAttr("disabled");
                    break;
            } 
        	
            
            if(type == "Single Rigid"){
                $('#type13').html('<option value="">Type</option><option value="Box">Box</option><option value="Flat Top">Flat Top</option>');
                }
                if(type == "Bogie Rigid"){
                $('#type13').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Prime Mover"){
                $('#type13').html('<option value="">Type</option><option value="Day Cab">Day Cab</option><option value="Sleeper Cab">Sleeper Cab</option>');
                }
                if(type == "Single Combination"){
                $('#type13').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "B Double Combination"){
                $('#type13').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "Single Trailer"){
                $('#type13').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option>');
                }
                if(type == "B Double Trailer"){
                $('#type13').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "FORKLIFT"){
                $('#type13').html('<option value="">Type</option><option value="Small">Small</option><option value="Medium">Medium</option><option value="Large">Large</option>');
                }
                if(type == "VAN/UTE/CAR"){
                $('#type13').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Dolly Trailer"){
                $('#type13').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 1"){
                $('#type13').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 2"){
                $('#type13').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 3"){
                $('#type13').html('<option value="">Type</option><option value=" ">All</option>');
                }
            	}).trigger("change");
	    	  
 
   	   
   	   
   	   //--------------------------------------14     	
      	
   	   $('#sel14').on('change', function() {
                var type = document.getElementById("sel14").value;
            switch(type) {
                case "Single Rigid":
                      $("#pmfn14").removeAttr("disabled");
                      $("#pmreg14").removeAttr("disabled");
                      $("#ext14").removeAttr("disabled");
                      $("#t1fn14").attr("disabled", "disabled");
                      $("#t1reg14").attr("disabled", "disabled");
                      $("#t2fn14").attr("disabled", "disabled");
                      $("#t2reg14").attr("disabled", "disabled");
                        break;
                case "Bogie Rigid":
                   $("#pmfn14").removeAttr("disabled");
                   $("#pmreg14").removeAttr("disabled");
                   $("#ext14").removeAttr("disabled");
                   $("#t1fn14").attr("disabled", "disabled");
                   $("#t1reg14").attr("disabled", "disabled");
                   $("#t2fn14").attr("disabled", "disabled");
                   $("#t2reg14").attr("disabled", "disabled");
                     break;
                case "Prime Mover":
                  $("#pmfn14").removeAttr("disabled");
                    $("#pmreg14").removeAttr("disabled");
                    $("#ext14").removeAttr("disabled");
                    $("#t1fn14").attr("disabled", "disabled");
                    $("#t1reg14").attr("disabled", "disabled");
                    $("#t2fn14").attr("disabled", "disabled");
                    $("#t2reg14").attr("disabled", "disabled");
                break;
                
                case "Single Combination":
                    $("#t1fn14").removeAttr("disabled");
                    $("#t1reg14").removeAttr("disabled");
                    $("#ext14").removeAttr("disabled");    
                    $("#pmfn14").removeAttr("disabled");
                    $("#pmreg14").removeAttr("disabled");
                    $("#t2fn14").attr("disabled", "disabled");
                    $("#t2reg14").attr("disabled", "disabled");          
            break;
            
                case "B Double Combination":
                    

              	  $("#t1fn14").removeAttr("disabled");
                    $("#t2fn14").removeAttr("disabled");
                    $("#t1reg14").removeAttr("disabled");
                    $("#t2reg14").removeAttr("disabled");
                    $("#pmfn14").removeAttr("disabled");
                    $("#pmreg14").removeAttr("disabled");
                    $("#ext14").removeAttr("disabled");
                  
                    
                    break;
                    
                    
                case "Single Trailer":
                    $("#t1fn14").removeAttr("disabled");
                    $("#t1reg14").removeAttr("disabled");
                    $("#ext14").removeAttr("disabled");    
                    $("#pmfn14").attr("disabled", "disabled");
                    $("#pmreg14").attr("disabled", "disabled");
                    $("#t2fn14").attr("disabled", "disabled");
                    $("#t2reg14").attr("disabled", "disabled");
            break;
            
            
                case "B Double Trailer":
                    $("#t1fn14").removeAttr("disabled");
                    $("#t1reg14").removeAttr("disabled");
                    $("#ext14").removeAttr("disabled");    
                    $("#pmfn14").attr("disabled", "disabled");
                    $("#pmreg14").attr("disabled", "disabled");
                    $("#t2fn14").removeAttr("disabled");
                    $("#t2reg14").removeAttr("disabled");
            break;
            
                case "FORKLIFT":
                    $("#pmfn14").removeAttr("disabled");
                      $("#pmreg14").removeAttr("disabled");
                      $("#ext14").removeAttr("disabled");
                      $("#t1fn14").attr("disabled", "disabled");
                      $("#t1reg14").attr("disabled", "disabled");
                      $("#t2fn14").attr("disabled", "disabled");
                      $("#t2reg14").attr("disabled", "disabled");
                  break;
            
            
                
                case "VAN/UTE/CAR":
                      $("#pmfn14").removeAttr("disabled");
                      $("#pmreg14").removeAttr("disabled");
                      $("#ext14").removeAttr("disabled");
                        $("#t1fn14").attr("disabled", "disabled");
                        $("#t1reg14").attr("disabled", "disabled");
                        $("#t2fn14").attr("disabled", "disabled");
                        $("#t2reg14").attr("disabled", "disabled"); 
                break;
                
                case "Dolly Trailer":
                    $("#t1fn14").removeAttr("disabled");
                    $("#t1reg14").removeAttr("disabled");
                    $("#ext14").removeAttr("disabled");    
                    $("#pmfn14").attr("disabled", "disabled");
                    $("#pmreg14").attr("disabled", "disabled");
                    $("#t2fn14").attr("disabled", "disabled");
                    $("#t2reg14").attr("disabled", "disabled");
            break;
                case "Other 1":


            						$("#pmfn14").removeAttr("disabled");
            						$("#pmreg14").removeAttr("disabled");
            						$("#t1fn14").attr("disabled", "disabled");
                                    $("#t1reg14").attr("disabled", "disabled");
                                    $("#t2fn14").attr("disabled", "disabled");
                                    $("#t2reg14").attr("disabled", "disabled");
                                    $("#ext14").removeAttr("disabled");    
                                  
                                    
                                      
                                      break;
                                      
            					case "Other 2":
                

            						$("#pmfn14").removeAttr("disabled");
            						$("#pmreg14").removeAttr("disabled");
            						$("#t1fn14").removeAttr("disabled");
            						$("#t1reg14").removeAttr("disabled");
                                    $("#t2fn14").attr("disabled", "disabled");
                                    $("#t2reg14").attr("disabled", "disabled");
                                    $("#ext14").removeAttr("disabled");  
                
                  
                  break;
            					case "Other 3":
                

            						$("#pmfn14").removeAttr("disabled");
            						$("#pmreg14").removeAttr("disabled");
            						$("#t1fn14").removeAttr("disabled");
            						$("#t1reg14").removeAttr("disabled");
            						$("#t2fn14").removeAttr("disabled");
            						$("#t2reg14").removeAttr("disabled");
                                    $("#ext14").removeAttr("disabled");  
                
                  
                  break;
                 default:
                        $("#t1fn14").removeAttr("disabled");
                        $("#t2fn14").removeAttr("disabled");
                        $("#t1reg14").removeAttr("disabled");
                        $("#t2reg14").removeAttr("disabled");
                        $("#pmfn14").removeAttr("disabled");
                        $("#pmreg14").removeAttr("disabled");
                        $("#ext14").removeAttr("disabled");
                    break;
            } 
        	
            
            if(type == "Single Rigid"){
                $('#type14').html('<option value="">Type</option><option value="Box">Box</option><option value="Flat Top">Flat Top</option>');
                }
                if(type == "Bogie Rigid"){
                $('#type14').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Prime Mover"){
                $('#type14').html('<option value="">Type</option><option value="Day Cab">Day Cab</option><option value="Sleeper Cab">Sleeper Cab</option>');
                }
                if(type == "Single Combination"){
                $('#type14').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "B Double Combination"){
                $('#type14').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "Single Trailer"){
                $('#type14').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option>');
                }
                if(type == "B Double Trailer"){
                $('#type14').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "FORKLIFT"){
                $('#type14').html('<option value="">Type</option><option value="Small">Small</option><option value="Medium">Medium</option><option value="Large">Large</option>');
                }
                if(type == "VAN/UTE/CAR"){
                $('#type14').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Dolly Trailer"){
                $('#type14').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 1"){
                $('#type14').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 2"){
                $('#type14').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 3"){
                $('#type14').html('<option value="">Type</option><option value=" ">All</option>');
                }
            	}).trigger("change");
	     	   
   	   
   	   //--------------------------------------15     	
      	
   	   $('#sel15').on('change', function() {
                var type = document.getElementById("sel15").value;
            switch(type) {
                case "Single Rigid":
                      $("#pmfn15").removeAttr("disabled");
                      $("#pmreg15").removeAttr("disabled");
                      $("#ext15").removeAttr("disabled");
                      $("#t1fn15").attr("disabled", "disabled");
                      $("#t1reg15").attr("disabled", "disabled");
                      $("#t2fn15").attr("disabled", "disabled");
                      $("#t2reg15").attr("disabled", "disabled");
                        break;
                case "Bogie Rigid":
                   $("#pmfn15").removeAttr("disabled");
                   $("#pmreg15").removeAttr("disabled");
                   $("#ext15").removeAttr("disabled");
                   $("#t1fn15").attr("disabled", "disabled");
                   $("#t1reg15").attr("disabled", "disabled");
                   $("#t2fn15").attr("disabled", "disabled");
                   $("#t2reg15").attr("disabled", "disabled");
                     break;
                case "Prime Mover":
                  $("#pmfn15").removeAttr("disabled");
                    $("#pmreg15").removeAttr("disabled");
                    $("#ext15").removeAttr("disabled");
                    $("#t1fn15").attr("disabled", "disabled");
                    $("#t1reg15").attr("disabled", "disabled");
                    $("#t2fn15").attr("disabled", "disabled");
                    $("#t2reg15").attr("disabled", "disabled");
                break;
                
                case "Single Combination":
                    $("#t1fn15").removeAttr("disabled");
                    $("#t1reg15").removeAttr("disabled");
                    $("#ext15").removeAttr("disabled");    
                    $("#pmfn15").removeAttr("disabled");
                    $("#pmreg15").removeAttr("disabled");
                    $("#t2fn15").attr("disabled", "disabled");
                    $("#t2reg15").attr("disabled", "disabled");          
            break;
            
                case "B Double Combination":
                    

              	  $("#t1fn15").removeAttr("disabled");
                    $("#t2fn15").removeAttr("disabled");
                    $("#t1reg15").removeAttr("disabled");
                    $("#t2reg15").removeAttr("disabled");
                    $("#pmfn15").removeAttr("disabled");
                    $("#pmreg15").removeAttr("disabled");
                    $("#ext15").removeAttr("disabled");
                  
                    
                    break;
                    
                    
                case "Single Trailer":
                    $("#t1fn15").removeAttr("disabled");
                    $("#t1reg15").removeAttr("disabled");
                    $("#ext15").removeAttr("disabled");    
                    $("#pmfn15").attr("disabled", "disabled");
                    $("#pmreg15").attr("disabled", "disabled");
                    $("#t2fn15").attr("disabled", "disabled");
                    $("#t2reg15").attr("disabled", "disabled");
            break;
            
            
                case "B Double Trailer":
                    $("#t1fn15").removeAttr("disabled");
                    $("#t1reg15").removeAttr("disabled");
                    $("#ext15").removeAttr("disabled");    
                    $("#pmfn15").attr("disabled", "disabled");
                    $("#pmreg15").attr("disabled", "disabled");
                    $("#t2fn15").removeAttr("disabled");
                    $("#t2reg15").removeAttr("disabled");
            break;
            
                case "FORKLIFT":
                    $("#pmfn15").removeAttr("disabled");
                      $("#pmreg15").removeAttr("disabled");
                      $("#ext15").removeAttr("disabled");
                      $("#t1fn15").attr("disabled", "disabled");
                      $("#t1reg15").attr("disabled", "disabled");
                      $("#t2fn15").attr("disabled", "disabled");
                      $("#t2reg15").attr("disabled", "disabled");
                  break;
            
            
                
                case "VAN/UTE/CAR":
                      $("#pmfn15").removeAttr("disabled");
                      $("#pmreg15").removeAttr("disabled");
                      $("#ext15").removeAttr("disabled");
                        $("#t1fn15").attr("disabled", "disabled");
                        $("#t1reg15").attr("disabled", "disabled");
                        $("#t2fn15").attr("disabled", "disabled");
                        $("#t2reg15").attr("disabled", "disabled"); 
                break;
                
                case "Dolly Trailer":
                    $("#t1fn15").removeAttr("disabled");
                    $("#t1reg15").removeAttr("disabled");
                    $("#ext15").removeAttr("disabled");    
                    $("#pmfn15").attr("disabled", "disabled");
                    $("#pmreg15").attr("disabled", "disabled");
                    $("#t2fn15").attr("disabled", "disabled");
                    $("#t2reg15").attr("disabled", "disabled");
            break;
                case "Other 1":


            						$("#pmfn15").removeAttr("disabled");
            						$("#pmreg15").removeAttr("disabled");
            						$("#t1fn15").attr("disabled", "disabled");
                                    $("#t1reg15").attr("disabled", "disabled");
                                    $("#t2fn15").attr("disabled", "disabled");
                                    $("#t2reg15").attr("disabled", "disabled");
                                    $("#ext15").removeAttr("disabled");    
                                  
                                    
                                      
                                      break;
                                      
            					case "Other 2":
                

            						$("#pmfn15").removeAttr("disabled");
            						$("#pmreg15").removeAttr("disabled");
            						$("#t1fn15").removeAttr("disabled");
            						$("#t1reg15").removeAttr("disabled");
                                    $("#t2fn15").attr("disabled", "disabled");
                                    $("#t2reg15").attr("disabled", "disabled");
                                    $("#ext15").removeAttr("disabled");  
                
                  
                  break;
            					case "Other 3":
                

            						$("#pmfn15").removeAttr("disabled");
            						$("#pmreg15").removeAttr("disabled");
            						$("#t1fn15").removeAttr("disabled");
            						$("#t1reg15").removeAttr("disabled");
            						$("#t2fn15").removeAttr("disabled");
            						$("#t2reg15").removeAttr("disabled");
                                    $("#ext15").removeAttr("disabled");  
                
                  
                  break;
                 default:
                        $("#t1fn15").removeAttr("disabled");
                        $("#t2fn15").removeAttr("disabled");
                        $("#t1reg15").removeAttr("disabled");
                        $("#t2reg15").removeAttr("disabled");
                        $("#pmfn15").removeAttr("disabled");
                        $("#pmreg15").removeAttr("disabled");
                        $("#ext15").removeAttr("disabled");
                    break;
            } 
        	
            
            
            if(type == "Single Rigid"){
                $('#type15').html('<option value="">Type</option><option value="Box">Box</option><option value="Flat Top">Flat Top</option>');
                }
                if(type == "Bogie Rigid"){
                $('#type15').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Prime Mover"){
                $('#type15').html('<option value="">Type</option><option value="Day Cab">Day Cab</option><option value="Sleeper Cab">Sleeper Cab</option>');
                }
                if(type == "Single Combination"){
                $('#type15').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "B Double Combination"){
                $('#type15').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "Single Trailer"){
                $('#type15').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option>');
                }
                if(type == "B Double Trailer"){
                $('#type15').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "FORKLIFT"){
                $('#type15').html('<option value="">Type</option><option value="Small">Small</option><option value="Medium">Medium</option><option value="Large">Large</option>');
                }
                if(type == "VAN/UTE/CAR"){
                $('#type15').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Dolly Trailer"){
                $('#type15').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 1"){
                $('#type15').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 2"){
                $('#type15').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 3"){
                $('#type15').html('<option value="">Type</option><option value=" ">All</option>');
                }
            	}).trigger("change");
	     	   
   	   
   	   
   	   //--------------------------------------16     	
      	
   	   $('#sel16').on('change', function() {
                var type = document.getElementById("sel16").value;
            switch(type) {
                case "Single Rigid":
                      $("#pmfn16").removeAttr("disabled");
                      $("#pmreg16").removeAttr("disabled");
                      $("#ext16").removeAttr("disabled");
                      $("#t1fn16").attr("disabled", "disabled");
                      $("#t1reg16").attr("disabled", "disabled");
                      $("#t2fn16").attr("disabled", "disabled");
                      $("#t2reg16").attr("disabled", "disabled");
                        break;
                case "Bogie Rigid":
                   $("#pmfn16").removeAttr("disabled");
                   $("#pmreg16").removeAttr("disabled");
                   $("#ext16").removeAttr("disabled");
                   $("#t1fn16").attr("disabled", "disabled");
                   $("#t1reg16").attr("disabled", "disabled");
                   $("#t2fn16").attr("disabled", "disabled");
                   $("#t2reg16").attr("disabled", "disabled");
                     break;
                case "Prime Mover":
                  $("#pmfn16").removeAttr("disabled");
                    $("#pmreg16").removeAttr("disabled");
                    $("#ext16").removeAttr("disabled");
                    $("#t1fn16").attr("disabled", "disabled");
                    $("#t1reg16").attr("disabled", "disabled");
                    $("#t2fn16").attr("disabled", "disabled");
                    $("#t2reg16").attr("disabled", "disabled");
                break;
                
                case "Single Combination":
                    $("#t1fn16").removeAttr("disabled");
                    $("#t1reg16").removeAttr("disabled");
                    $("#ext16").removeAttr("disabled");    
                    $("#pmfn16").removeAttr("disabled");
                    $("#pmreg16").removeAttr("disabled");
                    $("#t2fn16").attr("disabled", "disabled");
                    $("#t2reg16").attr("disabled", "disabled");          
            break;
            
                case "B Double Combination":
                    

              	  $("#t1fn16").removeAttr("disabled");
                    $("#t2fn16").removeAttr("disabled");
                    $("#t1reg16").removeAttr("disabled");
                    $("#t2reg16").removeAttr("disabled");
                    $("#pmfn16").removeAttr("disabled");
                    $("#pmreg16").removeAttr("disabled");
                    $("#ext16").removeAttr("disabled");
                  
                    
                    break;
                    
                    
                case "Single Trailer":
                    $("#t1fn16").removeAttr("disabled");
                    $("#t1reg16").removeAttr("disabled");
                    $("#ext16").removeAttr("disabled");    
                    $("#pmfn16").attr("disabled", "disabled");
                    $("#pmreg16").attr("disabled", "disabled");
                    $("#t2fn16").attr("disabled", "disabled");
                    $("#t2reg16").attr("disabled", "disabled");
            break;
            
            
                case "B Double Trailer":
                    $("#t1fn16").removeAttr("disabled");
                    $("#t1reg16").removeAttr("disabled");
                    $("#ext16").removeAttr("disabled");    
                    $("#pmfn16").attr("disabled", "disabled");
                    $("#pmreg16").attr("disabled", "disabled");
                    $("#t2fn16").removeAttr("disabled");
                    $("#t2reg16").removeAttr("disabled");
            break;
            
                case "FORKLIFT":
                    $("#pmfn16").removeAttr("disabled");
                      $("#pmreg16").removeAttr("disabled");
                      $("#ext16").removeAttr("disabled");
                      $("#t1fn16").attr("disabled", "disabled");
                      $("#t1reg16").attr("disabled", "disabled");
                      $("#t2fn16").attr("disabled", "disabled");
                      $("#t2reg16").attr("disabled", "disabled");
                  break;
            
            
                
                case "VAN/UTE/CAR":
                      $("#pmfn16").removeAttr("disabled");
                      $("#pmreg16").removeAttr("disabled");
                      $("#ext16").removeAttr("disabled");
                        $("#t1fn16").attr("disabled", "disabled");
                        $("#t1reg16").attr("disabled", "disabled");
                        $("#t2fn16").attr("disabled", "disabled");
                        $("#t2reg16").attr("disabled", "disabled"); 
                break;
                
                case "Dolly Trailer":
                    $("#t1fn16").removeAttr("disabled");
                    $("#t1reg16").removeAttr("disabled");
                    $("#ext16").removeAttr("disabled");    
                    $("#pmfn16").attr("disabled", "disabled");
                    $("#pmreg16").attr("disabled", "disabled");
                    $("#t2fn16").attr("disabled", "disabled");
                    $("#t2reg16").attr("disabled", "disabled");
            break;
                case "Other 1":


            						$("#pmfn16").removeAttr("disabled");
            						$("#pmreg16").removeAttr("disabled");
            						$("#t1fn16").attr("disabled", "disabled");
                                    $("#t1reg16").attr("disabled", "disabled");
                                    $("#t2fn16").attr("disabled", "disabled");
                                    $("#t2reg16").attr("disabled", "disabled");
                                    $("#ext16").removeAttr("disabled");    
                                  
                                    
                                      
                                      break;
                                      
            					case "Other 2":
                

            						$("#pmfn16").removeAttr("disabled");
            						$("#pmreg16").removeAttr("disabled");
            						$("#t1fn16").removeAttr("disabled");
            						$("#t1reg16").removeAttr("disabled");
                                    $("#t2fn16").attr("disabled", "disabled");
                                    $("#t2reg16").attr("disabled", "disabled");
                                    $("#ext16").removeAttr("disabled");  
                
                  
                  break;
            					case "Other 3":
                

            						$("#pmfn16").removeAttr("disabled");
            						$("#pmreg16").removeAttr("disabled");
            						$("#t1fn16").removeAttr("disabled");
            						$("#t1reg16").removeAttr("disabled");
            						$("#t2fn16").removeAttr("disabled");
            						$("#t2reg16").removeAttr("disabled");
                                    $("#ext16").removeAttr("disabled");  
                
                  
                  break;
                 default:
                        $("#t1fn16").removeAttr("disabled");
                        $("#t2fn16").removeAttr("disabled");
                        $("#t1reg16").removeAttr("disabled");
                        $("#t2reg16").removeAttr("disabled");
                        $("#pmfn16").removeAttr("disabled");
                        $("#pmreg16").removeAttr("disabled");
                        $("#ext16").removeAttr("disabled");
                    break;
            } 
        	
            
            
            if(type == "Single Rigid"){
                $('#type16').html('<option value="">Type</option><option value="Box">Box</option><option value="Flat Top">Flat Top</option>');
                }
                if(type == "Bogie Rigid"){
                $('#type16').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Prime Mover"){
                $('#type16').html('<option value="">Type</option><option value="Day Cab">Day Cab</option><option value="Sleeper Cab">Sleeper Cab</option>');
                }
                if(type == "Single Combination"){
                $('#type16').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "B Double Combination"){
                $('#type16').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "Single Trailer"){
                $('#type16').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option>');
                }
                if(type == "B Double Trailer"){
                $('#type16').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "FORKLIFT"){
                $('#type16').html('<option value="">Type</option><option value="Small">Small</option><option value="Medium">Medium</option><option value="Large">Large</option>');
                }
                if(type == "VAN/UTE/CAR"){
                $('#type16').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Dolly Trailer"){
                $('#type16').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 1"){
                $('#type16').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 2"){
                $('#type16').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 3"){
                $('#type16').html('<option value="">Type</option><option value=" ">All</option>');
                }
            	}).trigger("change");    
	     	   
   	   
   	   
   	   
   	   //--------------------------------------17     	
      	
   	   $('#sel17').on('change', function() {
                var type = document.getElementById("sel17").value;
            switch(type) {
                case "Single Rigid":
                      $("#pmfn17").removeAttr("disabled");
                      $("#pmreg17").removeAttr("disabled");
                      $("#ext17").removeAttr("disabled");
                      $("#t1fn17").attr("disabled", "disabled");
                      $("#t1reg17").attr("disabled", "disabled");
                      $("#t2fn17").attr("disabled", "disabled");
                      $("#t2reg17").attr("disabled", "disabled");
                        break;
                case "Bogie Rigid":
                   $("#pmfn17").removeAttr("disabled");
                   $("#pmreg17").removeAttr("disabled");
                   $("#ext17").removeAttr("disabled");
                   $("#t1fn17").attr("disabled", "disabled");
                   $("#t1reg17").attr("disabled", "disabled");
                   $("#t2fn17").attr("disabled", "disabled");
                   $("#t2reg17").attr("disabled", "disabled");
                     break;
                case "Prime Mover":
                  $("#pmfn17").removeAttr("disabled");
                    $("#pmreg17").removeAttr("disabled");
                    $("#ext17").removeAttr("disabled");
                    $("#t1fn17").attr("disabled", "disabled");
                    $("#t1reg17").attr("disabled", "disabled");
                    $("#t2fn17").attr("disabled", "disabled");
                    $("#t2reg17").attr("disabled", "disabled");
                break;
                
                case "Single Combination":
                    $("#t1fn17").removeAttr("disabled");
                    $("#t1reg17").removeAttr("disabled");
                    $("#ext17").removeAttr("disabled");    
                    $("#pmfn17").removeAttr("disabled");
                    $("#pmreg17").removeAttr("disabled");
                    $("#t2fn17").attr("disabled", "disabled");
                    $("#t2reg17").attr("disabled", "disabled");          
            break;
            
                case "B Double Combination":
                    

              	  $("#t1fn17").removeAttr("disabled");
                    $("#t2fn17").removeAttr("disabled");
                    $("#t1reg17").removeAttr("disabled");
                    $("#t2reg17").removeAttr("disabled");
                    $("#pmfn17").removeAttr("disabled");
                    $("#pmreg17").removeAttr("disabled");
                    $("#ext17").removeAttr("disabled");
                  
                    
                    break;
                    
                    
                case "Single Trailer":
                    $("#t1fn17").removeAttr("disabled");
                    $("#t1reg17").removeAttr("disabled");
                    $("#ext17").removeAttr("disabled");    
                    $("#pmfn17").attr("disabled", "disabled");
                    $("#pmreg17").attr("disabled", "disabled");
                    $("#t2fn17").attr("disabled", "disabled");
                    $("#t2reg17").attr("disabled", "disabled");
            break;
            
            
                case "B Double Trailer":
                    $("#t1fn17").removeAttr("disabled");
                    $("#t1reg17").removeAttr("disabled");
                    $("#ext17").removeAttr("disabled");    
                    $("#pmfn17").attr("disabled", "disabled");
                    $("#pmreg17").attr("disabled", "disabled");
                    $("#t2fn17").removeAttr("disabled");
                    $("#t2reg17").removeAttr("disabled");
            break;
            
                case "FORKLIFT":
                    $("#pmfn17").removeAttr("disabled");
                      $("#pmreg17").removeAttr("disabled");
                      $("#ext17").removeAttr("disabled");
                      $("#t1fn17").attr("disabled", "disabled");
                      $("#t1reg17").attr("disabled", "disabled");
                      $("#t2fn17").attr("disabled", "disabled");
                      $("#t2reg17").attr("disabled", "disabled");
                  break;
            
            
                
                case "VAN/UTE/CAR":
                      $("#pmfn17").removeAttr("disabled");
                      $("#pmreg17").removeAttr("disabled");
                      $("#ext17").removeAttr("disabled");
                        $("#t1fn17").attr("disabled", "disabled");
                        $("#t1reg17").attr("disabled", "disabled");
                        $("#t2fn17").attr("disabled", "disabled");
                        $("#t2reg17").attr("disabled", "disabled"); 
                break;
                
                case "Dolly Trailer":
                    $("#t1fn17").removeAttr("disabled");
                    $("#t1reg17").removeAttr("disabled");
                    $("#ext17").removeAttr("disabled");    
                    $("#pmfn17").attr("disabled", "disabled");
                    $("#pmreg17").attr("disabled", "disabled");
                    $("#t2fn17").attr("disabled", "disabled");
                    $("#t2reg17").attr("disabled", "disabled");
            break;
                case "Other 1":


            						$("#pmfn17").removeAttr("disabled");
            						$("#pmreg17").removeAttr("disabled");
            						$("#t1fn17").attr("disabled", "disabled");
                                    $("#t1reg17").attr("disabled", "disabled");
                                    $("#t2fn17").attr("disabled", "disabled");
                                    $("#t2reg17").attr("disabled", "disabled");
                                    $("#ext17").removeAttr("disabled");    
                                  
                                    
                                      
                                      break;
                                      
            					case "Other 2":
                

            						$("#pmfn17").removeAttr("disabled");
            						$("#pmreg17").removeAttr("disabled");
            						$("#t1fn17").removeAttr("disabled");
            						$("#t1reg17").removeAttr("disabled");
                                    $("#t2fn17").attr("disabled", "disabled");
                                    $("#t2reg17").attr("disabled", "disabled");
                                    $("#ext17").removeAttr("disabled");  
                
                  
                  break;
            					case "Other 3":
                

            						$("#pmfn17").removeAttr("disabled");
            						$("#pmreg17").removeAttr("disabled");
            						$("#t1fn17").removeAttr("disabled");
            						$("#t1reg17").removeAttr("disabled");
            						$("#t2fn17").removeAttr("disabled");
            						$("#t2reg17").removeAttr("disabled");
                                    $("#ext17").removeAttr("disabled");  
                
                  
                  break;
                 default:
                        $("#t1fn17").removeAttr("disabled");
                        $("#t2fn17").removeAttr("disabled");
                        $("#t1reg17").removeAttr("disabled");
                        $("#t2reg17").removeAttr("disabled");
                        $("#pmfn17").removeAttr("disabled");
                        $("#pmreg17").removeAttr("disabled");
                        $("#ext17").removeAttr("disabled");
                    break;
            } 
        	
            
            
            if(type == "Single Rigid"){
                $('#type17').html('<option value="">Type</option><option value="Box">Box</option><option value="Flat Top">Flat Top</option>');
                }
                if(type == "Bogie Rigid"){
                $('#type17').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Prime Mover"){
                $('#type17').html('<option value="">Type</option><option value="Day Cab">Day Cab</option><option value="Sleeper Cab">Sleeper Cab</option>');
                }
                if(type == "Single Combination"){
                $('#type17').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "B Double Combination"){
                $('#type17').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "Single Trailer"){
                $('#type17').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option>');
                }
                if(type == "B Double Trailer"){
                $('#type17').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "FORKLIFT"){
                $('#type17').html('<option value="">Type</option><option value="Small">Small</option><option value="Medium">Medium</option><option value="Large">Large</option>');
                }
                if(type == "VAN/UTE/CAR"){
                $('#type17').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Dolly Trailer"){
                $('#type17').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 1"){
                $('#type17').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 2"){
                $('#type17').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 3"){
                $('#type17').html('<option value="">Type</option><option value=" ">All</option>');
                }
            	}).trigger("change");  
	     	   
   	   
   	   //--------------------------------------18     	
      	
   	   $('#sel18').on('change', function() {
                var type = document.getElementById("sel18").value;
            switch(type) {
                case "Single Rigid":
                      $("#pmfn18").removeAttr("disabled");
                      $("#pmreg18").removeAttr("disabled");
                      $("#ext18").removeAttr("disabled");
                      $("#t1fn18").attr("disabled", "disabled");
                      $("#t1reg18").attr("disabled", "disabled");
                      $("#t2fn18").attr("disabled", "disabled");
                      $("#t2reg18").attr("disabled", "disabled");
                        break;
                case "Bogie Rigid":
                   $("#pmfn18").removeAttr("disabled");
                   $("#pmreg18").removeAttr("disabled");
                   $("#ext18").removeAttr("disabled");
                   $("#t1fn18").attr("disabled", "disabled");
                   $("#t1reg18").attr("disabled", "disabled");
                   $("#t2fn18").attr("disabled", "disabled");
                   $("#t2reg18").attr("disabled", "disabled");
                     break;
                case "Prime Mover":
                  $("#pmfn18").removeAttr("disabled");
                    $("#pmreg18").removeAttr("disabled");
                    $("#ext18").removeAttr("disabled");
                    $("#t1fn18").attr("disabled", "disabled");
                    $("#t1reg18").attr("disabled", "disabled");
                    $("#t2fn18").attr("disabled", "disabled");
                    $("#t2reg18").attr("disabled", "disabled");
                break;
                
                case "Single Combination":
                    $("#t1fn18").removeAttr("disabled");
                    $("#t1reg18").removeAttr("disabled");
                    $("#ext18").removeAttr("disabled");    
                    $("#pmfn18").removeAttr("disabled");
                    $("#pmreg18").removeAttr("disabled");
                    $("#t2fn18").attr("disabled", "disabled");
                    $("#t2reg18").attr("disabled", "disabled");          
            break;
            
                case "B Double Combination":
                    

              	  $("#t1fn18").removeAttr("disabled");
                    $("#t2fn18").removeAttr("disabled");
                    $("#t1reg18").removeAttr("disabled");
                    $("#t2reg18").removeAttr("disabled");
                    $("#pmfn18").removeAttr("disabled");
                    $("#pmreg18").removeAttr("disabled");
                    $("#ext18").removeAttr("disabled");
                  
                    
                    break;
                    
                    
                case "Single Trailer":
                    $("#t1fn18").removeAttr("disabled");
                    $("#t1reg18").removeAttr("disabled");
                    $("#ext18").removeAttr("disabled");    
                    $("#pmfn18").attr("disabled", "disabled");
                    $("#pmreg18").attr("disabled", "disabled");
                    $("#t2fn18").attr("disabled", "disabled");
                    $("#t2reg18").attr("disabled", "disabled");
            break;
            
            
                case "B Double Trailer":
                    $("#t1fn18").removeAttr("disabled");
                    $("#t1reg18").removeAttr("disabled");
                    $("#ext18").removeAttr("disabled");    
                    $("#pmfn18").attr("disabled", "disabled");
                    $("#pmreg18").attr("disabled", "disabled");
                    $("#t2fn18").removeAttr("disabled");
                    $("#t2reg18").removeAttr("disabled");
            break;
            
                case "FORKLIFT":
                    $("#pmfn18").removeAttr("disabled");
                      $("#pmreg18").removeAttr("disabled");
                      $("#ext18").removeAttr("disabled");
                      $("#t1fn18").attr("disabled", "disabled");
                      $("#t1reg18").attr("disabled", "disabled");
                      $("#t2fn18").attr("disabled", "disabled");
                      $("#t2reg18").attr("disabled", "disabled");
                  break;
            
            
                
                case "VAN/UTE/CAR":
                      $("#pmfn18").removeAttr("disabled");
                      $("#pmreg18").removeAttr("disabled");
                      $("#ext18").removeAttr("disabled");
                        $("#t1fn18").attr("disabled", "disabled");
                        $("#t1reg18").attr("disabled", "disabled");
                        $("#t2fn18").attr("disabled", "disabled");
                        $("#t2reg18").attr("disabled", "disabled"); 
                break;
                
                case "Dolly Trailer":
                    $("#t1fn18").removeAttr("disabled");
                    $("#t1reg18").removeAttr("disabled");
                    $("#ext18").removeAttr("disabled");    
                    $("#pmfn18").attr("disabled", "disabled");
                    $("#pmreg18").attr("disabled", "disabled");
                    $("#t2fn18").attr("disabled", "disabled");
                    $("#t2reg18").attr("disabled", "disabled");
            break;
                case "Other 1":


            						$("#pmfn18").removeAttr("disabled");
            						$("#pmreg18").removeAttr("disabled");
            						$("#t1fn18").attr("disabled", "disabled");
                                    $("#t1reg18").attr("disabled", "disabled");
                                    $("#t2fn18").attr("disabled", "disabled");
                                    $("#t2reg18").attr("disabled", "disabled");
                                    $("#ext18").removeAttr("disabled");    
                                  
                                    
                                      
                                      break;
                                      
            					case "Other 2":
                

            						$("#pmfn18").removeAttr("disabled");
            						$("#pmreg18").removeAttr("disabled");
            						$("#t1fn18").removeAttr("disabled");
            						$("#t1reg18").removeAttr("disabled");
                                    $("#t2fn18").attr("disabled", "disabled");
                                    $("#t2reg18").attr("disabled", "disabled");
                                    $("#ext18").removeAttr("disabled");  
                
                  
                  break;
            					case "Other 3":
                

            						$("#pmfn18").removeAttr("disabled");
            						$("#pmreg18").removeAttr("disabled");
            						$("#t1fn18").removeAttr("disabled");
            						$("#t1reg18").removeAttr("disabled");
            						$("#t2fn18").removeAttr("disabled");
            						$("#t2reg18").removeAttr("disabled");
                                    $("#ext18").removeAttr("disabled");  
                
                  
                  break;
                 default:
                        $("#t1fn18").removeAttr("disabled");
                        $("#t2fn18").removeAttr("disabled");
                        $("#t1reg18").removeAttr("disabled");
                        $("#t2reg18").removeAttr("disabled");
                        $("#pmfn18").removeAttr("disabled");
                        $("#pmreg18").removeAttr("disabled");
                        $("#ext18").removeAttr("disabled");
                    break;
            } 
        	
            
            if(type == "Single Rigid"){
                $('#type18').html('<option value="">Type</option><option value="Box">Box</option><option value="Flat Top">Flat Top</option>');
                }
                if(type == "Bogie Rigid"){
                $('#type18').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Prime Mover"){
                $('#type18').html('<option value="">Type</option><option value="Day Cab">Day Cab</option><option value="Sleeper Cab">Sleeper Cab</option>');
                }
                if(type == "Single Combination"){
                $('#type18').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "B Double Combination"){
                $('#type18').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "Single Trailer"){
                $('#type18').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option>');
                }
                if(type == "B Double Trailer"){
                $('#type18').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "FORKLIFT"){
                $('#type18').html('<option value="">Type</option><option value="Small">Small</option><option value="Medium">Medium</option><option value="Large">Large</option>');
                }
                if(type == "VAN/UTE/CAR"){
                $('#type18').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Dolly Trailer"){
                $('#type18').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 1"){
                $('#type18').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 2"){
                $('#type18').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 3"){
                $('#type18').html('<option value="">Type</option><option value=" ">All</option>');
                }
            	}).trigger("change");
   	   
   	   //--------------------------------------19     	
      	
   	   $('#sel19').on('change', function() {
                var type = document.getElementById("sel19").value;
            switch(type) {
                case "Single Rigid":
                      $("#pmfn19").removeAttr("disabled");
                      $("#pmreg19").removeAttr("disabled");
                      $("#ext19").removeAttr("disabled");
                      $("#t1fn19").attr("disabled", "disabled");
                      $("#t1reg19").attr("disabled", "disabled");
                      $("#t2fn19").attr("disabled", "disabled");
                      $("#t2reg19").attr("disabled", "disabled");
                        break;
                case "Bogie Rigid":
                   $("#pmfn19").removeAttr("disabled");
                   $("#pmreg19").removeAttr("disabled");
                   $("#ext19").removeAttr("disabled");
                   $("#t1fn19").attr("disabled", "disabled");
                   $("#t1reg19").attr("disabled", "disabled");
                   $("#t2fn19").attr("disabled", "disabled");
                   $("#t2reg19").attr("disabled", "disabled");
                     break;
                case "Prime Mover":
                  $("#pmfn19").removeAttr("disabled");
                    $("#pmreg19").removeAttr("disabled");
                    $("#ext19").removeAttr("disabled");
                    $("#t1fn19").attr("disabled", "disabled");
                    $("#t1reg19").attr("disabled", "disabled");
                    $("#t2fn19").attr("disabled", "disabled");
                    $("#t2reg19").attr("disabled", "disabled");
                break;
                
                case "Single Combination":
                    $("#t1fn19").removeAttr("disabled");
                    $("#t1reg19").removeAttr("disabled");
                    $("#ext19").removeAttr("disabled");    
                    $("#pmfn19").removeAttr("disabled");
                    $("#pmreg19").removeAttr("disabled");
                    $("#t2fn19").attr("disabled", "disabled");
                    $("#t2reg19").attr("disabled", "disabled");          
            break;
            
                case "B Double Combination":
                    

              	  $("#t1fn19").removeAttr("disabled");
                    $("#t2fn19").removeAttr("disabled");
                    $("#t1reg19").removeAttr("disabled");
                    $("#t2reg19").removeAttr("disabled");
                    $("#pmfn19").removeAttr("disabled");
                    $("#pmreg19").removeAttr("disabled");
                    $("#ext19").removeAttr("disabled");
                  
                    
                    break;
                    
                    
                case "Single Trailer":
                    $("#t1fn19").removeAttr("disabled");
                    $("#t1reg19").removeAttr("disabled");
                    $("#ext19").removeAttr("disabled");    
                    $("#pmfn19").attr("disabled", "disabled");
                    $("#pmreg19").attr("disabled", "disabled");
                    $("#t2fn19").attr("disabled", "disabled");
                    $("#t2reg19").attr("disabled", "disabled");
            break;
            
            
                case "B Double Trailer":
                    $("#t1fn19").removeAttr("disabled");
                    $("#t1reg19").removeAttr("disabled");
                    $("#ext19").removeAttr("disabled");    
                    $("#pmfn19").attr("disabled", "disabled");
                    $("#pmreg19").attr("disabled", "disabled");
                    $("#t2fn19").removeAttr("disabled");
                    $("#t2reg19").removeAttr("disabled");
            break;
            
                case "FORKLIFT":
                    $("#pmfn19").removeAttr("disabled");
                      $("#pmreg19").removeAttr("disabled");
                      $("#ext19").removeAttr("disabled");
                      $("#t1fn19").attr("disabled", "disabled");
                      $("#t1reg19").attr("disabled", "disabled");
                      $("#t2fn19").attr("disabled", "disabled");
                      $("#t2reg19").attr("disabled", "disabled");
                  break;
            
            
                
                case "VAN/UTE/CAR":
                      $("#pmfn19").removeAttr("disabled");
                      $("#pmreg19").removeAttr("disabled");
                      $("#ext19").removeAttr("disabled");
                        $("#t1fn19").attr("disabled", "disabled");
                        $("#t1reg19").attr("disabled", "disabled");
                        $("#t2fn19").attr("disabled", "disabled");
                        $("#t2reg19").attr("disabled", "disabled"); 
                break;
                
                case "Dolly Trailer":
                    $("#t1fn19").removeAttr("disabled");
                    $("#t1reg19").removeAttr("disabled");
                    $("#ext19").removeAttr("disabled");    
                    $("#pmfn19").attr("disabled", "disabled");
                    $("#pmreg19").attr("disabled", "disabled");
                    $("#t2fn19").attr("disabled", "disabled");
                    $("#t2reg19").attr("disabled", "disabled");
            break;
                case "Other 1":


            						$("#pmfn19").removeAttr("disabled");
            						$("#pmreg19").removeAttr("disabled");
            						$("#t1fn19").attr("disabled", "disabled");
                                    $("#t1reg19").attr("disabled", "disabled");
                                    $("#t2fn19").attr("disabled", "disabled");
                                    $("#t2reg19").attr("disabled", "disabled");
                                    $("#ext19").removeAttr("disabled");    
                                  
                                    
                                      
                                      break;
                                      
            					case "Other 2":
                

            						$("#pmfn19").removeAttr("disabled");
            						$("#pmreg19").removeAttr("disabled");
            						$("#t1fn19").removeAttr("disabled");
            						$("#t1reg19").removeAttr("disabled");
                                    $("#t2fn19").attr("disabled", "disabled");
                                    $("#t2reg19").attr("disabled", "disabled");
                                    $("#ext19").removeAttr("disabled");  
                
                  
                  break;
            					case "Other 3":
                

            						$("#pmfn19").removeAttr("disabled");
            						$("#pmreg19").removeAttr("disabled");
            						$("#t1fn19").removeAttr("disabled");
            						$("#t1reg19").removeAttr("disabled");
            						$("#t2fn19").removeAttr("disabled");
            						$("#t2reg19").removeAttr("disabled");
                                    $("#ext19").removeAttr("disabled");  
                
                  
                  break;
                 default:
                        $("#t1fn19").removeAttr("disabled");
                        $("#t2fn19").removeAttr("disabled");
                        $("#t1reg19").removeAttr("disabled");
                        $("#t2reg19").removeAttr("disabled");
                        $("#pmfn19").removeAttr("disabled");
                        $("#pmreg19").removeAttr("disabled");
                        $("#ext19").removeAttr("disabled");
                    break;
            } 
        	
            
            
            if(type == "Single Rigid"){
                $('#type19').html('<option value="">Type</option><option value="Box">Box</option><option value="Flat Top">Flat Top</option>');
                }
                if(type == "Bogie Rigid"){
                $('#type19').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Prime Mover"){
                $('#type19').html('<option value="">Type</option><option value="Day Cab">Day Cab</option><option value="Sleeper Cab">Sleeper Cab</option>');
                }
                if(type == "Single Combination"){
                $('#type19').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "B Double Combination"){
                $('#type19').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "Single Trailer"){
                $('#type19').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option>');
                }
                if(type == "B Double Trailer"){
                $('#type19').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "FORKLIFT"){
                $('#type19').html('<option value="">Type</option><option value="Small">Small</option><option value="Medium">Medium</option><option value="Large">Large</option>');
                }
                if(type == "VAN/UTE/CAR"){
                $('#type19').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Dolly Trailer"){
                $('#type19').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 1"){
                $('#type19').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 2"){
                $('#type19').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 3"){
                $('#type19').html('<option value="">Type</option><option value=" ">All</option>');
                }
            	}).trigger("change");     
	     	   
   	   
   	   //--------------------------------------20     	
   	   //--------------------------------------1     	
      	
   	   $('#sel20').on('change', function() {
                var type = document.getElementById("sel20").value;
            switch(type) {
                case "Single Rigid":
                      $("#pmfn20").removeAttr("disabled");
                      $("#pmreg20").removeAttr("disabled");
                      $("#ext20").removeAttr("disabled");
                      $("#t1fn20").attr("disabled", "disabled");
                      $("#t1reg20").attr("disabled", "disabled");
                      $("#t2fn20").attr("disabled", "disabled");
                      $("#t2reg20").attr("disabled", "disabled");
                        break;
                case "Bogie Rigid":
                   $("#pmfn20").removeAttr("disabled");
                   $("#pmreg20").removeAttr("disabled");
                   $("#ext20").removeAttr("disabled");
                   $("#t1fn20").attr("disabled", "disabled");
                   $("#t1reg20").attr("disabled", "disabled");
                   $("#t2fn20").attr("disabled", "disabled");
                   $("#t2reg20").attr("disabled", "disabled");
                     break;
                case "Prime Mover":
                  $("#pmfn20").removeAttr("disabled");
                    $("#pmreg20").removeAttr("disabled");
                    $("#ext20").removeAttr("disabled");
                    $("#t1fn20").attr("disabled", "disabled");
                    $("#t1reg20").attr("disabled", "disabled");
                    $("#t2fn20").attr("disabled", "disabled");
                    $("#t2reg20").attr("disabled", "disabled");
                break;
                
                case "Single Combination":
                    $("#t1fn20").removeAttr("disabled");
                    $("#t1reg20").removeAttr("disabled");
                    $("#ext20").removeAttr("disabled");    
                    $("#pmfn20").removeAttr("disabled");
                    $("#pmreg20").removeAttr("disabled");
                    $("#t2fn20").attr("disabled", "disabled");
                    $("#t2reg20").attr("disabled", "disabled");          
            break;
            
                case "B Double Combination":
                    

              	  $("#t1fn20").removeAttr("disabled");
                    $("#t2fn20").removeAttr("disabled");
                    $("#t1reg20").removeAttr("disabled");
                    $("#t2reg20").removeAttr("disabled");
                    $("#pmfn20").removeAttr("disabled");
                    $("#pmreg20").removeAttr("disabled");
                    $("#ext20").removeAttr("disabled");
                  
                    
                    break;
                    
                    
                case "Single Trailer":
                    $("#t1fn20").removeAttr("disabled");
                    $("#t1reg20").removeAttr("disabled");
                    $("#ext20").removeAttr("disabled");    
                    $("#pmfn20").attr("disabled", "disabled");
                    $("#pmreg20").attr("disabled", "disabled");
                    $("#t2fn20").attr("disabled", "disabled");
                    $("#t2reg20").attr("disabled", "disabled");
            break;
            
            
                case "B Double Trailer":
                    $("#t1fn20").removeAttr("disabled");
                    $("#t1reg20").removeAttr("disabled");
                    $("#ext20").removeAttr("disabled");    
                    $("#pmfn20").attr("disabled", "disabled");
                    $("#pmreg20").attr("disabled", "disabled");
                    $("#t2fn20").removeAttr("disabled");
                    $("#t2reg20").removeAttr("disabled");
            break;
            
                case "FORKLIFT":
                    $("#pmfn20").removeAttr("disabled");
                      $("#pmreg20").removeAttr("disabled");
                      $("#ext20").removeAttr("disabled");
                      $("#t1fn20").attr("disabled", "disabled");
                      $("#t1reg20").attr("disabled", "disabled");
                      $("#t2fn20").attr("disabled", "disabled");
                      $("#t2reg20").attr("disabled", "disabled");
                  break;
            
            
                
                case "VAN/UTE/CAR":
                      $("#pmfn20").removeAttr("disabled");
                      $("#pmreg20").removeAttr("disabled");
                      $("#ext20").removeAttr("disabled");
                        $("#t1fn20").attr("disabled", "disabled");
                        $("#t1reg20").attr("disabled", "disabled");
                        $("#t2fn20").attr("disabled", "disabled");
                        $("#t2reg20").attr("disabled", "disabled"); 
                break;
                
                case "Dolly Trailer":
                    $("#t1fn20").removeAttr("disabled");
                    $("#t1reg20").removeAttr("disabled");
                    $("#ext20").removeAttr("disabled");    
                    $("#pmfn20").attr("disabled", "disabled");
                    $("#pmreg20").attr("disabled", "disabled");
                    $("#t2fn20").attr("disabled", "disabled");
                    $("#t2reg20").attr("disabled", "disabled");
            break;
                case "Other 1":


            						$("#pmfn20").removeAttr("disabled");
            						$("#pmreg20").removeAttr("disabled");
            						$("#t1fn20").attr("disabled", "disabled");
                                    $("#t1reg20").attr("disabled", "disabled");
                                    $("#t2fn20").attr("disabled", "disabled");
                                    $("#t2reg20").attr("disabled", "disabled");
                                    $("#ext20").removeAttr("disabled");    
                                  
                                    
                                      
                                      break;
                                      
            					case "Other 2":
                

            						$("#pmfn20").removeAttr("disabled");
            						$("#pmreg20").removeAttr("disabled");
            						$("#t1fn20").removeAttr("disabled");
            						$("#t1reg20").removeAttr("disabled");
                                    $("#t2fn20").attr("disabled", "disabled");
                                    $("#t2reg20").attr("disabled", "disabled");
                                    $("#ext20").removeAttr("disabled");  
                
                  
                  break;
            					case "Other 3":
                

            						$("#pmfn20").removeAttr("disabled");
            						$("#pmreg20").removeAttr("disabled");
            						$("#t1fn20").removeAttr("disabled");
            						$("#t1reg20").removeAttr("disabled");
            						$("#t2fn20").removeAttr("disabled");
            						$("#t2reg20").removeAttr("disabled");
                                    $("#ext20").removeAttr("disabled");  
                
                  
                  break;
                 default:
                        $("#t1fn20").removeAttr("disabled");
                        $("#t2fn20").removeAttr("disabled");
                        $("#t1reg20").removeAttr("disabled");
                        $("#t2reg20").removeAttr("disabled");
                        $("#pmfn20").removeAttr("disabled");
                        $("#pmreg20").removeAttr("disabled");
                        $("#ext20").removeAttr("disabled");
                    break;
            } 
        	
            
            
            if(type == "Single Rigid"){
                $('#type20').html('<option value="">Type</option><option value="Box">Box</option><option value="Flat Top">Flat Top</option>');
                }
                if(type == "Bogie Rigid"){
                $('#type20').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Prime Mover"){
                $('#type20').html('<option value="">Type</option><option value="Day Cab">Day Cab</option><option value="Sleeper Cab">Sleeper Cab</option>');
                }
                if(type == "Single Combination"){
                $('#type20').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "B Double Combination"){
                $('#type20').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "Single Trailer"){
                $('#type20').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option>');
                }
                if(type == "B Double Trailer"){
                $('#type20').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "FORKLIFT"){
                $('#type20').html('<option value="">Type</option><option value="Small">Small</option><option value="Medium">Medium</option><option value="Large">Large</option>');
                }
                if(type == "VAN/UTE/CAR"){
                $('#type20').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Dolly Trailer"){
                $('#type20').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 1"){
                $('#type20').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 2"){
                $('#type20').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 3"){
                $('#type20').html('<option value="">Type</option><option value=" ">All</option>');
                }
            	}).trigger("change");
	   
   	   

   	   //--------------------------------------21     	
      	
   	   $('#sel21').on('change', function() {
                var type = document.getElementById("sel21").value;
            switch(type) {
                case "Single Rigid":
                      $("#pmfn21").removeAttr("disabled");
                      $("#pmreg21").removeAttr("disabled");
                      $("#ext21").removeAttr("disabled");
                      $("#t1fn21").attr("disabled", "disabled");
                      $("#t1reg21").attr("disabled", "disabled");
                      $("#t2fn21").attr("disabled", "disabled");
                      $("#t2reg21").attr("disabled", "disabled");
                        break;
                case "Bogie Rigid":
                   $("#pmfn21").removeAttr("disabled");
                   $("#pmreg21").removeAttr("disabled");
                   $("#ext21").removeAttr("disabled");
                   $("#t1fn21").attr("disabled", "disabled");
                   $("#t1reg21").attr("disabled", "disabled");
                   $("#t2fn21").attr("disabled", "disabled");
                   $("#t2reg21").attr("disabled", "disabled");
                     break;
                case "Prime Mover":
                  $("#pmfn21").removeAttr("disabled");
                    $("#pmreg21").removeAttr("disabled");
                    $("#ext21").removeAttr("disabled");
                    $("#t1fn21").attr("disabled", "disabled");
                    $("#t1reg21").attr("disabled", "disabled");
                    $("#t2fn21").attr("disabled", "disabled");
                    $("#t2reg21").attr("disabled", "disabled");
                break;
                
                case "Single Combination":
                    $("#t1fn21").removeAttr("disabled");
                    $("#t1reg21").removeAttr("disabled");
                    $("#ext21").removeAttr("disabled");    
                    $("#pmfn21").removeAttr("disabled");
                    $("#pmreg21").removeAttr("disabled");
                    $("#t2fn21").attr("disabled", "disabled");
                    $("#t2reg21").attr("disabled", "disabled");          
            break;
            
                case "B Double Combination":
                    

              	  $("#t1fn21").removeAttr("disabled");
                    $("#t2fn21").removeAttr("disabled");
                    $("#t1reg21").removeAttr("disabled");
                    $("#t2reg21").removeAttr("disabled");
                    $("#pmfn21").removeAttr("disabled");
                    $("#pmreg21").removeAttr("disabled");
                    $("#ext21").removeAttr("disabled");
                  
                    
                    break;
                    
                    
                case "Single Trailer":
                    $("#t1fn21").removeAttr("disabled");
                    $("#t1reg21").removeAttr("disabled");
                    $("#ext21").removeAttr("disabled");    
                    $("#pmfn21").attr("disabled", "disabled");
                    $("#pmreg21").attr("disabled", "disabled");
                    $("#t2fn21").attr("disabled", "disabled");
                    $("#t2reg21").attr("disabled", "disabled");
            break;
            
            
                case "B Double Trailer":
                    $("#t1fn21").removeAttr("disabled");
                    $("#t1reg21").removeAttr("disabled");
                    $("#ext21").removeAttr("disabled");    
                    $("#pmfn21").attr("disabled", "disabled");
                    $("#pmreg21").attr("disabled", "disabled");
                    $("#t2fn21").removeAttr("disabled");
                    $("#t2reg21").removeAttr("disabled");
            break;
            
                case "FORKLIFT":
                    $("#pmfn21").removeAttr("disabled");
                      $("#pmreg21").removeAttr("disabled");
                      $("#ext21").removeAttr("disabled");
                      $("#t1fn21").attr("disabled", "disabled");
                      $("#t1reg21").attr("disabled", "disabled");
                      $("#t2fn21").attr("disabled", "disabled");
                      $("#t2reg21").attr("disabled", "disabled");
                  break;
            
            
                
                case "VAN/UTE/CAR":
                      $("#pmfn21").removeAttr("disabled");
                      $("#pmreg21").removeAttr("disabled");
                      $("#ext21").removeAttr("disabled");
                        $("#t1fn21").attr("disabled", "disabled");
                        $("#t1reg21").attr("disabled", "disabled");
                        $("#t2fn21").attr("disabled", "disabled");
                        $("#t2reg21").attr("disabled", "disabled"); 
                break;
                
                case "Dolly Trailer":
                    $("#t1fn21").removeAttr("disabled");
                    $("#t1reg21").removeAttr("disabled");
                    $("#ext21").removeAttr("disabled");    
                    $("#pmfn21").attr("disabled", "disabled");
                    $("#pmreg21").attr("disabled", "disabled");
                    $("#t2fn21").attr("disabled", "disabled");
                    $("#t2reg21").attr("disabled", "disabled");
            break;
                case "Other 1":


            						$("#pmfn21").removeAttr("disabled");
            						$("#pmreg21").removeAttr("disabled");
            						$("#t1fn21").attr("disabled", "disabled");
                                    $("#t1reg21").attr("disabled", "disabled");
                                    $("#t2fn21").attr("disabled", "disabled");
                                    $("#t2reg21").attr("disabled", "disabled");
                                    $("#ext21").removeAttr("disabled");    
                                  
                                    
                                      
                                      break;
                                      
            					case "Other 2":
                

            						$("#pmfn21").removeAttr("disabled");
            						$("#pmreg21").removeAttr("disabled");
            						$("#t1fn21").removeAttr("disabled");
            						$("#t1reg21").removeAttr("disabled");
                                    $("#t2fn21").attr("disabled", "disabled");
                                    $("#t2reg21").attr("disabled", "disabled");
                                    $("#ext21").removeAttr("disabled");  
                
                  
                  break;
            					case "Other 3":
                

            						$("#pmfn21").removeAttr("disabled");
            						$("#pmreg21").removeAttr("disabled");
            						$("#t1fn21").removeAttr("disabled");
            						$("#t1reg21").removeAttr("disabled");
            						$("#t2fn21").removeAttr("disabled");
            						$("#t2reg21").removeAttr("disabled");
                                    $("#ext21").removeAttr("disabled");  
                
                  
                  break;
                 default:
                        $("#t1fn21").removeAttr("disabled");
                        $("#t2fn21").removeAttr("disabled");
                        $("#t1reg21").removeAttr("disabled");
                        $("#t2reg21").removeAttr("disabled");
                        $("#pmfn21").removeAttr("disabled");
                        $("#pmreg21").removeAttr("disabled");
                        $("#ext21").removeAttr("disabled");
                    break;
            } 
        	
            
            
            if(type == "Single Rigid"){
                $('#type21').html('<option value="">Type</option><option value="Box">Box</option><option value="Flat Top">Flat Top</option>');
                }
                if(type == "Bogie Rigid"){
                $('#type21').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Prime Mover"){
                $('#type21').html('<option value="">Type</option><option value="Day Cab">Day Cab</option><option value="Sleeper Cab">Sleeper Cab</option>');
                }
                if(type == "Single Combination"){
                $('#type21').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "B Double Combination"){
                $('#type21').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "Single Trailer"){
                $('#type21').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option>');
                }
                if(type == "B Double Trailer"){
                $('#type21').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "FORKLIFT"){
                $('#type21').html('<option value="">Type</option><option value="Small">Small</option><option value="Medium">Medium</option><option value="Large">Large</option>');
                }
                if(type == "VAN/UTE/CAR"){
                $('#type21').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Dolly Trailer"){
                $('#type21').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 1"){
                $('#type21').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 2"){
                $('#type21').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 3"){
                $('#type21').html('<option value="">Type</option><option value=" ">All</option>');
                }
            	}).trigger("change");
	   
	     	   
	   //--------------------------------------22     	
      	
   	   $('#sel22').on('change', function() {
                var type = document.getElementById("sel22").value;
            switch(type) {
                case "Single Rigid":
                      $("#pmfn22").removeAttr("disabled");
                      $("#pmreg22").removeAttr("disabled");
                      $("#ext22").removeAttr("disabled");
                      $("#t1fn22").attr("disabled", "disabled");
                      $("#t1reg22").attr("disabled", "disabled");
                      $("#t2fn22").attr("disabled", "disabled");
                      $("#t2reg22").attr("disabled", "disabled");
                        break;
                case "Bogie Rigid":
                   $("#pmfn22").removeAttr("disabled");
                   $("#pmreg22").removeAttr("disabled");
                   $("#ext22").removeAttr("disabled");
                   $("#t1fn22").attr("disabled", "disabled");
                   $("#t1reg22").attr("disabled", "disabled");
                   $("#t2fn22").attr("disabled", "disabled");
                   $("#t2reg22").attr("disabled", "disabled");
                     break;
                case "Prime Mover":
                  $("#pmfn22").removeAttr("disabled");
                    $("#pmreg22").removeAttr("disabled");
                    $("#ext22").removeAttr("disabled");
                    $("#t1fn22").attr("disabled", "disabled");
                    $("#t1reg22").attr("disabled", "disabled");
                    $("#t2fn22").attr("disabled", "disabled");
                    $("#t2reg22").attr("disabled", "disabled");
                break;
                
                case "Single Combination":
                    $("#t1fn22").removeAttr("disabled");
                    $("#t1reg22").removeAttr("disabled");
                    $("#ext22").removeAttr("disabled");    
                    $("#pmfn22").removeAttr("disabled");
                    $("#pmreg22").removeAttr("disabled");
                    $("#t2fn22").attr("disabled", "disabled");
                    $("#t2reg22").attr("disabled", "disabled");          
            break;
            
                case "B Double Combination":
                    

              	  $("#t1fn22").removeAttr("disabled");
                    $("#t2fn22").removeAttr("disabled");
                    $("#t1reg22").removeAttr("disabled");
                    $("#t2reg22").removeAttr("disabled");
                    $("#pmfn22").removeAttr("disabled");
                    $("#pmreg22").removeAttr("disabled");
                    $("#ext22").removeAttr("disabled");
                  
                    
                    break;
                    
                    
                case "Single Trailer":
                    $("#t1fn22").removeAttr("disabled");
                    $("#t1reg22").removeAttr("disabled");
                    $("#ext22").removeAttr("disabled");    
                    $("#pmfn22").attr("disabled", "disabled");
                    $("#pmreg22").attr("disabled", "disabled");
                    $("#t2fn22").attr("disabled", "disabled");
                    $("#t2reg22").attr("disabled", "disabled");
            break;
            
            
                case "B Double Trailer":
                    $("#t1fn22").removeAttr("disabled");
                    $("#t1reg22").removeAttr("disabled");
                    $("#ext22").removeAttr("disabled");    
                    $("#pmfn22").attr("disabled", "disabled");
                    $("#pmreg22").attr("disabled", "disabled");
                    $("#t2fn22").removeAttr("disabled");
                    $("#t2reg22").removeAttr("disabled");
            break;
            
                case "FORKLIFT":
                    $("#pmfn22").removeAttr("disabled");
                      $("#pmreg22").removeAttr("disabled");
                      $("#ext22").removeAttr("disabled");
                      $("#t1fn22").attr("disabled", "disabled");
                      $("#t1reg22").attr("disabled", "disabled");
                      $("#t2fn22").attr("disabled", "disabled");
                      $("#t2reg22").attr("disabled", "disabled");
                  break;
            
            
                
                case "VAN/UTE/CAR":
                      $("#pmfn22").removeAttr("disabled");
                      $("#pmreg22").removeAttr("disabled");
                      $("#ext22").removeAttr("disabled");
                        $("#t1fn22").attr("disabled", "disabled");
                        $("#t1reg22").attr("disabled", "disabled");
                        $("#t2fn22").attr("disabled", "disabled");
                        $("#t2reg22").attr("disabled", "disabled"); 
                break;
                
                case "Dolly Trailer":
                    $("#t1fn22").removeAttr("disabled");
                    $("#t1reg22").removeAttr("disabled");
                    $("#ext22").removeAttr("disabled");    
                    $("#pmfn22").attr("disabled", "disabled");
                    $("#pmreg22").attr("disabled", "disabled");
                    $("#t2fn22").attr("disabled", "disabled");
                    $("#t2reg22").attr("disabled", "disabled");
            break;
                case "Other 1":


            						$("#pmfn22").removeAttr("disabled");
            						$("#pmreg22").removeAttr("disabled");
            						$("#t1fn22").attr("disabled", "disabled");
                                    $("#t1reg22").attr("disabled", "disabled");
                                    $("#t2fn22").attr("disabled", "disabled");
                                    $("#t2reg22").attr("disabled", "disabled");
                                    $("#ext22").removeAttr("disabled");    
                                  
                                    
                                      
                                      break;
                                      
            					case "Other 2":
                

            						$("#pmfn22").removeAttr("disabled");
            						$("#pmreg22").removeAttr("disabled");
            						$("#t1fn22").removeAttr("disabled");
            						$("#t1reg22").removeAttr("disabled");
                                    $("#t2fn22").attr("disabled", "disabled");
                                    $("#t2reg22").attr("disabled", "disabled");
                                    $("#ext22").removeAttr("disabled");  
                
                  
                  break;
            					case "Other 3":
                

            						$("#pmfn22").removeAttr("disabled");
            						$("#pmreg22").removeAttr("disabled");
            						$("#t1fn22").removeAttr("disabled");
            						$("#t1reg22").removeAttr("disabled");
            						$("#t2fn22").removeAttr("disabled");
            						$("#t2reg22").removeAttr("disabled");
                                    $("#ext22").removeAttr("disabled");  
                
                  
                  break;
                 default:
                        $("#t1fn22").removeAttr("disabled");
                        $("#t2fn22").removeAttr("disabled");
                        $("#t1reg22").removeAttr("disabled");
                        $("#t2reg22").removeAttr("disabled");
                        $("#pmfn22").removeAttr("disabled");
                        $("#pmreg22").removeAttr("disabled");
                        $("#ext22").removeAttr("disabled");
                    break;
            } 
        	
            
            
            if(type == "Single Rigid"){
                $('#type22').html('<option value="">Type</option><option value="Box">Box</option><option value="Flat Top">Flat Top</option>');
                }
                if(type == "Bogie Rigid"){
                $('#type22').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Prime Mover"){
                $('#type22').html('<option value="">Type</option><option value="Day Cab">Day Cab</option><option value="Sleeper Cab">Sleeper Cab</option>');
                }
                if(type == "Single Combination"){
                $('#type22').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "B Double Combination"){
                $('#type22').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "Single Trailer"){
                $('#type22').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option>');
                }
                if(type == "B Double Trailer"){
                $('#type22').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "FORKLIFT"){
                $('#type22').html('<option value="">Type</option><option value="Small">Small</option><option value="Medium">Medium</option><option value="Large">Large</option>');
                }
                if(type == "VAN/UTE/CAR"){
                $('#type22').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Dolly Trailer"){
                $('#type22').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 1"){
                $('#type22').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 2"){
                $('#type22').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 3"){
                $('#type22').html('<option value="">Type</option><option value=" ">All</option>');
                }
            	}).trigger("change");     
	   
	   
	   
	   //--------------------------------------23     	
      	
   	   $('#sel23').on('change', function() {
                var type = document.getElementById("sel23").value;
            switch(type) {
                case "Single Rigid":
                      $("#pmfn23").removeAttr("disabled");
                      $("#pmreg23").removeAttr("disabled");
                      $("#ext23").removeAttr("disabled");
                      $("#t1fn23").attr("disabled", "disabled");
                      $("#t1reg23").attr("disabled", "disabled");
                      $("#t2fn23").attr("disabled", "disabled");
                      $("#t2reg23").attr("disabled", "disabled");
                        break;
                case "Bogie Rigid":
                   $("#pmfn23").removeAttr("disabled");
                   $("#pmreg23").removeAttr("disabled");
                   $("#ext23").removeAttr("disabled");
                   $("#t1fn23").attr("disabled", "disabled");
                   $("#t1reg23").attr("disabled", "disabled");
                   $("#t2fn23").attr("disabled", "disabled");
                   $("#t2reg23").attr("disabled", "disabled");
                     break;
                case "Prime Mover":
                  $("#pmfn23").removeAttr("disabled");
                    $("#pmreg23").removeAttr("disabled");
                    $("#ext23").removeAttr("disabled");
                    $("#t1fn23").attr("disabled", "disabled");
                    $("#t1reg23").attr("disabled", "disabled");
                    $("#t2fn23").attr("disabled", "disabled");
                    $("#t2reg23").attr("disabled", "disabled");
                break;
                
                case "Single Combination":
                    $("#t1fn23").removeAttr("disabled");
                    $("#t1reg23").removeAttr("disabled");
                    $("#ext23").removeAttr("disabled");    
                    $("#pmfn23").removeAttr("disabled");
                    $("#pmreg23").removeAttr("disabled");
                    $("#t2fn23").attr("disabled", "disabled");
                    $("#t2reg23").attr("disabled", "disabled");          
            break;
            
                case "B Double Combination":
                    

              	  $("#t1fn23").removeAttr("disabled");
                    $("#t2fn23").removeAttr("disabled");
                    $("#t1reg23").removeAttr("disabled");
                    $("#t2reg23").removeAttr("disabled");
                    $("#pmfn23").removeAttr("disabled");
                    $("#pmreg23").removeAttr("disabled");
                    $("#ext23").removeAttr("disabled");
                  
                    
                    break;
                    
                    
                case "Single Trailer":
                    $("#t1fn23").removeAttr("disabled");
                    $("#t1reg23").removeAttr("disabled");
                    $("#ext23").removeAttr("disabled");    
                    $("#pmfn23").attr("disabled", "disabled");
                    $("#pmreg23").attr("disabled", "disabled");
                    $("#t2fn23").attr("disabled", "disabled");
                    $("#t2reg23").attr("disabled", "disabled");
            break;
            
            
                case "B Double Trailer":
                    $("#t1fn23").removeAttr("disabled");
                    $("#t1reg23").removeAttr("disabled");
                    $("#ext23").removeAttr("disabled");    
                    $("#pmfn23").attr("disabled", "disabled");
                    $("#pmreg23").attr("disabled", "disabled");
                    $("#t2fn23").removeAttr("disabled");
                    $("#t2reg23").removeAttr("disabled");
            break;
            
                case "FORKLIFT":
                    $("#pmfn23").removeAttr("disabled");
                      $("#pmreg23").removeAttr("disabled");
                      $("#ext23").removeAttr("disabled");
                      $("#t1fn23").attr("disabled", "disabled");
                      $("#t1reg23").attr("disabled", "disabled");
                      $("#t2fn23").attr("disabled", "disabled");
                      $("#t2reg23").attr("disabled", "disabled");
                  break;
            
            
                
                case "VAN/UTE/CAR":
                      $("#pmfn23").removeAttr("disabled");
                      $("#pmreg23").removeAttr("disabled");
                      $("#ext23").removeAttr("disabled");
                        $("#t1fn23").attr("disabled", "disabled");
                        $("#t1reg23").attr("disabled", "disabled");
                        $("#t2fn23").attr("disabled", "disabled");
                        $("#t2reg23").attr("disabled", "disabled"); 
                break;
                
                case "Dolly Trailer":
                    $("#t1fn23").removeAttr("disabled");
                    $("#t1reg23").removeAttr("disabled");
                    $("#ext23").removeAttr("disabled");    
                    $("#pmfn23").attr("disabled", "disabled");
                    $("#pmreg23").attr("disabled", "disabled");
                    $("#t2fn23").attr("disabled", "disabled");
                    $("#t2reg23").attr("disabled", "disabled");
            break;
                case "Other 1":


            						$("#pmfn23").removeAttr("disabled");
            						$("#pmreg23").removeAttr("disabled");
            						$("#t1fn23").attr("disabled", "disabled");
                                    $("#t1reg23").attr("disabled", "disabled");
                                    $("#t2fn23").attr("disabled", "disabled");
                                    $("#t2reg23").attr("disabled", "disabled");
                                    $("#ext23").removeAttr("disabled");    
                                  
                                    
                                      
                                      break;
                                      
            					case "Other 2":
                

            						$("#pmfn23").removeAttr("disabled");
            						$("#pmreg23").removeAttr("disabled");
            						$("#t1fn23").removeAttr("disabled");
            						$("#t1reg23").removeAttr("disabled");
                                    $("#t2fn23").attr("disabled", "disabled");
                                    $("#t2reg23").attr("disabled", "disabled");
                                    $("#ext23").removeAttr("disabled");  
                
                  
                  break;
            					case "Other 3":
                

            						$("#pmfn23").removeAttr("disabled");
            						$("#pmreg23").removeAttr("disabled");
            						$("#t1fn23").removeAttr("disabled");
            						$("#t1reg23").removeAttr("disabled");
            						$("#t2fn23").removeAttr("disabled");
            						$("#t2reg23").removeAttr("disabled");
                                    $("#ext23").removeAttr("disabled");  
                
                  
                  break;
                 default:
                        $("#t1fn23").removeAttr("disabled");
                        $("#t2fn23").removeAttr("disabled");
                        $("#t1reg23").removeAttr("disabled");
                        $("#t2reg23").removeAttr("disabled");
                        $("#pmfn23").removeAttr("disabled");
                        $("#pmreg23").removeAttr("disabled");
                        $("#ext23").removeAttr("disabled");
                    break;
            } 
        	
            
            if(type == "Single Rigid"){
                $('#type23').html('<option value="">Type</option><option value="Box">Box</option><option value="Flat Top">Flat Top</option>');
                }
                if(type == "Bogie Rigid"){
                $('#type23').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Prime Mover"){
                $('#type23').html('<option value="">Type</option><option value="Day Cab">Day Cab</option><option value="Sleeper Cab">Sleeper Cab</option>');
                }
                if(type == "Single Combination"){
                $('#type23').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "B Double Combination"){
                $('#type23').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "Single Trailer"){
                $('#type23').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option>');
                }
                if(type == "B Double Trailer"){
                $('#type23').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "FORKLIFT"){
                $('#type23').html('<option value="">Type</option><option value="Small">Small</option><option value="Medium">Medium</option><option value="Large">Large</option>');
                }
                if(type == "VAN/UTE/CAR"){
                $('#type23').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Dolly Trailer"){
                $('#type23').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 1"){
                $('#type23').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 2"){
                $('#type23').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 3"){
                $('#type23').html('<option value="">Type</option><option value=" ">All</option>');
                }
            	}).trigger("change");
	   
	   
	   //--------------------------------------24     	
      	
   	   $('#sel24').on('change', function() {
                var type = document.getElementById("sel24").value;
            switch(type) {
                case "Single Rigid":
                      $("#pmfn24").removeAttr("disabled");
                      $("#pmreg24").removeAttr("disabled");
                      $("#ext24").removeAttr("disabled");
                      $("#t1fn24").attr("disabled", "disabled");
                      $("#t1reg24").attr("disabled", "disabled");
                      $("#t2fn24").attr("disabled", "disabled");
                      $("#t2reg24").attr("disabled", "disabled");
                        break;
                case "Bogie Rigid":
                   $("#pmfn24").removeAttr("disabled");
                   $("#pmreg24").removeAttr("disabled");
                   $("#ext24").removeAttr("disabled");
                   $("#t1fn24").attr("disabled", "disabled");
                   $("#t1reg24").attr("disabled", "disabled");
                   $("#t2fn24").attr("disabled", "disabled");
                   $("#t2reg24").attr("disabled", "disabled");
                     break;
                case "Prime Mover":
                  $("#pmfn24").removeAttr("disabled");
                    $("#pmreg24").removeAttr("disabled");
                    $("#ext24").removeAttr("disabled");
                    $("#t1fn24").attr("disabled", "disabled");
                    $("#t1reg24").attr("disabled", "disabled");
                    $("#t2fn24").attr("disabled", "disabled");
                    $("#t2reg24").attr("disabled", "disabled");
                break;
                
                case "Single Combination":
                    $("#t1fn24").removeAttr("disabled");
                    $("#t1reg24").removeAttr("disabled");
                    $("#ext24").removeAttr("disabled");    
                    $("#pmfn24").removeAttr("disabled");
                    $("#pmreg24").removeAttr("disabled");
                    $("#t2fn24").attr("disabled", "disabled");
                    $("#t2reg24").attr("disabled", "disabled");          
            break;
            
                case "B Double Combination":
                    

              	  $("#t1fn24").removeAttr("disabled");
                    $("#t2fn24").removeAttr("disabled");
                    $("#t1reg24").removeAttr("disabled");
                    $("#t2reg24").removeAttr("disabled");
                    $("#pmfn24").removeAttr("disabled");
                    $("#pmreg24").removeAttr("disabled");
                    $("#ext24").removeAttr("disabled");
                  
                    
                    break;
                    
                    
                case "Single Trailer":
                    $("#t1fn24").removeAttr("disabled");
                    $("#t1reg24").removeAttr("disabled");
                    $("#ext24").removeAttr("disabled");    
                    $("#pmfn24").attr("disabled", "disabled");
                    $("#pmreg24").attr("disabled", "disabled");
                    $("#t2fn24").attr("disabled", "disabled");
                    $("#t2reg24").attr("disabled", "disabled");
            break;
            
            
                case "B Double Trailer":
                    $("#t1fn24").removeAttr("disabled");
                    $("#t1reg24").removeAttr("disabled");
                    $("#ext24").removeAttr("disabled");    
                    $("#pmfn24").attr("disabled", "disabled");
                    $("#pmreg24").attr("disabled", "disabled");
                    $("#t2fn24").removeAttr("disabled");
                    $("#t2reg24").removeAttr("disabled");
            break;
            
                case "FORKLIFT":
                    $("#pmfn24").removeAttr("disabled");
                      $("#pmreg24").removeAttr("disabled");
                      $("#ext24").removeAttr("disabled");
                      $("#t1fn24").attr("disabled", "disabled");
                      $("#t1reg24").attr("disabled", "disabled");
                      $("#t2fn24").attr("disabled", "disabled");
                      $("#t2reg24").attr("disabled", "disabled");
                  break;
            
            
                
                case "VAN/UTE/CAR":
                      $("#pmfn24").removeAttr("disabled");
                      $("#pmreg24").removeAttr("disabled");
                      $("#ext24").removeAttr("disabled");
                        $("#t1fn24").attr("disabled", "disabled");
                        $("#t1reg24").attr("disabled", "disabled");
                        $("#t2fn24").attr("disabled", "disabled");
                        $("#t2reg24").attr("disabled", "disabled"); 
                break;
                
                case "Dolly Trailer":
                    $("#t1fn24").removeAttr("disabled");
                    $("#t1reg24").removeAttr("disabled");
                    $("#ext24").removeAttr("disabled");    
                    $("#pmfn24").attr("disabled", "disabled");
                    $("#pmreg24").attr("disabled", "disabled");
                    $("#t2fn24").attr("disabled", "disabled");
                    $("#t2reg24").attr("disabled", "disabled");
            break;
                case "Other 1":


            						$("#pmfn24").removeAttr("disabled");
            						$("#pmreg24").removeAttr("disabled");
            						$("#t1fn24").attr("disabled", "disabled");
                                    $("#t1reg24").attr("disabled", "disabled");
                                    $("#t2fn24").attr("disabled", "disabled");
                                    $("#t2reg24").attr("disabled", "disabled");
                                    $("#ext24").removeAttr("disabled");    
                                  
                                    
                                      
                                      break;
                                      
            					case "Other 2":
                

            						$("#pmfn24").removeAttr("disabled");
            						$("#pmreg24").removeAttr("disabled");
            						$("#t1fn24").removeAttr("disabled");
            						$("#t1reg24").removeAttr("disabled");
                                    $("#t2fn24").attr("disabled", "disabled");
                                    $("#t2reg24").attr("disabled", "disabled");
                                    $("#ext24").removeAttr("disabled");  
                
                  
                  break;
            					case "Other 3":
                

            						$("#pmfn24").removeAttr("disabled");
            						$("#pmreg24").removeAttr("disabled");
            						$("#t1fn24").removeAttr("disabled");
            						$("#t1reg24").removeAttr("disabled");
            						$("#t2fn24").removeAttr("disabled");
            						$("#t2reg24").removeAttr("disabled");
                                    $("#ext24").removeAttr("disabled");  
                
                  
                  break;
                 default:
                        $("#t1fn24").removeAttr("disabled");
                        $("#t2fn24").removeAttr("disabled");
                        $("#t1reg24").removeAttr("disabled");
                        $("#t2reg24").removeAttr("disabled");
                        $("#pmfn24").removeAttr("disabled");
                        $("#pmreg24").removeAttr("disabled");
                        $("#ext24").removeAttr("disabled");
                    break;
            } 
        	
            
            
            if(type == "Single Rigid"){
                $('#type24').html('<option value="">Type</option><option value="Box">Box</option><option value="Flat Top">Flat Top</option>');
                }
                if(type == "Bogie Rigid"){
                $('#type24').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Prime Mover"){
                $('#type24').html('<option value="">Type</option><option value="Day Cab">Day Cab</option><option value="Sleeper Cab">Sleeper Cab</option>');
                }
                if(type == "Single Combination"){
                $('#type24').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "B Double Combination"){
                $('#type24').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "Single Trailer"){
                $('#type24').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option>');
                }
                if(type == "B Double Trailer"){
                $('#type24').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "FORKLIFT"){
                $('#type24').html('<option value="">Type</option><option value="Small">Small</option><option value="Medium">Medium</option><option value="Large">Large</option>');
                }
                if(type == "VAN/UTE/CAR"){
                $('#type24').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Dolly Trailer"){
                $('#type24').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 1"){
                $('#type24').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 2"){
                $('#type24').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 3"){
                $('#type24').html('<option value="">Type</option><option value=" ">All</option>');
                }
            	}).trigger("change");
	   
	   
	   //--------------------------------------25     	
      	
	   //--------------------------------------1     	
      	
   	   $('#sel25').on('change', function() {
                var type = document.getElementById("sel25").value;
            switch(type) {
                case "Single Rigid":
                      $("#pmfn25").removeAttr("disabled");
                      $("#pmreg25").removeAttr("disabled");
                      $("#ext25").removeAttr("disabled");
                      $("#t1fn25").attr("disabled", "disabled");
                      $("#t1reg25").attr("disabled", "disabled");
                      $("#t2fn25").attr("disabled", "disabled");
                      $("#t2reg25").attr("disabled", "disabled");
                        break;
                case "Bogie Rigid":
                   $("#pmfn25").removeAttr("disabled");
                   $("#pmreg25").removeAttr("disabled");
                   $("#ext25").removeAttr("disabled");
                   $("#t1fn25").attr("disabled", "disabled");
                   $("#t1reg25").attr("disabled", "disabled");
                   $("#t2fn25").attr("disabled", "disabled");
                   $("#t2reg25").attr("disabled", "disabled");
                     break;
                case "Prime Mover":
                  $("#pmfn25").removeAttr("disabled");
                    $("#pmreg25").removeAttr("disabled");
                    $("#ext25").removeAttr("disabled");
                    $("#t1fn25").attr("disabled", "disabled");
                    $("#t1reg25").attr("disabled", "disabled");
                    $("#t2fn25").attr("disabled", "disabled");
                    $("#t2reg25").attr("disabled", "disabled");
                break;
                
                case "Single Combination":
                    $("#t1fn25").removeAttr("disabled");
                    $("#t1reg25").removeAttr("disabled");
                    $("#ext25").removeAttr("disabled");    
                    $("#pmfn25").removeAttr("disabled");
                    $("#pmreg25").removeAttr("disabled");
                    $("#t2fn25").attr("disabled", "disabled");
                    $("#t2reg25").attr("disabled", "disabled");          
            break;
            
                case "B Double Combination":
                    

              	  $("#t1fn25").removeAttr("disabled");
                    $("#t2fn25").removeAttr("disabled");
                    $("#t1reg25").removeAttr("disabled");
                    $("#t2reg25").removeAttr("disabled");
                    $("#pmfn25").removeAttr("disabled");
                    $("#pmreg25").removeAttr("disabled");
                    $("#ext25").removeAttr("disabled");
                  
                    
                    break;
                    
                    
                case "Single Trailer":
                    $("#t1fn25").removeAttr("disabled");
                    $("#t1reg25").removeAttr("disabled");
                    $("#ext25").removeAttr("disabled");    
                    $("#pmfn25").attr("disabled", "disabled");
                    $("#pmreg25").attr("disabled", "disabled");
                    $("#t2fn25").attr("disabled", "disabled");
                    $("#t2reg25").attr("disabled", "disabled");
            break;
            
            
                case "B Double Trailer":
                    $("#t1fn25").removeAttr("disabled");
                    $("#t1reg25").removeAttr("disabled");
                    $("#ext25").removeAttr("disabled");    
                    $("#pmfn25").attr("disabled", "disabled");
                    $("#pmreg25").attr("disabled", "disabled");
                    $("#t2fn25").removeAttr("disabled");
                    $("#t2reg25").removeAttr("disabled");
            break;
            
                case "FORKLIFT":
                    $("#pmfn25").removeAttr("disabled");
                      $("#pmreg25").removeAttr("disabled");
                      $("#ext25").removeAttr("disabled");
                      $("#t1fn25").attr("disabled", "disabled");
                      $("#t1reg25").attr("disabled", "disabled");
                      $("#t2fn25").attr("disabled", "disabled");
                      $("#t2reg25").attr("disabled", "disabled");
                  break;
            
            
                
                case "VAN/UTE/CAR":
                      $("#pmfn25").removeAttr("disabled");
                      $("#pmreg25").removeAttr("disabled");
                      $("#ext25").removeAttr("disabled");
                        $("#t1fn25").attr("disabled", "disabled");
                        $("#t1reg25").attr("disabled", "disabled");
                        $("#t2fn25").attr("disabled", "disabled");
                        $("#t2reg25").attr("disabled", "disabled"); 
                break;
                
                case "Dolly Trailer":
                    $("#t1fn25").removeAttr("disabled");
                    $("#t1reg25").removeAttr("disabled");
                    $("#ext25").removeAttr("disabled");    
                    $("#pmfn25").attr("disabled", "disabled");
                    $("#pmreg25").attr("disabled", "disabled");
                    $("#t2fn25").attr("disabled", "disabled");
                    $("#t2reg25").attr("disabled", "disabled");
            break;
                case "Other 1":


            						$("#pmfn25").removeAttr("disabled");
            						$("#pmreg25").removeAttr("disabled");
            						$("#t1fn25").attr("disabled", "disabled");
                                    $("#t1reg25").attr("disabled", "disabled");
                                    $("#t2fn25").attr("disabled", "disabled");
                                    $("#t2reg25").attr("disabled", "disabled");
                                    $("#ext25").removeAttr("disabled");    
                                  
                                    
                                      
                                      break;
                                      
            					case "Other 2":
                

            						$("#pmfn25").removeAttr("disabled");
            						$("#pmreg25").removeAttr("disabled");
            						$("#t1fn25").removeAttr("disabled");
            						$("#t1reg25").removeAttr("disabled");
                                    $("#t2fn25").attr("disabled", "disabled");
                                    $("#t2reg25").attr("disabled", "disabled");
                                    $("#ext25").removeAttr("disabled");  
                
                  
                  break;
            					case "Other 3":
                

            						$("#pmfn25").removeAttr("disabled");
            						$("#pmreg25").removeAttr("disabled");
            						$("#t1fn25").removeAttr("disabled");
            						$("#t1reg25").removeAttr("disabled");
            						$("#t2fn25").removeAttr("disabled");
            						$("#t2reg25").removeAttr("disabled");
                                    $("#ext25").removeAttr("disabled");  
                
                  
                  break;
                 default:
                        $("#t1fn25").removeAttr("disabled");
                        $("#t2fn25").removeAttr("disabled");
                        $("#t1reg25").removeAttr("disabled");
                        $("#t2reg25").removeAttr("disabled");
                        $("#pmfn25").removeAttr("disabled");
                        $("#pmreg25").removeAttr("disabled");
                        $("#ext25").removeAttr("disabled");
                    break;
            } 
        	
            
            
            if(type == "Single Rigid"){
                $('#type25').html('<option value="">Type</option><option value="Box">Box</option><option value="Flat Top">Flat Top</option>');
                }
                if(type == "Bogie Rigid"){
                $('#type25').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Prime Mover"){
                $('#type25').html('<option value="">Type</option><option value="Day Cab">Day Cab</option><option value="Sleeper Cab">Sleeper Cab</option>');
                }
                if(type == "Single Combination"){
                $('#type25').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "B Double Combination"){
                $('#type25').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "Single Trailer"){
                $('#type25').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option>');
                }
                if(type == "B Double Trailer"){
                $('#type25').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "FORKLIFT"){
                $('#type25').html('<option value="">Type</option><option value="Small">Small</option><option value="Medium">Medium</option><option value="Large">Large</option>');
                }
                if(type == "VAN/UTE/CAR"){
                $('#type25').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Dolly Trailer"){
                $('#type25').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 1"){
                $('#type25').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 2"){
                $('#type25').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 3"){
                $('#type25').html('<option value="">Type</option><option value=" ">All</option>');
                }
            	}).trigger("change");
	   
	   
	   //--------------------------------------26     	
      	
   	   $('#sel26').on('change', function() {
                var type = document.getElementById("sel26").value;
            switch(type) {
                case "Single Rigid":
                      $("#pmfn26").removeAttr("disabled");
                      $("#pmreg26").removeAttr("disabled");
                      $("#ext26").removeAttr("disabled");
                      $("#t1fn26").attr("disabled", "disabled");
                      $("#t1reg26").attr("disabled", "disabled");
                      $("#t2fn26").attr("disabled", "disabled");
                      $("#t2reg26").attr("disabled", "disabled");
                        break;
                case "Bogie Rigid":
                   $("#pmfn26").removeAttr("disabled");
                   $("#pmreg26").removeAttr("disabled");
                   $("#ext26").removeAttr("disabled");
                   $("#t1fn26").attr("disabled", "disabled");
                   $("#t1reg26").attr("disabled", "disabled");
                   $("#t2fn26").attr("disabled", "disabled");
                   $("#t2reg26").attr("disabled", "disabled");
                     break;
                case "Prime Mover":
                  $("#pmfn26").removeAttr("disabled");
                    $("#pmreg26").removeAttr("disabled");
                    $("#ext26").removeAttr("disabled");
                    $("#t1fn26").attr("disabled", "disabled");
                    $("#t1reg26").attr("disabled", "disabled");
                    $("#t2fn26").attr("disabled", "disabled");
                    $("#t2reg26").attr("disabled", "disabled");
                break;
                
                case "Single Combination":
                    $("#t1fn26").removeAttr("disabled");
                    $("#t1reg26").removeAttr("disabled");
                    $("#ext26").removeAttr("disabled");    
                    $("#pmfn26").removeAttr("disabled");
                    $("#pmreg26").removeAttr("disabled");
                    $("#t2fn26").attr("disabled", "disabled");
                    $("#t2reg26").attr("disabled", "disabled");          
            break;
            
                case "B Double Combination":
                    

              	  $("#t1fn26").removeAttr("disabled");
                    $("#t2fn26").removeAttr("disabled");
                    $("#t1reg26").removeAttr("disabled");
                    $("#t2reg26").removeAttr("disabled");
                    $("#pmfn26").removeAttr("disabled");
                    $("#pmreg26").removeAttr("disabled");
                    $("#ext26").removeAttr("disabled");
                  
                    
                    break;
                    
                    
                case "Single Trailer":
                    $("#t1fn26").removeAttr("disabled");
                    $("#t1reg26").removeAttr("disabled");
                    $("#ext26").removeAttr("disabled");    
                    $("#pmfn26").attr("disabled", "disabled");
                    $("#pmreg26").attr("disabled", "disabled");
                    $("#t2fn26").attr("disabled", "disabled");
                    $("#t2reg26").attr("disabled", "disabled");
            break;
            
            
                case "B Double Trailer":
                    $("#t1fn26").removeAttr("disabled");
                    $("#t1reg26").removeAttr("disabled");
                    $("#ext26").removeAttr("disabled");    
                    $("#pmfn26").attr("disabled", "disabled");
                    $("#pmreg26").attr("disabled", "disabled");
                    $("#t2fn26").removeAttr("disabled");
                    $("#t2reg26").removeAttr("disabled");
            break;
            
                case "FORKLIFT":
                    $("#pmfn26").removeAttr("disabled");
                      $("#pmreg26").removeAttr("disabled");
                      $("#ext26").removeAttr("disabled");
                      $("#t1fn26").attr("disabled", "disabled");
                      $("#t1reg26").attr("disabled", "disabled");
                      $("#t2fn26").attr("disabled", "disabled");
                      $("#t2reg26").attr("disabled", "disabled");
                  break;
            
            
                
                case "VAN/UTE/CAR":
                      $("#pmfn26").removeAttr("disabled");
                      $("#pmreg26").removeAttr("disabled");
                      $("#ext26").removeAttr("disabled");
                        $("#t1fn26").attr("disabled", "disabled");
                        $("#t1reg26").attr("disabled", "disabled");
                        $("#t2fn26").attr("disabled", "disabled");
                        $("#t2reg26").attr("disabled", "disabled"); 
                break;
                
                case "Dolly Trailer":
                    $("#t1fn26").removeAttr("disabled");
                    $("#t1reg26").removeAttr("disabled");
                    $("#ext26").removeAttr("disabled");    
                    $("#pmfn26").attr("disabled", "disabled");
                    $("#pmreg26").attr("disabled", "disabled");
                    $("#t2fn26").attr("disabled", "disabled");
                    $("#t2reg26").attr("disabled", "disabled");
            break;
                case "Other 1":


            						$("#pmfn26").removeAttr("disabled");
            						$("#pmreg26").removeAttr("disabled");
            						$("#t1fn26").attr("disabled", "disabled");
                                    $("#t1reg26").attr("disabled", "disabled");
                                    $("#t2fn26").attr("disabled", "disabled");
                                    $("#t2reg26").attr("disabled", "disabled");
                                    $("#ext26").removeAttr("disabled");    
                                  
                                    
                                      
                                      break;
                                      
            					case "Other 2":
                

            						$("#pmfn26").removeAttr("disabled");
            						$("#pmreg26").removeAttr("disabled");
            						$("#t1fn26").removeAttr("disabled");
            						$("#t1reg26").removeAttr("disabled");
                                    $("#t2fn26").attr("disabled", "disabled");
                                    $("#t2reg26").attr("disabled", "disabled");
                                    $("#ext26").removeAttr("disabled");  
                
                  
                  break;
            					case "Other 3":
                

            						$("#pmfn26").removeAttr("disabled");
            						$("#pmreg26").removeAttr("disabled");
            						$("#t1fn26").removeAttr("disabled");
            						$("#t1reg26").removeAttr("disabled");
            						$("#t2fn26").removeAttr("disabled");
            						$("#t2reg26").removeAttr("disabled");
                                    $("#ext26").removeAttr("disabled");  
                
                  
                  break;
                 default:
                        $("#t1fn26").removeAttr("disabled");
                        $("#t2fn26").removeAttr("disabled");
                        $("#t1reg26").removeAttr("disabled");
                        $("#t2reg26").removeAttr("disabled");
                        $("#pmfn26").removeAttr("disabled");
                        $("#pmreg26").removeAttr("disabled");
                        $("#ext26").removeAttr("disabled");
                    break;
            } 
        	
            
            if(type == "Single Rigid"){
                $('#type26').html('<option value="">Type</option><option value="Box">Box</option><option value="Flat Top">Flat Top</option>');
                }
                if(type == "Bogie Rigid"){
                $('#type26').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Prime Mover"){
                $('#type26').html('<option value="">Type</option><option value="Day Cab">Day Cab</option><option value="Sleeper Cab">Sleeper Cab</option>');
                }
                if(type == "Single Combination"){
                $('#type26').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "B Double Combination"){
                $('#type26').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "Single Trailer"){
                $('#type26').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option>');
                }
                if(type == "B Double Trailer"){
                $('#type26').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "FORKLIFT"){
                $('#type26').html('<option value="">Type</option><option value="Small">Small</option><option value="Medium">Medium</option><option value="Large">Large</option>');
                }
                if(type == "VAN/UTE/CAR"){
                $('#type26').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Dolly Trailer"){
                $('#type26').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 1"){
                $('#type26').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 2"){
                $('#type26').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 3"){
                $('#type26').html('<option value="">Type</option><option value=" ">All</option>');
                }
            	}).trigger("change");   
	   
	   
	   
	   	    
	   //--------------------------------------27     	
      	
   	   $('#sel27').on('change', function() {
                var type = document.getElementById("sel27").value;
            switch(type) {
                case "Single Rigid":
                      $("#pmfn27").removeAttr("disabled");
                      $("#pmreg27").removeAttr("disabled");
                      $("#ext27").removeAttr("disabled");
                      $("#t1fn27").attr("disabled", "disabled");
                      $("#t1reg27").attr("disabled", "disabled");
                      $("#t2fn27").attr("disabled", "disabled");
                      $("#t2reg27").attr("disabled", "disabled");
                        break;
                case "Bogie Rigid":
                   $("#pmfn27").removeAttr("disabled");
                   $("#pmreg27").removeAttr("disabled");
                   $("#ext27").removeAttr("disabled");
                   $("#t1fn27").attr("disabled", "disabled");
                   $("#t1reg27").attr("disabled", "disabled");
                   $("#t2fn27").attr("disabled", "disabled");
                   $("#t2reg27").attr("disabled", "disabled");
                     break;
                case "Prime Mover":
                  $("#pmfn27").removeAttr("disabled");
                    $("#pmreg27").removeAttr("disabled");
                    $("#ext27").removeAttr("disabled");
                    $("#t1fn27").attr("disabled", "disabled");
                    $("#t1reg27").attr("disabled", "disabled");
                    $("#t2fn27").attr("disabled", "disabled");
                    $("#t2reg27").attr("disabled", "disabled");
                break;
                
                case "Single Combination":
                    $("#t1fn27").removeAttr("disabled");
                    $("#t1reg27").removeAttr("disabled");
                    $("#ext27").removeAttr("disabled");    
                    $("#pmfn27").removeAttr("disabled");
                    $("#pmreg27").removeAttr("disabled");
                    $("#t2fn27").attr("disabled", "disabled");
                    $("#t2reg27").attr("disabled", "disabled");          
            break;
            
                case "B Double Combination":
                    

              	  $("#t1fn27").removeAttr("disabled");
                    $("#t2fn27").removeAttr("disabled");
                    $("#t1reg27").removeAttr("disabled");
                    $("#t2reg27").removeAttr("disabled");
                    $("#pmfn27").removeAttr("disabled");
                    $("#pmreg27").removeAttr("disabled");
                    $("#ext27").removeAttr("disabled");
                  
                    
                    break;
                    
                    
                case "Single Trailer":
                    $("#t1fn27").removeAttr("disabled");
                    $("#t1reg27").removeAttr("disabled");
                    $("#ext27").removeAttr("disabled");    
                    $("#pmfn27").attr("disabled", "disabled");
                    $("#pmreg27").attr("disabled", "disabled");
                    $("#t2fn27").attr("disabled", "disabled");
                    $("#t2reg27").attr("disabled", "disabled");
            break;
            
            
                case "B Double Trailer":
                    $("#t1fn27").removeAttr("disabled");
                    $("#t1reg27").removeAttr("disabled");
                    $("#ext27").removeAttr("disabled");    
                    $("#pmfn27").attr("disabled", "disabled");
                    $("#pmreg27").attr("disabled", "disabled");
                    $("#t2fn27").removeAttr("disabled");
                    $("#t2reg27").removeAttr("disabled");
            break;
            
                case "FORKLIFT":
                    $("#pmfn27").removeAttr("disabled");
                      $("#pmreg27").removeAttr("disabled");
                      $("#ext27").removeAttr("disabled");
                      $("#t1fn27").attr("disabled", "disabled");
                      $("#t1reg27").attr("disabled", "disabled");
                      $("#t2fn27").attr("disabled", "disabled");
                      $("#t2reg27").attr("disabled", "disabled");
                  break;
            
            
                
                case "VAN/UTE/CAR":
                      $("#pmfn27").removeAttr("disabled");
                      $("#pmreg27").removeAttr("disabled");
                      $("#ext27").removeAttr("disabled");
                        $("#t1fn27").attr("disabled", "disabled");
                        $("#t1reg27").attr("disabled", "disabled");
                        $("#t2fn27").attr("disabled", "disabled");
                        $("#t2reg27").attr("disabled", "disabled"); 
                break;
                
                case "Dolly Trailer":
                    $("#t1fn27").removeAttr("disabled");
                    $("#t1reg27").removeAttr("disabled");
                    $("#ext27").removeAttr("disabled");    
                    $("#pmfn27").attr("disabled", "disabled");
                    $("#pmreg27").attr("disabled", "disabled");
                    $("#t2fn27").attr("disabled", "disabled");
                    $("#t2reg27").attr("disabled", "disabled");
            break;
                case "Other 1":


            						$("#pmfn27").removeAttr("disabled");
            						$("#pmreg27").removeAttr("disabled");
            						$("#t1fn27").attr("disabled", "disabled");
                                    $("#t1reg27").attr("disabled", "disabled");
                                    $("#t2fn27").attr("disabled", "disabled");
                                    $("#t2reg27").attr("disabled", "disabled");
                                    $("#ext27").removeAttr("disabled");    
                                  
                                    
                                      
                                      break;
                                      
            					case "Other 2":
                

            						$("#pmfn27").removeAttr("disabled");
            						$("#pmreg27").removeAttr("disabled");
            						$("#t1fn27").removeAttr("disabled");
            						$("#t1reg27").removeAttr("disabled");
                                    $("#t2fn27").attr("disabled", "disabled");
                                    $("#t2reg27").attr("disabled", "disabled");
                                    $("#ext27").removeAttr("disabled");  
                
                  
                  break;
            					case "Other 3":
                

            						$("#pmfn27").removeAttr("disabled");
            						$("#pmreg27").removeAttr("disabled");
            						$("#t1fn27").removeAttr("disabled");
            						$("#t1reg27").removeAttr("disabled");
            						$("#t2fn27").removeAttr("disabled");
            						$("#t2reg27").removeAttr("disabled");
                                    $("#ext27").removeAttr("disabled");  
                
                  
                  break;
                 default:
                        $("#t1fn27").removeAttr("disabled");
                        $("#t2fn27").removeAttr("disabled");
                        $("#t1reg27").removeAttr("disabled");
                        $("#t2reg27").removeAttr("disabled");
                        $("#pmfn27").removeAttr("disabled");
                        $("#pmreg27").removeAttr("disabled");
                        $("#ext27").removeAttr("disabled");
                    break;
            } 
        	
            
            
            if(type == "Single Rigid"){
                $('#type27').html('<option value="">Type</option><option value="Box">Box</option><option value="Flat Top">Flat Top</option>');
                }
                if(type == "Bogie Rigid"){
                $('#type27').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Prime Mover"){
                $('#type27').html('<option value="">Type</option><option value="Day Cab">Day Cab</option><option value="Sleeper Cab">Sleeper Cab</option>');
                }
                if(type == "Single Combination"){
                $('#type27').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "B Double Combination"){
                $('#type27').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "Single Trailer"){
                $('#type27').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option>');
                }
                if(type == "B Double Trailer"){
                $('#type27').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "FORKLIFT"){
                $('#type27').html('<option value="">Type</option><option value="Small">Small</option><option value="Medium">Medium</option><option value="Large">Large</option>');
                }
                if(type == "VAN/UTE/CAR"){
                $('#type27').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Dolly Trailer"){
                $('#type27').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 1"){
                $('#type27').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 2"){
                $('#type27').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 3"){
                $('#type27').html('<option value="">Type</option><option value=" ">All</option>');
                }
            	}).trigger("change");    
	   
	   
	   
	   //--------------------------------------28     	
      	
	   //--------------------------------------1     	
      	
   	   $('#sel28').on('change', function() {
                var type = document.getElementById("sel28").value;
            switch(type) {
                case "Single Rigid":
                      $("#pmfn28").removeAttr("disabled");
                      $("#pmreg28").removeAttr("disabled");
                      $("#ext28").removeAttr("disabled");
                      $("#t1fn28").attr("disabled", "disabled");
                      $("#t1reg28").attr("disabled", "disabled");
                      $("#t2fn28").attr("disabled", "disabled");
                      $("#t2reg28").attr("disabled", "disabled");
                        break;
                case "Bogie Rigid":
                   $("#pmfn28").removeAttr("disabled");
                   $("#pmreg28").removeAttr("disabled");
                   $("#ext28").removeAttr("disabled");
                   $("#t1fn28").attr("disabled", "disabled");
                   $("#t1reg28").attr("disabled", "disabled");
                   $("#t2fn28").attr("disabled", "disabled");
                   $("#t2reg28").attr("disabled", "disabled");
                     break;
                case "Prime Mover":
                  $("#pmfn28").removeAttr("disabled");
                    $("#pmreg28").removeAttr("disabled");
                    $("#ext28").removeAttr("disabled");
                    $("#t1fn28").attr("disabled", "disabled");
                    $("#t1reg28").attr("disabled", "disabled");
                    $("#t2fn28").attr("disabled", "disabled");
                    $("#t2reg28").attr("disabled", "disabled");
                break;
                
                case "Single Combination":
                    $("#t1fn28").removeAttr("disabled");
                    $("#t1reg28").removeAttr("disabled");
                    $("#ext28").removeAttr("disabled");    
                    $("#pmfn28").removeAttr("disabled");
                    $("#pmreg28").removeAttr("disabled");
                    $("#t2fn28").attr("disabled", "disabled");
                    $("#t2reg28").attr("disabled", "disabled");          
            break;
            
                case "B Double Combination":
                    

              	  $("#t1fn28").removeAttr("disabled");
                    $("#t2fn28").removeAttr("disabled");
                    $("#t1reg28").removeAttr("disabled");
                    $("#t2reg28").removeAttr("disabled");
                    $("#pmfn28").removeAttr("disabled");
                    $("#pmreg28").removeAttr("disabled");
                    $("#ext28").removeAttr("disabled");
                  
                    
                    break;
                    
                    
                case "Single Trailer":
                    $("#t1fn28").removeAttr("disabled");
                    $("#t1reg28").removeAttr("disabled");
                    $("#ext28").removeAttr("disabled");    
                    $("#pmfn28").attr("disabled", "disabled");
                    $("#pmreg28").attr("disabled", "disabled");
                    $("#t2fn28").attr("disabled", "disabled");
                    $("#t2reg28").attr("disabled", "disabled");
            break;
            
            
                case "B Double Trailer":
                    $("#t1fn28").removeAttr("disabled");
                    $("#t1reg28").removeAttr("disabled");
                    $("#ext28").removeAttr("disabled");    
                    $("#pmfn28").attr("disabled", "disabled");
                    $("#pmreg28").attr("disabled", "disabled");
                    $("#t2fn28").removeAttr("disabled");
                    $("#t2reg28").removeAttr("disabled");
            break;
            
                case "FORKLIFT":
                    $("#pmfn28").removeAttr("disabled");
                      $("#pmreg28").removeAttr("disabled");
                      $("#ext28").removeAttr("disabled");
                      $("#t1fn28").attr("disabled", "disabled");
                      $("#t1reg28").attr("disabled", "disabled");
                      $("#t2fn28").attr("disabled", "disabled");
                      $("#t2reg28").attr("disabled", "disabled");
                  break;
            
            
                
                case "VAN/UTE/CAR":
                      $("#pmfn28").removeAttr("disabled");
                      $("#pmreg28").removeAttr("disabled");
                      $("#ext28").removeAttr("disabled");
                        $("#t1fn28").attr("disabled", "disabled");
                        $("#t1reg28").attr("disabled", "disabled");
                        $("#t2fn28").attr("disabled", "disabled");
                        $("#t2reg28").attr("disabled", "disabled"); 
                break;
                
                case "Dolly Trailer":
                    $("#t1fn28").removeAttr("disabled");
                    $("#t1reg28").removeAttr("disabled");
                    $("#ext28").removeAttr("disabled");    
                    $("#pmfn28").attr("disabled", "disabled");
                    $("#pmreg28").attr("disabled", "disabled");
                    $("#t2fn28").attr("disabled", "disabled");
                    $("#t2reg28").attr("disabled", "disabled");
            break;
                case "Other 1":


            						$("#pmfn28").removeAttr("disabled");
            						$("#pmreg28").removeAttr("disabled");
            						$("#t1fn28").attr("disabled", "disabled");
                                    $("#t1reg28").attr("disabled", "disabled");
                                    $("#t2fn28").attr("disabled", "disabled");
                                    $("#t2reg28").attr("disabled", "disabled");
                                    $("#ext28").removeAttr("disabled");    
                                  
                                    
                                      
                                      break;
                                      
            					case "Other 2":
                

            						$("#pmfn28").removeAttr("disabled");
            						$("#pmreg28").removeAttr("disabled");
            						$("#t1fn28").removeAttr("disabled");
            						$("#t1reg28").removeAttr("disabled");
                                    $("#t2fn28").attr("disabled", "disabled");
                                    $("#t2reg28").attr("disabled", "disabled");
                                    $("#ext28").removeAttr("disabled");  
                
                  
                  break;
            					case "Other 3":
                

            						$("#pmfn28").removeAttr("disabled");
            						$("#pmreg28").removeAttr("disabled");
            						$("#t1fn28").removeAttr("disabled");
            						$("#t1reg28").removeAttr("disabled");
            						$("#t2fn28").removeAttr("disabled");
            						$("#t2reg28").removeAttr("disabled");
                                    $("#ext28").removeAttr("disabled");  
                
                  
                  break;
                 default:
                        $("#t1fn28").removeAttr("disabled");
                        $("#t2fn28").removeAttr("disabled");
                        $("#t1reg28").removeAttr("disabled");
                        $("#t2reg28").removeAttr("disabled");
                        $("#pmfn28").removeAttr("disabled");
                        $("#pmreg28").removeAttr("disabled");
                        $("#ext28").removeAttr("disabled");
                    break;
            } 
        	
            
            if(type == "Single Rigid"){
                $('#type28').html('<option value="">Type</option><option value="Box">Box</option><option value="Flat Top">Flat Top</option>');
                }
                if(type == "Bogie Rigid"){
                $('#type28').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Prime Mover"){
                $('#type28').html('<option value="">Type</option><option value="Day Cab">Day Cab</option><option value="Sleeper Cab">Sleeper Cab</option>');
                }
                if(type == "Single Combination"){
                $('#type28').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "B Double Combination"){
                $('#type28').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "Single Trailer"){
                $('#type28').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option>');
                }
                if(type == "B Double Trailer"){
                $('#type28').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "FORKLIFT"){
                $('#type28').html('<option value="">Type</option><option value="Small">Small</option><option value="Medium">Medium</option><option value="Large">Large</option>');
                }
                if(type == "VAN/UTE/CAR"){
                $('#type28').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Dolly Trailer"){
                $('#type28').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 1"){
                $('#type28').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 2"){
                $('#type28').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 3"){
                $('#type28').html('<option value="">Type</option><option value=" ">All</option>');
                }
            	}).trigger("change");  
	   
	   
	   
	   //--------------------------------------29     	
      	
   	   $('#sel29').on('change', function() {
                var type = document.getElementById("sel29").value;
            switch(type) {
                case "Single Rigid":
                      $("#pmfn29").removeAttr("disabled");
                      $("#pmreg29").removeAttr("disabled");
                      $("#ext29").removeAttr("disabled");
                      $("#t1fn29").attr("disabled", "disabled");
                      $("#t1reg29").attr("disabled", "disabled");
                      $("#t2fn29").attr("disabled", "disabled");
                      $("#t2reg29").attr("disabled", "disabled");
                        break;
                case "Bogie Rigid":
                   $("#pmfn29").removeAttr("disabled");
                   $("#pmreg29").removeAttr("disabled");
                   $("#ext29").removeAttr("disabled");
                   $("#t1fn29").attr("disabled", "disabled");
                   $("#t1reg29").attr("disabled", "disabled");
                   $("#t2fn29").attr("disabled", "disabled");
                   $("#t2reg29").attr("disabled", "disabled");
                     break;
                case "Prime Mover":
                  $("#pmfn29").removeAttr("disabled");
                    $("#pmreg29").removeAttr("disabled");
                    $("#ext29").removeAttr("disabled");
                    $("#t1fn29").attr("disabled", "disabled");
                    $("#t1reg29").attr("disabled", "disabled");
                    $("#t2fn29").attr("disabled", "disabled");
                    $("#t2reg29").attr("disabled", "disabled");
                break;
                
                case "Single Combination":
                    $("#t1fn29").removeAttr("disabled");
                    $("#t1reg29").removeAttr("disabled");
                    $("#ext29").removeAttr("disabled");    
                    $("#pmfn29").removeAttr("disabled");
                    $("#pmreg29").removeAttr("disabled");
                    $("#t2fn29").attr("disabled", "disabled");
                    $("#t2reg29").attr("disabled", "disabled");          
            break;
            
                case "B Double Combination":
                    

              	  $("#t1fn29").removeAttr("disabled");
                    $("#t2fn29").removeAttr("disabled");
                    $("#t1reg29").removeAttr("disabled");
                    $("#t2reg29").removeAttr("disabled");
                    $("#pmfn29").removeAttr("disabled");
                    $("#pmreg29").removeAttr("disabled");
                    $("#ext29").removeAttr("disabled");
                  
                    
                    break;
                    
                    
                case "Single Trailer":
                    $("#t1fn29").removeAttr("disabled");
                    $("#t1reg29").removeAttr("disabled");
                    $("#ext29").removeAttr("disabled");    
                    $("#pmfn29").attr("disabled", "disabled");
                    $("#pmreg29").attr("disabled", "disabled");
                    $("#t2fn29").attr("disabled", "disabled");
                    $("#t2reg29").attr("disabled", "disabled");
            break;
            
            
                case "B Double Trailer":
                    $("#t1fn29").removeAttr("disabled");
                    $("#t1reg29").removeAttr("disabled");
                    $("#ext29").removeAttr("disabled");    
                    $("#pmfn29").attr("disabled", "disabled");
                    $("#pmreg29").attr("disabled", "disabled");
                    $("#t2fn29").removeAttr("disabled");
                    $("#t2reg29").removeAttr("disabled");
            break;
            
                case "FORKLIFT":
                    $("#pmfn29").removeAttr("disabled");
                      $("#pmreg29").removeAttr("disabled");
                      $("#ext29").removeAttr("disabled");
                      $("#t1fn29").attr("disabled", "disabled");
                      $("#t1reg29").attr("disabled", "disabled");
                      $("#t2fn29").attr("disabled", "disabled");
                      $("#t2reg29").attr("disabled", "disabled");
                  break;
            
            
                
                case "VAN/UTE/CAR":
                      $("#pmfn29").removeAttr("disabled");
                      $("#pmreg29").removeAttr("disabled");
                      $("#ext29").removeAttr("disabled");
                        $("#t1fn29").attr("disabled", "disabled");
                        $("#t1reg29").attr("disabled", "disabled");
                        $("#t2fn29").attr("disabled", "disabled");
                        $("#t2reg29").attr("disabled", "disabled"); 
                break;
                
                case "Dolly Trailer":
                    $("#t1fn29").removeAttr("disabled");
                    $("#t1reg29").removeAttr("disabled");
                    $("#ext29").removeAttr("disabled");    
                    $("#pmfn29").attr("disabled", "disabled");
                    $("#pmreg29").attr("disabled", "disabled");
                    $("#t2fn29").attr("disabled", "disabled");
                    $("#t2reg29").attr("disabled", "disabled");
            break;
                case "Other 1":


            						$("#pmfn29").removeAttr("disabled");
            						$("#pmreg29").removeAttr("disabled");
            						$("#t1fn29").attr("disabled", "disabled");
                                    $("#t1reg29").attr("disabled", "disabled");
                                    $("#t2fn29").attr("disabled", "disabled");
                                    $("#t2reg29").attr("disabled", "disabled");
                                    $("#ext29").removeAttr("disabled");    
                                  
                                    
                                      
                                      break;
                                      
            					case "Other 2":
                

            						$("#pmfn29").removeAttr("disabled");
            						$("#pmreg29").removeAttr("disabled");
            						$("#t1fn29").removeAttr("disabled");
            						$("#t1reg29").removeAttr("disabled");
                                    $("#t2fn29").attr("disabled", "disabled");
                                    $("#t2reg29").attr("disabled", "disabled");
                                    $("#ext29").removeAttr("disabled");  
                
                  
                  break;
            					case "Other 3":
                

            						$("#pmfn29").removeAttr("disabled");
            						$("#pmreg29").removeAttr("disabled");
            						$("#t1fn29").removeAttr("disabled");
            						$("#t1reg29").removeAttr("disabled");
            						$("#t2fn29").removeAttr("disabled");
            						$("#t2reg29").removeAttr("disabled");
                                    $("#ext29").removeAttr("disabled");  
                
                  
                  break;
                 default:
                        $("#t1fn29").removeAttr("disabled");
                        $("#t2fn29").removeAttr("disabled");
                        $("#t1reg29").removeAttr("disabled");
                        $("#t2reg29").removeAttr("disabled");
                        $("#pmfn29").removeAttr("disabled");
                        $("#pmreg29").removeAttr("disabled");
                        $("#ext29").removeAttr("disabled");
                    break;
            } 
        	
            
            
            if(type == "Single Rigid"){
                $('#type29').html('<option value="">Type</option><option value="Box">Box</option><option value="Flat Top">Flat Top</option>');
                }
                if(type == "Bogie Rigid"){
                $('#type29').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Prime Mover"){
                $('#type29').html('<option value="">Type</option><option value="Day Cab">Day Cab</option><option value="Sleeper Cab">Sleeper Cab</option>');
                }
                if(type == "Single Combination"){
                $('#type29').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "B Double Combination"){
                $('#type29').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "Single Trailer"){
                $('#type29').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option>');
                }
                if(type == "B Double Trailer"){
                $('#type29').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "FORKLIFT"){
                $('#type29').html('<option value="">Type</option><option value="Small">Small</option><option value="Medium">Medium</option><option value="Large">Large</option>');
                }
                if(type == "VAN/UTE/CAR"){
                $('#type29').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Dolly Trailer"){
                $('#type29').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 1"){
                $('#type29').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 2"){
                $('#type29').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 3"){
                $('#type29').html('<option value="">Type</option><option value=" ">All</option>');
                }
            	}).trigger("change");
	   
	   
	   
	   //--------------------------------------30     	
	    	
      	
   	   $('#sel30').on('change', function() {
                var type = document.getElementById("sel30").value;
            switch(type) {
                case "Single Rigid":
                      $("#pmfn30").removeAttr("disabled");
                      $("#pmreg30").removeAttr("disabled");
                      $("#ext30").removeAttr("disabled");
                      $("#t1fn30").attr("disabled", "disabled");
                      $("#t1reg30").attr("disabled", "disabled");
                      $("#t2fn30").attr("disabled", "disabled");
                      $("#t2reg30").attr("disabled", "disabled");
                        break;
                case "Bogie Rigid":
                   $("#pmfn30").removeAttr("disabled");
                   $("#pmreg30").removeAttr("disabled");
                   $("#ext30").removeAttr("disabled");
                   $("#t1fn30").attr("disabled", "disabled");
                   $("#t1reg30").attr("disabled", "disabled");
                   $("#t2fn30").attr("disabled", "disabled");
                   $("#t2reg30").attr("disabled", "disabled");
                     break;
                case "Prime Mover":
                  $("#pmfn30").removeAttr("disabled");
                    $("#pmreg30").removeAttr("disabled");
                    $("#ext30").removeAttr("disabled");
                    $("#t1fn30").attr("disabled", "disabled");
                    $("#t1reg30").attr("disabled", "disabled");
                    $("#t2fn30").attr("disabled", "disabled");
                    $("#t2reg30").attr("disabled", "disabled");
                break;
                
                case "Single Combination":
                    $("#t1fn30").removeAttr("disabled");
                    $("#t1reg30").removeAttr("disabled");
                    $("#ext30").removeAttr("disabled");    
                    $("#pmfn30").removeAttr("disabled");
                    $("#pmreg30").removeAttr("disabled");
                    $("#t2fn30").attr("disabled", "disabled");
                    $("#t2reg30").attr("disabled", "disabled");          
            break;
            
                case "B Double Combination":
                    

              	  $("#t1fn30").removeAttr("disabled");
                    $("#t2fn30").removeAttr("disabled");
                    $("#t1reg30").removeAttr("disabled");
                    $("#t2reg30").removeAttr("disabled");
                    $("#pmfn30").removeAttr("disabled");
                    $("#pmreg30").removeAttr("disabled");
                    $("#ext30").removeAttr("disabled");
                  
                    
                    break;
                    
                    
                case "Single Trailer":
                    $("#t1fn30").removeAttr("disabled");
                    $("#t1reg30").removeAttr("disabled");
                    $("#ext30").removeAttr("disabled");    
                    $("#pmfn30").attr("disabled", "disabled");
                    $("#pmreg30").attr("disabled", "disabled");
                    $("#t2fn30").attr("disabled", "disabled");
                    $("#t2reg30").attr("disabled", "disabled");
            break;
            
            
                case "B Double Trailer":
                    $("#t1fn30").removeAttr("disabled");
                    $("#t1reg30").removeAttr("disabled");
                    $("#ext30").removeAttr("disabled");    
                    $("#pmfn30").attr("disabled", "disabled");
                    $("#pmreg30").attr("disabled", "disabled");
                    $("#t2fn30").removeAttr("disabled");
                    $("#t2reg30").removeAttr("disabled");
            break;
            
                case "FORKLIFT":
                    $("#pmfn30").removeAttr("disabled");
                      $("#pmreg30").removeAttr("disabled");
                      $("#ext30").removeAttr("disabled");
                      $("#t1fn30").attr("disabled", "disabled");
                      $("#t1reg30").attr("disabled", "disabled");
                      $("#t2fn30").attr("disabled", "disabled");
                      $("#t2reg30").attr("disabled", "disabled");
                  break;
            
            
                
                case "VAN/UTE/CAR":
                      $("#pmfn30").removeAttr("disabled");
                      $("#pmreg30").removeAttr("disabled");
                      $("#ext30").removeAttr("disabled");
                        $("#t1fn30").attr("disabled", "disabled");
                        $("#t1reg30").attr("disabled", "disabled");
                        $("#t2fn30").attr("disabled", "disabled");
                        $("#t2reg30").attr("disabled", "disabled"); 
                break;
                
                case "Dolly Trailer":
                    $("#t1fn30").removeAttr("disabled");
                    $("#t1reg30").removeAttr("disabled");
                    $("#ext30").removeAttr("disabled");    
                    $("#pmfn30").attr("disabled", "disabled");
                    $("#pmreg30").attr("disabled", "disabled");
                    $("#t2fn30").attr("disabled", "disabled");
                    $("#t2reg30").attr("disabled", "disabled");
            break;
                case "Other 1":


            						$("#pmfn30").removeAttr("disabled");
            						$("#pmreg30").removeAttr("disabled");
            						$("#t1fn30").attr("disabled", "disabled");
                                    $("#t1reg30").attr("disabled", "disabled");
                                    $("#t2fn30").attr("disabled", "disabled");
                                    $("#t2reg30").attr("disabled", "disabled");
                                    $("#ext30").removeAttr("disabled");    
                                  
                                    
                                      
                                      break;
                                      
            					case "Other 2":
                

            						$("#pmfn30").removeAttr("disabled");
            						$("#pmreg30").removeAttr("disabled");
            						$("#t1fn30").removeAttr("disabled");
            						$("#t1reg30").removeAttr("disabled");
                                    $("#t2fn30").attr("disabled", "disabled");
                                    $("#t2reg30").attr("disabled", "disabled");
                                    $("#ext30").removeAttr("disabled");  
                
                  
                  break;
            					case "Other 3":
                

            						$("#pmfn30").removeAttr("disabled");
            						$("#pmreg30").removeAttr("disabled");
            						$("#t1fn30").removeAttr("disabled");
            						$("#t1reg30").removeAttr("disabled");
            						$("#t2fn30").removeAttr("disabled");
            						$("#t2reg30").removeAttr("disabled");
                                    $("#ext30").removeAttr("disabled");  
                
                  
                  break;
                 default:
                        $("#t1fn30").removeAttr("disabled");
                        $("#t2fn30").removeAttr("disabled");
                        $("#t1reg30").removeAttr("disabled");
                        $("#t2reg30").removeAttr("disabled");
                        $("#pmfn30").removeAttr("disabled");
                        $("#pmreg30").removeAttr("disabled");
                        $("#ext30").removeAttr("disabled");
                    break;
            } 
        	
            
            
            if(type == "Single Rigid"){
                $('#type30').html('<option value="">Type</option><option value="Box">Box</option><option value="Flat Top">Flat Top</option>');
                }
                if(type == "Bogie Rigid"){
                $('#type30').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Prime Mover"){
                $('#type30').html('<option value="">Type</option><option value="Day Cab">Day Cab</option><option value="Sleeper Cab">Sleeper Cab</option>');
                }
                if(type == "Single Combination"){
                $('#type30').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "B Double Combination"){
                $('#type30').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "Single Trailer"){
                $('#type30').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option>');
                }
                if(type == "B Double Trailer"){
                $('#type30').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "FORKLIFT"){
                $('#type30').html('<option value="">Type</option><option value="Small">Small</option><option value="Medium">Medium</option><option value="Large">Large</option>');
                }
                if(type == "VAN/UTE/CAR"){
                $('#type30').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Dolly Trailer"){
                $('#type30').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 1"){
                $('#type30').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 2"){
                $('#type30').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 3"){
                $('#type30').html('<option value="">Type</option><option value=" ">All</option>');
                }
            	}).trigger("change");
	   
	   
   	   //--------------------------------------31     	
      	
   	   $('#sel31').on('change', function() {
                var type = document.getElementById("sel31").value;
            switch(type) {
                case "Single Rigid":
                      $("#pmfn31").removeAttr("disabled");
                      $("#pmreg31").removeAttr("disabled");
                      $("#ext31").removeAttr("disabled");
                      $("#t1fn31").attr("disabled", "disabled");
                      $("#t1reg31").attr("disabled", "disabled");
                      $("#t2fn31").attr("disabled", "disabled");
                      $("#t2reg31").attr("disabled", "disabled");
                        break;
                case "Bogie Rigid":
                   $("#pmfn31").removeAttr("disabled");
                   $("#pmreg31").removeAttr("disabled");
                   $("#ext31").removeAttr("disabled");
                   $("#t1fn31").attr("disabled", "disabled");
                   $("#t1reg31").attr("disabled", "disabled");
                   $("#t2fn31").attr("disabled", "disabled");
                   $("#t2reg31").attr("disabled", "disabled");
                     break;
                case "Prime Mover":
                  $("#pmfn31").removeAttr("disabled");
                    $("#pmreg31").removeAttr("disabled");
                    $("#ext31").removeAttr("disabled");
                    $("#t1fn31").attr("disabled", "disabled");
                    $("#t1reg31").attr("disabled", "disabled");
                    $("#t2fn31").attr("disabled", "disabled");
                    $("#t2reg31").attr("disabled", "disabled");
                break;
                
                case "Single Combination":
                    $("#t1fn31").removeAttr("disabled");
                    $("#t1reg31").removeAttr("disabled");
                    $("#ext31").removeAttr("disabled");    
                    $("#pmfn31").removeAttr("disabled");
                    $("#pmreg31").removeAttr("disabled");
                    $("#t2fn31").attr("disabled", "disabled");
                    $("#t2reg31").attr("disabled", "disabled");          
            break;
            
                case "B Double Combination":
                    

              	  $("#t1fn31").removeAttr("disabled");
                    $("#t2fn31").removeAttr("disabled");
                    $("#t1reg31").removeAttr("disabled");
                    $("#t2reg31").removeAttr("disabled");
                    $("#pmfn31").removeAttr("disabled");
                    $("#pmreg31").removeAttr("disabled");
                    $("#ext31").removeAttr("disabled");
                  
                    
                    break;
                    
                    
                case "Single Trailer":
                    $("#t1fn31").removeAttr("disabled");
                    $("#t1reg31").removeAttr("disabled");
                    $("#ext31").removeAttr("disabled");    
                    $("#pmfn31").attr("disabled", "disabled");
                    $("#pmreg31").attr("disabled", "disabled");
                    $("#t2fn31").attr("disabled", "disabled");
                    $("#t2reg31").attr("disabled", "disabled");
            break;
            
            
                case "B Double Trailer":
                    $("#t1fn31").removeAttr("disabled");
                    $("#t1reg31").removeAttr("disabled");
                    $("#ext31").removeAttr("disabled");    
                    $("#pmfn31").attr("disabled", "disabled");
                    $("#pmreg31").attr("disabled", "disabled");
                    $("#t2fn31").removeAttr("disabled");
                    $("#t2reg31").removeAttr("disabled");
            break;
            
                case "FORKLIFT":
                    $("#pmfn31").removeAttr("disabled");
                      $("#pmreg31").removeAttr("disabled");
                      $("#ext31").removeAttr("disabled");
                      $("#t1fn31").attr("disabled", "disabled");
                      $("#t1reg31").attr("disabled", "disabled");
                      $("#t2fn31").attr("disabled", "disabled");
                      $("#t2reg31").attr("disabled", "disabled");
                  break;
            
            
                
                case "VAN/UTE/CAR":
                      $("#pmfn31").removeAttr("disabled");
                      $("#pmreg31").removeAttr("disabled");
                      $("#ext31").removeAttr("disabled");
                        $("#t1fn31").attr("disabled", "disabled");
                        $("#t1reg31").attr("disabled", "disabled");
                        $("#t2fn31").attr("disabled", "disabled");
                        $("#t2reg31").attr("disabled", "disabled"); 
                break;
                
                case "Dolly Trailer":
                    $("#t1fn31").removeAttr("disabled");
                    $("#t1reg31").removeAttr("disabled");
                    $("#ext31").removeAttr("disabled");    
                    $("#pmfn31").attr("disabled", "disabled");
                    $("#pmreg31").attr("disabled", "disabled");
                    $("#t2fn31").attr("disabled", "disabled");
                    $("#t2reg31").attr("disabled", "disabled");
            break;
                case "Other 1":


            						$("#pmfn31").removeAttr("disabled");
            						$("#pmreg31").removeAttr("disabled");
            						$("#t1fn31").attr("disabled", "disabled");
                                    $("#t1reg31").attr("disabled", "disabled");
                                    $("#t2fn31").attr("disabled", "disabled");
                                    $("#t2reg31").attr("disabled", "disabled");
                                    $("#ext31").removeAttr("disabled");    
                                  
                                    
                                      
                                      break;
                                      
            					case "Other 2":
                

            						$("#pmfn31").removeAttr("disabled");
            						$("#pmreg31").removeAttr("disabled");
            						$("#t1fn31").removeAttr("disabled");
            						$("#t1reg31").removeAttr("disabled");
                                    $("#t2fn31").attr("disabled", "disabled");
                                    $("#t2reg31").attr("disabled", "disabled");
                                    $("#ext31").removeAttr("disabled");  
                
                  
                  break;
            					case "Other 3":
                

            						$("#pmfn31").removeAttr("disabled");
            						$("#pmreg31").removeAttr("disabled");
            						$("#t1fn31").removeAttr("disabled");
            						$("#t1reg31").removeAttr("disabled");
            						$("#t2fn31").removeAttr("disabled");
            						$("#t2reg31").removeAttr("disabled");
                                    $("#ext31").removeAttr("disabled");  
                
                  
                  break;
                 default:
                        $("#t1fn31").removeAttr("disabled");
                        $("#t2fn31").removeAttr("disabled");
                        $("#t1reg31").removeAttr("disabled");
                        $("#t2reg31").removeAttr("disabled");
                        $("#pmfn31").removeAttr("disabled");
                        $("#pmreg31").removeAttr("disabled");
                        $("#ext31").removeAttr("disabled");
                    break;
            } 
        	
            
            
            if(type == "Single Rigid"){
                $('#type31').html('<option value="">Type</option><option value="Box">Box</option><option value="Flat Top">Flat Top</option>');
                }
                if(type == "Bogie Rigid"){
                $('#type31').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Prime Mover"){
                $('#type31').html('<option value="">Type</option><option value="Day Cab">Day Cab</option><option value="Sleeper Cab">Sleeper Cab</option>');
                }
                if(type == "Single Combination"){
                $('#type31').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "B Double Combination"){
                $('#type31').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "Single Trailer"){
                $('#type31').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option>');
                }
                if(type == "B Double Trailer"){
                $('#type31').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "FORKLIFT"){
                $('#type31').html('<option value="">Type</option><option value="Small">Small</option><option value="Medium">Medium</option><option value="Large">Large</option>');
                }
                if(type == "VAN/UTE/CAR"){
                $('#type31').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Dolly Trailer"){
                $('#type31').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 1"){
                $('#type31').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 2"){
                $('#type31').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 3"){
                $('#type31').html('<option value="">Type</option><option value=" ">All</option>');
                }
            	}).trigger("change");
	   
	   	   
   	   //--------------------------------------32     	
      	
   	   $('#sel32').on('change', function() {
                var type = document.getElementById("sel32").value;
            switch(type) {
                case "Single Rigid":
                      $("#pmfn32").removeAttr("disabled");
                      $("#pmreg32").removeAttr("disabled");
                      $("#ext32").removeAttr("disabled");
                      $("#t1fn32").attr("disabled", "disabled");
                      $("#t1reg32").attr("disabled", "disabled");
                      $("#t2fn32").attr("disabled", "disabled");
                      $("#t2reg32").attr("disabled", "disabled");
                        break;
                case "Bogie Rigid":
                   $("#pmfn32").removeAttr("disabled");
                   $("#pmreg32").removeAttr("disabled");
                   $("#ext32").removeAttr("disabled");
                   $("#t1fn32").attr("disabled", "disabled");
                   $("#t1reg32").attr("disabled", "disabled");
                   $("#t2fn32").attr("disabled", "disabled");
                   $("#t2reg32").attr("disabled", "disabled");
                     break;
                case "Prime Mover":
                  $("#pmfn32").removeAttr("disabled");
                    $("#pmreg32").removeAttr("disabled");
                    $("#ext32").removeAttr("disabled");
                    $("#t1fn32").attr("disabled", "disabled");
                    $("#t1reg32").attr("disabled", "disabled");
                    $("#t2fn32").attr("disabled", "disabled");
                    $("#t2reg32").attr("disabled", "disabled");
                break;
                
                case "Single Combination":
                    $("#t1fn32").removeAttr("disabled");
                    $("#t1reg32").removeAttr("disabled");
                    $("#ext32").removeAttr("disabled");    
                    $("#pmfn32").removeAttr("disabled");
                    $("#pmreg32").removeAttr("disabled");
                    $("#t2fn32").attr("disabled", "disabled");
                    $("#t2reg32").attr("disabled", "disabled");          
            break;
            
                case "B Double Combination":
                    

              	  $("#t1fn32").removeAttr("disabled");
                    $("#t2fn32").removeAttr("disabled");
                    $("#t1reg32").removeAttr("disabled");
                    $("#t2reg32").removeAttr("disabled");
                    $("#pmfn32").removeAttr("disabled");
                    $("#pmreg32").removeAttr("disabled");
                    $("#ext32").removeAttr("disabled");
                  
                    
                    break;
                    
                    
                case "Single Trailer":
                    $("#t1fn32").removeAttr("disabled");
                    $("#t1reg32").removeAttr("disabled");
                    $("#ext32").removeAttr("disabled");    
                    $("#pmfn32").attr("disabled", "disabled");
                    $("#pmreg32").attr("disabled", "disabled");
                    $("#t2fn32").attr("disabled", "disabled");
                    $("#t2reg32").attr("disabled", "disabled");
            break;
            
            
                case "B Double Trailer":
                    $("#t1fn32").removeAttr("disabled");
                    $("#t1reg32").removeAttr("disabled");
                    $("#ext32").removeAttr("disabled");    
                    $("#pmfn32").attr("disabled", "disabled");
                    $("#pmreg32").attr("disabled", "disabled");
                    $("#t2fn32").removeAttr("disabled");
                    $("#t2reg32").removeAttr("disabled");
            break;
            
                case "FORKLIFT":
                    $("#pmfn32").removeAttr("disabled");
                      $("#pmreg32").removeAttr("disabled");
                      $("#ext32").removeAttr("disabled");
                      $("#t1fn32").attr("disabled", "disabled");
                      $("#t1reg32").attr("disabled", "disabled");
                      $("#t2fn32").attr("disabled", "disabled");
                      $("#t2reg32").attr("disabled", "disabled");
                  break;
            
            
                
                case "VAN/UTE/CAR":
                      $("#pmfn32").removeAttr("disabled");
                      $("#pmreg32").removeAttr("disabled");
                      $("#ext32").removeAttr("disabled");
                        $("#t1fn32").attr("disabled", "disabled");
                        $("#t1reg32").attr("disabled", "disabled");
                        $("#t2fn32").attr("disabled", "disabled");
                        $("#t2reg32").attr("disabled", "disabled"); 
                break;
                
                case "Dolly Trailer":
                    $("#t1fn32").removeAttr("disabled");
                    $("#t1reg32").removeAttr("disabled");
                    $("#ext32").removeAttr("disabled");    
                    $("#pmfn32").attr("disabled", "disabled");
                    $("#pmreg32").attr("disabled", "disabled");
                    $("#t2fn32").attr("disabled", "disabled");
                    $("#t2reg32").attr("disabled", "disabled");
            break;
                case "Other 1":


            						$("#pmfn32").removeAttr("disabled");
            						$("#pmreg32").removeAttr("disabled");
            						$("#t1fn32").attr("disabled", "disabled");
                                    $("#t1reg32").attr("disabled", "disabled");
                                    $("#t2fn32").attr("disabled", "disabled");
                                    $("#t2reg32").attr("disabled", "disabled");
                                    $("#ext32").removeAttr("disabled");    
                                  
                                    
                                      
                                      break;
                                      
            					case "Other 2":
                

            						$("#pmfn32").removeAttr("disabled");
            						$("#pmreg32").removeAttr("disabled");
            						$("#t1fn32").removeAttr("disabled");
            						$("#t1reg32").removeAttr("disabled");
                                    $("#t2fn32").attr("disabled", "disabled");
                                    $("#t2reg32").attr("disabled", "disabled");
                                    $("#ext32").removeAttr("disabled");  
                
                  
                  break;
            					case "Other 3":
                

            						$("#pmfn32").removeAttr("disabled");
            						$("#pmreg32").removeAttr("disabled");
            						$("#t1fn32").removeAttr("disabled");
            						$("#t1reg32").removeAttr("disabled");
            						$("#t2fn32").removeAttr("disabled");
            						$("#t2reg32").removeAttr("disabled");
                                    $("#ext32").removeAttr("disabled");  
                
                  
                  break;
                 default:
                        $("#t1fn32").removeAttr("disabled");
                        $("#t2fn32").removeAttr("disabled");
                        $("#t1reg32").removeAttr("disabled");
                        $("#t2reg32").removeAttr("disabled");
                        $("#pmfn32").removeAttr("disabled");
                        $("#pmreg32").removeAttr("disabled");
                        $("#ext32").removeAttr("disabled");
                    break;
            } 
        	
            
            if(type == "Single Rigid"){
                $('#type32').html('<option value="">Type</option><option value="Box">Box</option><option value="Flat Top">Flat Top</option>');
                }
                if(type == "Bogie Rigid"){
                $('#type32').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Prime Mover"){
                $('#type32').html('<option value="">Type</option><option value="Day Cab">Day Cab</option><option value="Sleeper Cab">Sleeper Cab</option>');
                }
                if(type == "Single Combination"){
                $('#type32').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "B Double Combination"){
                $('#type32').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "Single Trailer"){
                $('#type32').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option>');
                }
                if(type == "B Double Trailer"){
                $('#type32').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "FORKLIFT"){
                $('#type32').html('<option value="">Type</option><option value="Small">Small</option><option value="Medium">Medium</option><option value="Large">Large</option>');
                }
                if(type == "VAN/UTE/CAR"){
                $('#type32').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Dolly Trailer"){
                $('#type32').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 1"){
                $('#type32').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 2"){
                $('#type32').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 3"){
                $('#type32').html('<option value="">Type</option><option value=" ">All</option>');
                }
            	}).trigger("change");   
	   
	   	   
	   	   	   
	   
   	   //--------------------------------------33     	
      	
   	   $('#sel33').on('change', function() {
                var type = document.getElementById("sel33").value;
            switch(type) {
                case "Single Rigid":
                      $("#pmfn33").removeAttr("disabled");
                      $("#pmreg33").removeAttr("disabled");
                      $("#ext33").removeAttr("disabled");
                      $("#t1fn33").attr("disabled", "disabled");
                      $("#t1reg33").attr("disabled", "disabled");
                      $("#t2fn33").attr("disabled", "disabled");
                      $("#t2reg33").attr("disabled", "disabled");
                        break;
                case "Bogie Rigid":
                   $("#pmfn33").removeAttr("disabled");
                   $("#pmreg33").removeAttr("disabled");
                   $("#ext33").removeAttr("disabled");
                   $("#t1fn33").attr("disabled", "disabled");
                   $("#t1reg33").attr("disabled", "disabled");
                   $("#t2fn33").attr("disabled", "disabled");
                   $("#t2reg33").attr("disabled", "disabled");
                     break;
                case "Prime Mover":
                  $("#pmfn33").removeAttr("disabled");
                    $("#pmreg33").removeAttr("disabled");
                    $("#ext33").removeAttr("disabled");
                    $("#t1fn33").attr("disabled", "disabled");
                    $("#t1reg33").attr("disabled", "disabled");
                    $("#t2fn33").attr("disabled", "disabled");
                    $("#t2reg33").attr("disabled", "disabled");
                break;
                
                case "Single Combination":
                    $("#t1fn33").removeAttr("disabled");
                    $("#t1reg33").removeAttr("disabled");
                    $("#ext33").removeAttr("disabled");    
                    $("#pmfn33").removeAttr("disabled");
                    $("#pmreg33").removeAttr("disabled");
                    $("#t2fn33").attr("disabled", "disabled");
                    $("#t2reg33").attr("disabled", "disabled");          
            break;
            
                case "B Double Combination":
                    

              	  $("#t1fn33").removeAttr("disabled");
                    $("#t2fn33").removeAttr("disabled");
                    $("#t1reg33").removeAttr("disabled");
                    $("#t2reg33").removeAttr("disabled");
                    $("#pmfn33").removeAttr("disabled");
                    $("#pmreg33").removeAttr("disabled");
                    $("#ext33").removeAttr("disabled");
                  
                    
                    break;
                    
                    
                case "Single Trailer":
                    $("#t1fn33").removeAttr("disabled");
                    $("#t1reg33").removeAttr("disabled");
                    $("#ext33").removeAttr("disabled");    
                    $("#pmfn33").attr("disabled", "disabled");
                    $("#pmreg33").attr("disabled", "disabled");
                    $("#t2fn33").attr("disabled", "disabled");
                    $("#t2reg33").attr("disabled", "disabled");
            break;
            
            
                case "B Double Trailer":
                    $("#t1fn33").removeAttr("disabled");
                    $("#t1reg33").removeAttr("disabled");
                    $("#ext33").removeAttr("disabled");    
                    $("#pmfn33").attr("disabled", "disabled");
                    $("#pmreg33").attr("disabled", "disabled");
                    $("#t2fn33").removeAttr("disabled");
                    $("#t2reg33").removeAttr("disabled");
            break;
            
                case "FORKLIFT":
                    $("#pmfn33").removeAttr("disabled");
                      $("#pmreg33").removeAttr("disabled");
                      $("#ext33").removeAttr("disabled");
                      $("#t1fn33").attr("disabled", "disabled");
                      $("#t1reg33").attr("disabled", "disabled");
                      $("#t2fn33").attr("disabled", "disabled");
                      $("#t2reg33").attr("disabled", "disabled");
                  break;
            
            
                
                case "VAN/UTE/CAR":
                      $("#pmfn33").removeAttr("disabled");
                      $("#pmreg33").removeAttr("disabled");
                      $("#ext33").removeAttr("disabled");
                        $("#t1fn33").attr("disabled", "disabled");
                        $("#t1reg33").attr("disabled", "disabled");
                        $("#t2fn33").attr("disabled", "disabled");
                        $("#t2reg33").attr("disabled", "disabled"); 
                break;
                
                case "Dolly Trailer":
                    $("#t1fn33").removeAttr("disabled");
                    $("#t1reg33").removeAttr("disabled");
                    $("#ext33").removeAttr("disabled");    
                    $("#pmfn33").attr("disabled", "disabled");
                    $("#pmreg33").attr("disabled", "disabled");
                    $("#t2fn33").attr("disabled", "disabled");
                    $("#t2reg33").attr("disabled", "disabled");
            break;
                case "Other 1":


            						$("#pmfn33").removeAttr("disabled");
            						$("#pmreg33").removeAttr("disabled");
            						$("#t1fn33").attr("disabled", "disabled");
                                    $("#t1reg33").attr("disabled", "disabled");
                                    $("#t2fn33").attr("disabled", "disabled");
                                    $("#t2reg33").attr("disabled", "disabled");
                                    $("#ext33").removeAttr("disabled");    
                                  
                                    
                                      
                                      break;
                                      
            					case "Other 2":
                

            						$("#pmfn33").removeAttr("disabled");
            						$("#pmreg33").removeAttr("disabled");
            						$("#t1fn33").removeAttr("disabled");
            						$("#t1reg33").removeAttr("disabled");
                                    $("#t2fn33").attr("disabled", "disabled");
                                    $("#t2reg33").attr("disabled", "disabled");
                                    $("#ext33").removeAttr("disabled");  
                
                  
                  break;
            					case "Other 3":
                

            						$("#pmfn33").removeAttr("disabled");
            						$("#pmreg33").removeAttr("disabled");
            						$("#t1fn33").removeAttr("disabled");
            						$("#t1reg33").removeAttr("disabled");
            						$("#t2fn33").removeAttr("disabled");
            						$("#t2reg33").removeAttr("disabled");
                                    $("#ext33").removeAttr("disabled");  
                
                  
                  break;
                 default:
                        $("#t1fn33").removeAttr("disabled");
                        $("#t2fn33").removeAttr("disabled");
                        $("#t1reg33").removeAttr("disabled");
                        $("#t2reg33").removeAttr("disabled");
                        $("#pmfn33").removeAttr("disabled");
                        $("#pmreg33").removeAttr("disabled");
                        $("#ext33").removeAttr("disabled");
                    break;
            } 
        	
            
            if(type == "Single Rigid"){
                $('#type33').html('<option value="">Type</option><option value="Box">Box</option><option value="Flat Top">Flat Top</option>');
                }
                if(type == "Bogie Rigid"){
                $('#type33').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Prime Mover"){
                $('#type33').html('<option value="">Type</option><option value="Day Cab">Day Cab</option><option value="Sleeper Cab">Sleeper Cab</option>');
                }
                if(type == "Single Combination"){
                $('#type33').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "B Double Combination"){
                $('#type33').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "Single Trailer"){
                $('#type33').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option>');
                }
                if(type == "B Double Trailer"){
                $('#type33').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "FORKLIFT"){
                $('#type33').html('<option value="">Type</option><option value="Small">Small</option><option value="Medium">Medium</option><option value="Large">Large</option>');
                }
                if(type == "VAN/UTE/CAR"){
                $('#type33').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Dolly Trailer"){
                $('#type33').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 1"){
                $('#type33').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 2"){
                $('#type33').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 3"){
                $('#type33').html('<option value="">Type</option><option value=" ">All</option>');
                }
            	}).trigger("change");  
	   
	   	   
   	   //--------------------------------------34     	
      	
   	   $('#sel34').on('change', function() {
                var type = document.getElementById("sel34").value;
            switch(type) {
                case "Single Rigid":
                      $("#pmfn34").removeAttr("disabled");
                      $("#pmreg34").removeAttr("disabled");
                      $("#ext34").removeAttr("disabled");
                      $("#t1fn34").attr("disabled", "disabled");
                      $("#t1reg34").attr("disabled", "disabled");
                      $("#t2fn34").attr("disabled", "disabled");
                      $("#t2reg34").attr("disabled", "disabled");
                        break;
                case "Bogie Rigid":
                   $("#pmfn34").removeAttr("disabled");
                   $("#pmreg34").removeAttr("disabled");
                   $("#ext34").removeAttr("disabled");
                   $("#t1fn34").attr("disabled", "disabled");
                   $("#t1reg34").attr("disabled", "disabled");
                   $("#t2fn34").attr("disabled", "disabled");
                   $("#t2reg34").attr("disabled", "disabled");
                     break;
                case "Prime Mover":
                  $("#pmfn34").removeAttr("disabled");
                    $("#pmreg34").removeAttr("disabled");
                    $("#ext34").removeAttr("disabled");
                    $("#t1fn34").attr("disabled", "disabled");
                    $("#t1reg34").attr("disabled", "disabled");
                    $("#t2fn34").attr("disabled", "disabled");
                    $("#t2reg34").attr("disabled", "disabled");
                break;
                
                case "Single Combination":
                    $("#t1fn34").removeAttr("disabled");
                    $("#t1reg34").removeAttr("disabled");
                    $("#ext34").removeAttr("disabled");    
                    $("#pmfn34").removeAttr("disabled");
                    $("#pmreg34").removeAttr("disabled");
                    $("#t2fn34").attr("disabled", "disabled");
                    $("#t2reg34").attr("disabled", "disabled");          
            break;
            
                case "B Double Combination":
                    

              	  $("#t1fn34").removeAttr("disabled");
                    $("#t2fn34").removeAttr("disabled");
                    $("#t1reg34").removeAttr("disabled");
                    $("#t2reg34").removeAttr("disabled");
                    $("#pmfn34").removeAttr("disabled");
                    $("#pmreg34").removeAttr("disabled");
                    $("#ext34").removeAttr("disabled");
                  
                    
                    break;
                    
                    
                case "Single Trailer":
                    $("#t1fn34").removeAttr("disabled");
                    $("#t1reg34").removeAttr("disabled");
                    $("#ext34").removeAttr("disabled");    
                    $("#pmfn34").attr("disabled", "disabled");
                    $("#pmreg34").attr("disabled", "disabled");
                    $("#t2fn34").attr("disabled", "disabled");
                    $("#t2reg34").attr("disabled", "disabled");
            break;
            
            
                case "B Double Trailer":
                    $("#t1fn34").removeAttr("disabled");
                    $("#t1reg34").removeAttr("disabled");
                    $("#ext34").removeAttr("disabled");    
                    $("#pmfn34").attr("disabled", "disabled");
                    $("#pmreg34").attr("disabled", "disabled");
                    $("#t2fn34").removeAttr("disabled");
                    $("#t2reg34").removeAttr("disabled");
            break;
            
                case "FORKLIFT":
                    $("#pmfn34").removeAttr("disabled");
                      $("#pmreg34").removeAttr("disabled");
                      $("#ext34").removeAttr("disabled");
                      $("#t1fn34").attr("disabled", "disabled");
                      $("#t1reg34").attr("disabled", "disabled");
                      $("#t2fn34").attr("disabled", "disabled");
                      $("#t2reg34").attr("disabled", "disabled");
                  break;
            
            
                
                case "VAN/UTE/CAR":
                      $("#pmfn34").removeAttr("disabled");
                      $("#pmreg34").removeAttr("disabled");
                      $("#ext34").removeAttr("disabled");
                        $("#t1fn34").attr("disabled", "disabled");
                        $("#t1reg34").attr("disabled", "disabled");
                        $("#t2fn34").attr("disabled", "disabled");
                        $("#t2reg34").attr("disabled", "disabled"); 
                break;
                
                case "Dolly Trailer":
                    $("#t1fn34").removeAttr("disabled");
                    $("#t1reg34").removeAttr("disabled");
                    $("#ext34").removeAttr("disabled");    
                    $("#pmfn34").attr("disabled", "disabled");
                    $("#pmreg34").attr("disabled", "disabled");
                    $("#t2fn34").attr("disabled", "disabled");
                    $("#t2reg34").attr("disabled", "disabled");
            break;
                case "Other 1":


            						$("#pmfn34").removeAttr("disabled");
            						$("#pmreg34").removeAttr("disabled");
            						$("#t1fn34").attr("disabled", "disabled");
                                    $("#t1reg34").attr("disabled", "disabled");
                                    $("#t2fn34").attr("disabled", "disabled");
                                    $("#t2reg34").attr("disabled", "disabled");
                                    $("#ext34").removeAttr("disabled");    
                                  
                                    
                                      
                                      break;
                                      
            					case "Other 2":
                

            						$("#pmfn34").removeAttr("disabled");
            						$("#pmreg34").removeAttr("disabled");
            						$("#t1fn34").removeAttr("disabled");
            						$("#t1reg34").removeAttr("disabled");
                                    $("#t2fn34").attr("disabled", "disabled");
                                    $("#t2reg34").attr("disabled", "disabled");
                                    $("#ext34").removeAttr("disabled");  
                
                  
                  break;
            					case "Other 3":
                

            						$("#pmfn34").removeAttr("disabled");
            						$("#pmreg34").removeAttr("disabled");
            						$("#t1fn34").removeAttr("disabled");
            						$("#t1reg34").removeAttr("disabled");
            						$("#t2fn34").removeAttr("disabled");
            						$("#t2reg34").removeAttr("disabled");
                                    $("#ext34").removeAttr("disabled");  
                
                  
                  break;
                 default:
                        $("#t1fn34").removeAttr("disabled");
                        $("#t2fn34").removeAttr("disabled");
                        $("#t1reg34").removeAttr("disabled");
                        $("#t2reg34").removeAttr("disabled");
                        $("#pmfn34").removeAttr("disabled");
                        $("#pmreg34").removeAttr("disabled");
                        $("#ext34").removeAttr("disabled");
                    break;
            } 
        	
            
            
            if(type == "Single Rigid"){
                $('#type34').html('<option value="">Type</option><option value="Box">Box</option><option value="Flat Top">Flat Top</option>');
                }
                if(type == "Bogie Rigid"){
                $('#type34').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Prime Mover"){
                $('#type34').html('<option value="">Type</option><option value="Day Cab">Day Cab</option><option value="Sleeper Cab">Sleeper Cab</option>');
                }
                if(type == "Single Combination"){
                $('#type34').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "B Double Combination"){
                $('#type34').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "Single Trailer"){
                $('#type34').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option>');
                }
                if(type == "B Double Trailer"){
                $('#type34').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "FORKLIFT"){
                $('#type34').html('<option value="">Type</option><option value="Small">Small</option><option value="Medium">Medium</option><option value="Large">Large</option>');
                }
                if(type == "VAN/UTE/CAR"){
                $('#type34').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Dolly Trailer"){
                $('#type34').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 1"){
                $('#type34').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 2"){
                $('#type34').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 3"){
                $('#type34').html('<option value="">Type</option><option value=" ">All</option>');
                }
            	}).trigger("change");    
	   
	   
   	   //--------------------------------------35     	
      	
   	   $('#sel35').on('change', function() {
                var type = document.getElementById("sel35").value;
            switch(type) {
                case "Single Rigid":
                      $("#pmfn35").removeAttr("disabled");
                      $("#pmreg35").removeAttr("disabled");
                      $("#ext35").removeAttr("disabled");
                      $("#t1fn35").attr("disabled", "disabled");
                      $("#t1reg35").attr("disabled", "disabled");
                      $("#t2fn35").attr("disabled", "disabled");
                      $("#t2reg35").attr("disabled", "disabled");
                        break;
                case "Bogie Rigid":
                   $("#pmfn35").removeAttr("disabled");
                   $("#pmreg35").removeAttr("disabled");
                   $("#ext35").removeAttr("disabled");
                   $("#t1fn35").attr("disabled", "disabled");
                   $("#t1reg35").attr("disabled", "disabled");
                   $("#t2fn35").attr("disabled", "disabled");
                   $("#t2reg35").attr("disabled", "disabled");
                     break;
                case "Prime Mover":
                  $("#pmfn35").removeAttr("disabled");
                    $("#pmreg35").removeAttr("disabled");
                    $("#ext35").removeAttr("disabled");
                    $("#t1fn35").attr("disabled", "disabled");
                    $("#t1reg35").attr("disabled", "disabled");
                    $("#t2fn35").attr("disabled", "disabled");
                    $("#t2reg35").attr("disabled", "disabled");
                break;
                
                case "Single Combination":
                    $("#t1fn35").removeAttr("disabled");
                    $("#t1reg35").removeAttr("disabled");
                    $("#ext35").removeAttr("disabled");    
                    $("#pmfn35").removeAttr("disabled");
                    $("#pmreg35").removeAttr("disabled");
                    $("#t2fn35").attr("disabled", "disabled");
                    $("#t2reg35").attr("disabled", "disabled");          
            break;
            
                case "B Double Combination":
                    

              	  $("#t1fn35").removeAttr("disabled");
                    $("#t2fn35").removeAttr("disabled");
                    $("#t1reg35").removeAttr("disabled");
                    $("#t2reg35").removeAttr("disabled");
                    $("#pmfn35").removeAttr("disabled");
                    $("#pmreg35").removeAttr("disabled");
                    $("#ext35").removeAttr("disabled");
                  
                    
                    break;
                    
                    
                case "Single Trailer":
                    $("#t1fn35").removeAttr("disabled");
                    $("#t1reg35").removeAttr("disabled");
                    $("#ext35").removeAttr("disabled");    
                    $("#pmfn35").attr("disabled", "disabled");
                    $("#pmreg35").attr("disabled", "disabled");
                    $("#t2fn35").attr("disabled", "disabled");
                    $("#t2reg35").attr("disabled", "disabled");
            break;
            
            
                case "B Double Trailer":
                    $("#t1fn35").removeAttr("disabled");
                    $("#t1reg35").removeAttr("disabled");
                    $("#ext35").removeAttr("disabled");    
                    $("#pmfn35").attr("disabled", "disabled");
                    $("#pmreg35").attr("disabled", "disabled");
                    $("#t2fn35").removeAttr("disabled");
                    $("#t2reg35").removeAttr("disabled");
            break;
            
                case "FORKLIFT":
                    $("#pmfn35").removeAttr("disabled");
                      $("#pmreg35").removeAttr("disabled");
                      $("#ext35").removeAttr("disabled");
                      $("#t1fn35").attr("disabled", "disabled");
                      $("#t1reg35").attr("disabled", "disabled");
                      $("#t2fn35").attr("disabled", "disabled");
                      $("#t2reg35").attr("disabled", "disabled");
                  break;
            
            
                
                case "VAN/UTE/CAR":
                      $("#pmfn35").removeAttr("disabled");
                      $("#pmreg35").removeAttr("disabled");
                      $("#ext35").removeAttr("disabled");
                        $("#t1fn35").attr("disabled", "disabled");
                        $("#t1reg35").attr("disabled", "disabled");
                        $("#t2fn35").attr("disabled", "disabled");
                        $("#t2reg35").attr("disabled", "disabled"); 
                break;
                
                case "Dolly Trailer":
                    $("#t1fn35").removeAttr("disabled");
                    $("#t1reg35").removeAttr("disabled");
                    $("#ext35").removeAttr("disabled");    
                    $("#pmfn35").attr("disabled", "disabled");
                    $("#pmreg35").attr("disabled", "disabled");
                    $("#t2fn35").attr("disabled", "disabled");
                    $("#t2reg35").attr("disabled", "disabled");
            break;
                case "Other 1":


            						$("#pmfn35").removeAttr("disabled");
            						$("#pmreg35").removeAttr("disabled");
            						$("#t1fn35").attr("disabled", "disabled");
                                    $("#t1reg35").attr("disabled", "disabled");
                                    $("#t2fn35").attr("disabled", "disabled");
                                    $("#t2reg35").attr("disabled", "disabled");
                                    $("#ext35").removeAttr("disabled");    
                                  
                                    
                                      
                                      break;
                                      
            					case "Other 2":
                

            						$("#pmfn35").removeAttr("disabled");
            						$("#pmreg35").removeAttr("disabled");
            						$("#t1fn35").removeAttr("disabled");
            						$("#t1reg35").removeAttr("disabled");
                                    $("#t2fn35").attr("disabled", "disabled");
                                    $("#t2reg35").attr("disabled", "disabled");
                                    $("#ext35").removeAttr("disabled");  
                
                  
                  break;
            					case "Other 3":
                

            						$("#pmfn35").removeAttr("disabled");
            						$("#pmreg35").removeAttr("disabled");
            						$("#t1fn35").removeAttr("disabled");
            						$("#t1reg35").removeAttr("disabled");
            						$("#t2fn35").removeAttr("disabled");
            						$("#t2reg35").removeAttr("disabled");
                                    $("#ext35").removeAttr("disabled");  
                
                  
                  break;
                 default:
                        $("#t1fn35").removeAttr("disabled");
                        $("#t2fn35").removeAttr("disabled");
                        $("#t1reg35").removeAttr("disabled");
                        $("#t2reg35").removeAttr("disabled");
                        $("#pmfn35").removeAttr("disabled");
                        $("#pmreg35").removeAttr("disabled");
                        $("#ext35").removeAttr("disabled");
                    break;
            } 
        	
            
            
            if(type == "Single Rigid"){
                $('#type35').html('<option value="">Type</option><option value="Box">Box</option><option value="Flat Top">Flat Top</option>');
                }
                if(type == "Bogie Rigid"){
                $('#type35').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Prime Mover"){
                $('#type35').html('<option value="">Type</option><option value="Day Cab">Day Cab</option><option value="Sleeper Cab">Sleeper Cab</option>');
                }
                if(type == "Single Combination"){
                $('#type35').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "B Double Combination"){
                $('#type35').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "Single Trailer"){
                $('#type35').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option>');
                }
                if(type == "B Double Trailer"){
                $('#type35').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "FORKLIFT"){
                $('#type35').html('<option value="">Type</option><option value="Small">Small</option><option value="Medium">Medium</option><option value="Large">Large</option>');
                }
                if(type == "VAN/UTE/CAR"){
                $('#type35').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Dolly Trailer"){
                $('#type35').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 1"){
                $('#type35').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 2"){
                $('#type35').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 3"){
                $('#type35').html('<option value="">Type</option><option value=" ">All</option>');
                }
            	}).trigger("change");
	   	   	   	   	   	   	   	      	   
   	   
   	   //--------------------------------------36     	
      	
   	   $('#sel36').on('change', function() {
                var type = document.getElementById("sel36").value;
            switch(type) {
                case "Single Rigid":
                      $("#pmfn36").removeAttr("disabled");
                      $("#pmreg36").removeAttr("disabled");
                      $("#ext36").removeAttr("disabled");
                      $("#t1fn36").attr("disabled", "disabled");
                      $("#t1reg36").attr("disabled", "disabled");
                      $("#t2fn36").attr("disabled", "disabled");
                      $("#t2reg36").attr("disabled", "disabled");
                        break;
                case "Bogie Rigid":
                   $("#pmfn36").removeAttr("disabled");
                   $("#pmreg36").removeAttr("disabled");
                   $("#ext36").removeAttr("disabled");
                   $("#t1fn36").attr("disabled", "disabled");
                   $("#t1reg36").attr("disabled", "disabled");
                   $("#t2fn36").attr("disabled", "disabled");
                   $("#t2reg36").attr("disabled", "disabled");
                     break;
                case "Prime Mover":
                  $("#pmfn36").removeAttr("disabled");
                    $("#pmreg36").removeAttr("disabled");
                    $("#ext36").removeAttr("disabled");
                    $("#t1fn36").attr("disabled", "disabled");
                    $("#t1reg36").attr("disabled", "disabled");
                    $("#t2fn36").attr("disabled", "disabled");
                    $("#t2reg36").attr("disabled", "disabled");
                break;
                
                case "Single Combination":
                    $("#t1fn36").removeAttr("disabled");
                    $("#t1reg36").removeAttr("disabled");
                    $("#ext36").removeAttr("disabled");    
                    $("#pmfn36").removeAttr("disabled");
                    $("#pmreg36").removeAttr("disabled");
                    $("#t2fn36").attr("disabled", "disabled");
                    $("#t2reg36").attr("disabled", "disabled");          
            break;
            
                case "B Double Combination":
                    

              	  $("#t1fn36").removeAttr("disabled");
                    $("#t2fn36").removeAttr("disabled");
                    $("#t1reg36").removeAttr("disabled");
                    $("#t2reg36").removeAttr("disabled");
                    $("#pmfn36").removeAttr("disabled");
                    $("#pmreg36").removeAttr("disabled");
                    $("#ext36").removeAttr("disabled");
                  
                    
                    break;
                    
                    
                case "Single Trailer":
                    $("#t1fn36").removeAttr("disabled");
                    $("#t1reg36").removeAttr("disabled");
                    $("#ext36").removeAttr("disabled");    
                    $("#pmfn36").attr("disabled", "disabled");
                    $("#pmreg36").attr("disabled", "disabled");
                    $("#t2fn36").attr("disabled", "disabled");
                    $("#t2reg36").attr("disabled", "disabled");
            break;
            
            
                case "B Double Trailer":
                    $("#t1fn36").removeAttr("disabled");
                    $("#t1reg36").removeAttr("disabled");
                    $("#ext36").removeAttr("disabled");    
                    $("#pmfn36").attr("disabled", "disabled");
                    $("#pmreg36").attr("disabled", "disabled");
                    $("#t2fn36").removeAttr("disabled");
                    $("#t2reg36").removeAttr("disabled");
            break;
            
                case "FORKLIFT":
                    $("#pmfn36").removeAttr("disabled");
                      $("#pmreg36").removeAttr("disabled");
                      $("#ext36").removeAttr("disabled");
                      $("#t1fn36").attr("disabled", "disabled");
                      $("#t1reg36").attr("disabled", "disabled");
                      $("#t2fn36").attr("disabled", "disabled");
                      $("#t2reg36").attr("disabled", "disabled");
                  break;
            
            
                
                case "VAN/UTE/CAR":
                      $("#pmfn36").removeAttr("disabled");
                      $("#pmreg36").removeAttr("disabled");
                      $("#ext36").removeAttr("disabled");
                        $("#t1fn36").attr("disabled", "disabled");
                        $("#t1reg36").attr("disabled", "disabled");
                        $("#t2fn36").attr("disabled", "disabled");
                        $("#t2reg36").attr("disabled", "disabled"); 
                break;
                
                case "Dolly Trailer":
                    $("#t1fn36").removeAttr("disabled");
                    $("#t1reg36").removeAttr("disabled");
                    $("#ext36").removeAttr("disabled");    
                    $("#pmfn36").attr("disabled", "disabled");
                    $("#pmreg36").attr("disabled", "disabled");
                    $("#t2fn36").attr("disabled", "disabled");
                    $("#t2reg36").attr("disabled", "disabled");
            break;
                case "Other 1":


            						$("#pmfn36").removeAttr("disabled");
            						$("#pmreg36").removeAttr("disabled");
            						$("#t1fn36").attr("disabled", "disabled");
                                    $("#t1reg36").attr("disabled", "disabled");
                                    $("#t2fn36").attr("disabled", "disabled");
                                    $("#t2reg36").attr("disabled", "disabled");
                                    $("#ext36").removeAttr("disabled");    
                                  
                                    
                                      
                                      break;
                                      
            					case "Other 2":
                

            						$("#pmfn36").removeAttr("disabled");
            						$("#pmreg36").removeAttr("disabled");
            						$("#t1fn36").removeAttr("disabled");
            						$("#t1reg36").removeAttr("disabled");
                                    $("#t2fn36").attr("disabled", "disabled");
                                    $("#t2reg36").attr("disabled", "disabled");
                                    $("#ext36").removeAttr("disabled");  
                
                  
                  break;
            					case "Other 3":
                

            						$("#pmfn36").removeAttr("disabled");
            						$("#pmreg36").removeAttr("disabled");
            						$("#t1fn36").removeAttr("disabled");
            						$("#t1reg36").removeAttr("disabled");
            						$("#t2fn36").removeAttr("disabled");
            						$("#t2reg36").removeAttr("disabled");
                                    $("#ext36").removeAttr("disabled");  
                
                  
                  break;
                 default:
                        $("#t1fn36").removeAttr("disabled");
                        $("#t2fn36").removeAttr("disabled");
                        $("#t1reg36").removeAttr("disabled");
                        $("#t2reg36").removeAttr("disabled");
                        $("#pmfn36").removeAttr("disabled");
                        $("#pmreg36").removeAttr("disabled");
                        $("#ext36").removeAttr("disabled");
                    break;
            } 
        	
            
            
            if(type == "Single Rigid"){
                $('#type36').html('<option value="">Type</option><option value="Box">Box</option><option value="Flat Top">Flat Top</option>');
                }
                if(type == "Bogie Rigid"){
                $('#type36').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Prime Mover"){
                $('#type36').html('<option value="">Type</option><option value="Day Cab">Day Cab</option><option value="Sleeper Cab">Sleeper Cab</option>');
                }
                if(type == "Single Combination"){
                $('#type36').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "B Double Combination"){
                $('#type36').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "Single Trailer"){
                $('#type36').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option>');
                }
                if(type == "B Double Trailer"){
                $('#type36').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "FORKLIFT"){
                $('#type36').html('<option value="">Type</option><option value="Small">Small</option><option value="Medium">Medium</option><option value="Large">Large</option>');
                }
                if(type == "VAN/UTE/CAR"){
                $('#type36').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Dolly Trailer"){
                $('#type36').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 1"){
                $('#type36').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 2"){
                $('#type36').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 3"){
                $('#type36').html('<option value="">Type</option><option value=" ">All</option>');
                }
            	}).trigger("change");       
	   
	     	   
   	   
   	   //--------------------------------------37     	
      	
   	   $('#sel37').on('change', function() {
                var type = document.getElementById("sel37").value;
            switch(type) {
                case "Single Rigid":
                      $("#pmfn37").removeAttr("disabled");
                      $("#pmreg37").removeAttr("disabled");
                      $("#ext37").removeAttr("disabled");
                      $("#t1fn37").attr("disabled", "disabled");
                      $("#t1reg37").attr("disabled", "disabled");
                      $("#t2fn37").attr("disabled", "disabled");
                      $("#t2reg37").attr("disabled", "disabled");
                        break;
                case "Bogie Rigid":
                   $("#pmfn37").removeAttr("disabled");
                   $("#pmreg37").removeAttr("disabled");
                   $("#ext37").removeAttr("disabled");
                   $("#t1fn37").attr("disabled", "disabled");
                   $("#t1reg37").attr("disabled", "disabled");
                   $("#t2fn37").attr("disabled", "disabled");
                   $("#t2reg37").attr("disabled", "disabled");
                     break;
                case "Prime Mover":
                  $("#pmfn37").removeAttr("disabled");
                    $("#pmreg37").removeAttr("disabled");
                    $("#ext37").removeAttr("disabled");
                    $("#t1fn37").attr("disabled", "disabled");
                    $("#t1reg37").attr("disabled", "disabled");
                    $("#t2fn37").attr("disabled", "disabled");
                    $("#t2reg37").attr("disabled", "disabled");
                break;
                
                case "Single Combination":
                    $("#t1fn37").removeAttr("disabled");
                    $("#t1reg37").removeAttr("disabled");
                    $("#ext37").removeAttr("disabled");    
                    $("#pmfn37").removeAttr("disabled");
                    $("#pmreg37").removeAttr("disabled");
                    $("#t2fn37").attr("disabled", "disabled");
                    $("#t2reg37").attr("disabled", "disabled");          
            break;
            
                case "B Double Combination":
                    

              	  $("#t1fn37").removeAttr("disabled");
                    $("#t2fn37").removeAttr("disabled");
                    $("#t1reg37").removeAttr("disabled");
                    $("#t2reg37").removeAttr("disabled");
                    $("#pmfn37").removeAttr("disabled");
                    $("#pmreg37").removeAttr("disabled");
                    $("#ext37").removeAttr("disabled");
                  
                    
                    break;
                    
                    
                case "Single Trailer":
                    $("#t1fn37").removeAttr("disabled");
                    $("#t1reg37").removeAttr("disabled");
                    $("#ext37").removeAttr("disabled");    
                    $("#pmfn37").attr("disabled", "disabled");
                    $("#pmreg37").attr("disabled", "disabled");
                    $("#t2fn37").attr("disabled", "disabled");
                    $("#t2reg37").attr("disabled", "disabled");
            break;
            
            
                case "B Double Trailer":
                    $("#t1fn37").removeAttr("disabled");
                    $("#t1reg37").removeAttr("disabled");
                    $("#ext37").removeAttr("disabled");    
                    $("#pmfn37").attr("disabled", "disabled");
                    $("#pmreg37").attr("disabled", "disabled");
                    $("#t2fn37").removeAttr("disabled");
                    $("#t2reg37").removeAttr("disabled");
            break;
            
                case "FORKLIFT":
                    $("#pmfn37").removeAttr("disabled");
                      $("#pmreg37").removeAttr("disabled");
                      $("#ext37").removeAttr("disabled");
                      $("#t1fn37").attr("disabled", "disabled");
                      $("#t1reg37").attr("disabled", "disabled");
                      $("#t2fn37").attr("disabled", "disabled");
                      $("#t2reg37").attr("disabled", "disabled");
                  break;
            
            
                
                case "VAN/UTE/CAR":
                      $("#pmfn37").removeAttr("disabled");
                      $("#pmreg37").removeAttr("disabled");
                      $("#ext37").removeAttr("disabled");
                        $("#t1fn37").attr("disabled", "disabled");
                        $("#t1reg37").attr("disabled", "disabled");
                        $("#t2fn37").attr("disabled", "disabled");
                        $("#t2reg37").attr("disabled", "disabled"); 
                break;
                
                case "Dolly Trailer":
                    $("#t1fn37").removeAttr("disabled");
                    $("#t1reg37").removeAttr("disabled");
                    $("#ext37").removeAttr("disabled");    
                    $("#pmfn37").attr("disabled", "disabled");
                    $("#pmreg37").attr("disabled", "disabled");
                    $("#t2fn37").attr("disabled", "disabled");
                    $("#t2reg37").attr("disabled", "disabled");
            break;
                case "Other 1":


            						$("#pmfn37").removeAttr("disabled");
            						$("#pmreg37").removeAttr("disabled");
            						$("#t1fn37").attr("disabled", "disabled");
                                    $("#t1reg37").attr("disabled", "disabled");
                                    $("#t2fn37").attr("disabled", "disabled");
                                    $("#t2reg37").attr("disabled", "disabled");
                                    $("#ext37").removeAttr("disabled");    
                                  
                                    
                                      
                                      break;
                                      
            					case "Other 2":
                

            						$("#pmfn37").removeAttr("disabled");
            						$("#pmreg37").removeAttr("disabled");
            						$("#t1fn37").removeAttr("disabled");
            						$("#t1reg37").removeAttr("disabled");
                                    $("#t2fn37").attr("disabled", "disabled");
                                    $("#t2reg37").attr("disabled", "disabled");
                                    $("#ext37").removeAttr("disabled");  
                
                  
                  break;
            					case "Other 3":
                

            						$("#pmfn37").removeAttr("disabled");
            						$("#pmreg37").removeAttr("disabled");
            						$("#t1fn37").removeAttr("disabled");
            						$("#t1reg37").removeAttr("disabled");
            						$("#t2fn37").removeAttr("disabled");
            						$("#t2reg37").removeAttr("disabled");
                                    $("#ext37").removeAttr("disabled");  
                
                  
                  break;
                 default:
                        $("#t1fn37").removeAttr("disabled");
                        $("#t2fn37").removeAttr("disabled");
                        $("#t1reg37").removeAttr("disabled");
                        $("#t2reg37").removeAttr("disabled");
                        $("#pmfn37").removeAttr("disabled");
                        $("#pmreg37").removeAttr("disabled");
                        $("#ext37").removeAttr("disabled");
                    break;
            } 
        	
            
            
            if(type == "Single Rigid"){
                $('#type37').html('<option value="">Type</option><option value="Box">Box</option><option value="Flat Top">Flat Top</option>');
                }
                if(type == "Bogie Rigid"){
                $('#type37').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Prime Mover"){
                $('#type37').html('<option value="">Type</option><option value="Day Cab">Day Cab</option><option value="Sleeper Cab">Sleeper Cab</option>');
                }
                if(type == "Single Combination"){
                $('#type37').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "B Double Combination"){
                $('#type37').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "Single Trailer"){
                $('#type37').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option>');
                }
                if(type == "B Double Trailer"){
                $('#type37').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "FORKLIFT"){
                $('#type37').html('<option value="">Type</option><option value="Small">Small</option><option value="Medium">Medium</option><option value="Large">Large</option>');
                }
                if(type == "VAN/UTE/CAR"){
                $('#type37').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Dolly Trailer"){
                $('#type37').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 1"){
                $('#type37').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 2"){
                $('#type37').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 3"){
                $('#type37').html('<option value="">Type</option><option value=" ">All</option>');
                }
            	}).trigger("change");
	   
	      	   
   	   //--------------------------------------38     	
      	
   	   $('#sel38').on('change', function() {
                var type = document.getElementById("sel38").value;
            switch(type) {
                case "Single Rigid":
                      $("#pmfn38").removeAttr("disabled");
                      $("#pmreg38").removeAttr("disabled");
                      $("#ext38").removeAttr("disabled");
                      $("#t1fn38").attr("disabled", "disabled");
                      $("#t1reg38").attr("disabled", "disabled");
                      $("#t2fn38").attr("disabled", "disabled");
                      $("#t2reg38").attr("disabled", "disabled");
                        break;
                case "Bogie Rigid":
                   $("#pmfn38").removeAttr("disabled");
                   $("#pmreg38").removeAttr("disabled");
                   $("#ext38").removeAttr("disabled");
                   $("#t1fn38").attr("disabled", "disabled");
                   $("#t1reg38").attr("disabled", "disabled");
                   $("#t2fn38").attr("disabled", "disabled");
                   $("#t2reg38").attr("disabled", "disabled");
                     break;
                case "Prime Mover":
                  $("#pmfn38").removeAttr("disabled");
                    $("#pmreg38").removeAttr("disabled");
                    $("#ext38").removeAttr("disabled");
                    $("#t1fn38").attr("disabled", "disabled");
                    $("#t1reg38").attr("disabled", "disabled");
                    $("#t2fn38").attr("disabled", "disabled");
                    $("#t2reg38").attr("disabled", "disabled");
                break;
                
                case "Single Combination":
                    $("#t1fn38").removeAttr("disabled");
                    $("#t1reg38").removeAttr("disabled");
                    $("#ext38").removeAttr("disabled");    
                    $("#pmfn38").removeAttr("disabled");
                    $("#pmreg38").removeAttr("disabled");
                    $("#t2fn38").attr("disabled", "disabled");
                    $("#t2reg38").attr("disabled", "disabled");          
            break;
            
                case "B Double Combination":
                    

              	  $("#t1fn38").removeAttr("disabled");
                    $("#t2fn38").removeAttr("disabled");
                    $("#t1reg38").removeAttr("disabled");
                    $("#t2reg38").removeAttr("disabled");
                    $("#pmfn38").removeAttr("disabled");
                    $("#pmreg38").removeAttr("disabled");
                    $("#ext38").removeAttr("disabled");
                  
                    
                    break;
                    
                    
                case "Single Trailer":
                    $("#t1fn38").removeAttr("disabled");
                    $("#t1reg38").removeAttr("disabled");
                    $("#ext38").removeAttr("disabled");    
                    $("#pmfn38").attr("disabled", "disabled");
                    $("#pmreg38").attr("disabled", "disabled");
                    $("#t2fn38").attr("disabled", "disabled");
                    $("#t2reg38").attr("disabled", "disabled");
            break;
            
            
                case "B Double Trailer":
                    $("#t1fn38").removeAttr("disabled");
                    $("#t1reg38").removeAttr("disabled");
                    $("#ext38").removeAttr("disabled");    
                    $("#pmfn38").attr("disabled", "disabled");
                    $("#pmreg38").attr("disabled", "disabled");
                    $("#t2fn38").removeAttr("disabled");
                    $("#t2reg38").removeAttr("disabled");
            break;
            
                case "FORKLIFT":
                    $("#pmfn38").removeAttr("disabled");
                      $("#pmreg38").removeAttr("disabled");
                      $("#ext38").removeAttr("disabled");
                      $("#t1fn38").attr("disabled", "disabled");
                      $("#t1reg38").attr("disabled", "disabled");
                      $("#t2fn38").attr("disabled", "disabled");
                      $("#t2reg38").attr("disabled", "disabled");
                  break;
            
            
                
                case "VAN/UTE/CAR":
                      $("#pmfn38").removeAttr("disabled");
                      $("#pmreg38").removeAttr("disabled");
                      $("#ext38").removeAttr("disabled");
                        $("#t1fn38").attr("disabled", "disabled");
                        $("#t1reg38").attr("disabled", "disabled");
                        $("#t2fn38").attr("disabled", "disabled");
                        $("#t2reg38").attr("disabled", "disabled"); 
                break;
                
                case "Dolly Trailer":
                    $("#t1fn38").removeAttr("disabled");
                    $("#t1reg38").removeAttr("disabled");
                    $("#ext38").removeAttr("disabled");    
                    $("#pmfn38").attr("disabled", "disabled");
                    $("#pmreg38").attr("disabled", "disabled");
                    $("#t2fn38").attr("disabled", "disabled");
                    $("#t2reg38").attr("disabled", "disabled");
            break;
                case "Other 1":


            						$("#pmfn38").removeAttr("disabled");
            						$("#pmreg38").removeAttr("disabled");
            						$("#t1fn38").attr("disabled", "disabled");
                                    $("#t1reg38").attr("disabled", "disabled");
                                    $("#t2fn38").attr("disabled", "disabled");
                                    $("#t2reg38").attr("disabled", "disabled");
                                    $("#ext38").removeAttr("disabled");    
                                  
                                    
                                      
                                      break;
                                      
            					case "Other 2":
                

            						$("#pmfn38").removeAttr("disabled");
            						$("#pmreg38").removeAttr("disabled");
            						$("#t1fn38").removeAttr("disabled");
            						$("#t1reg38").removeAttr("disabled");
                                    $("#t2fn38").attr("disabled", "disabled");
                                    $("#t2reg38").attr("disabled", "disabled");
                                    $("#ext38").removeAttr("disabled");  
                
                  
                  break;
            					case "Other 3":
                

            						$("#pmfn38").removeAttr("disabled");
            						$("#pmreg38").removeAttr("disabled");
            						$("#t1fn38").removeAttr("disabled");
            						$("#t1reg38").removeAttr("disabled");
            						$("#t2fn38").removeAttr("disabled");
            						$("#t2reg38").removeAttr("disabled");
                                    $("#ext38").removeAttr("disabled");  
                
                  
                  break;
                 default:
                        $("#t1fn38").removeAttr("disabled");
                        $("#t2fn38").removeAttr("disabled");
                        $("#t1reg38").removeAttr("disabled");
                        $("#t2reg38").removeAttr("disabled");
                        $("#pmfn38").removeAttr("disabled");
                        $("#pmreg38").removeAttr("disabled");
                        $("#ext38").removeAttr("disabled");
                    break;
            } 
        	
            
            if(type == "Single Rigid"){
                $('#type38').html('<option value="">Type</option><option value="Box">Box</option><option value="Flat Top">Flat Top</option>');
                }
                if(type == "Bogie Rigid"){
                $('#type38').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Prime Mover"){
                $('#type38').html('<option value="">Type</option><option value="Day Cab">Day Cab</option><option value="Sleeper Cab">Sleeper Cab</option>');
                }
                if(type == "Single Combination"){
                $('#type38').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "B Double Combination"){
                $('#type38').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "Single Trailer"){
                $('#type38').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option>');
                }
                if(type == "B Double Trailer"){
                $('#type38').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "FORKLIFT"){
                $('#type38').html('<option value="">Type</option><option value="Small">Small</option><option value="Medium">Medium</option><option value="Large">Large</option>');
                }
                if(type == "VAN/UTE/CAR"){
                $('#type38').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Dolly Trailer"){
                $('#type38').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 1"){
                $('#type38').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 2"){
                $('#type38').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 3"){
                $('#type38').html('<option value="">Type</option><option value=" ">All</option>');
                }
            	}).trigger("change");
   	   
   	   //--------------------------------------39     	
      	
   	   $('#sel39').on('change', function() {
                var type = document.getElementById("sel39").value;
            switch(type) {
                case "Single Rigid":
                      $("#pmfn39").removeAttr("disabled");
                      $("#pmreg39").removeAttr("disabled");
                      $("#ext39").removeAttr("disabled");
                      $("#t1fn39").attr("disabled", "disabled");
                      $("#t1reg39").attr("disabled", "disabled");
                      $("#t2fn39").attr("disabled", "disabled");
                      $("#t2reg39").attr("disabled", "disabled");
                        break;
                case "Bogie Rigid":
                   $("#pmfn39").removeAttr("disabled");
                   $("#pmreg39").removeAttr("disabled");
                   $("#ext39").removeAttr("disabled");
                   $("#t1fn39").attr("disabled", "disabled");
                   $("#t1reg39").attr("disabled", "disabled");
                   $("#t2fn39").attr("disabled", "disabled");
                   $("#t2reg39").attr("disabled", "disabled");
                     break;
                case "Prime Mover":
                  $("#pmfn39").removeAttr("disabled");
                    $("#pmreg39").removeAttr("disabled");
                    $("#ext39").removeAttr("disabled");
                    $("#t1fn39").attr("disabled", "disabled");
                    $("#t1reg39").attr("disabled", "disabled");
                    $("#t2fn39").attr("disabled", "disabled");
                    $("#t2reg39").attr("disabled", "disabled");
                break;
                
                case "Single Combination":
                    $("#t1fn39").removeAttr("disabled");
                    $("#t1reg39").removeAttr("disabled");
                    $("#ext39").removeAttr("disabled");    
                    $("#pmfn39").removeAttr("disabled");
                    $("#pmreg39").removeAttr("disabled");
                    $("#t2fn39").attr("disabled", "disabled");
                    $("#t2reg39").attr("disabled", "disabled");          
            break;
            
                case "B Double Combination":
                    

              	  $("#t1fn39").removeAttr("disabled");
                    $("#t2fn39").removeAttr("disabled");
                    $("#t1reg39").removeAttr("disabled");
                    $("#t2reg39").removeAttr("disabled");
                    $("#pmfn39").removeAttr("disabled");
                    $("#pmreg39").removeAttr("disabled");
                    $("#ext39").removeAttr("disabled");
                  
                    
                    break;
                    
                    
                case "Single Trailer":
                    $("#t1fn39").removeAttr("disabled");
                    $("#t1reg39").removeAttr("disabled");
                    $("#ext39").removeAttr("disabled");    
                    $("#pmfn39").attr("disabled", "disabled");
                    $("#pmreg39").attr("disabled", "disabled");
                    $("#t2fn39").attr("disabled", "disabled");
                    $("#t2reg39").attr("disabled", "disabled");
            break;
            
            
                case "B Double Trailer":
                    $("#t1fn39").removeAttr("disabled");
                    $("#t1reg39").removeAttr("disabled");
                    $("#ext39").removeAttr("disabled");    
                    $("#pmfn39").attr("disabled", "disabled");
                    $("#pmreg39").attr("disabled", "disabled");
                    $("#t2fn39").removeAttr("disabled");
                    $("#t2reg39").removeAttr("disabled");
            break;
            
                case "FORKLIFT":
                    $("#pmfn39").removeAttr("disabled");
                      $("#pmreg39").removeAttr("disabled");
                      $("#ext39").removeAttr("disabled");
                      $("#t1fn39").attr("disabled", "disabled");
                      $("#t1reg39").attr("disabled", "disabled");
                      $("#t2fn39").attr("disabled", "disabled");
                      $("#t2reg39").attr("disabled", "disabled");
                  break;
            
            
                
                case "VAN/UTE/CAR":
                      $("#pmfn39").removeAttr("disabled");
                      $("#pmreg39").removeAttr("disabled");
                      $("#ext39").removeAttr("disabled");
                        $("#t1fn39").attr("disabled", "disabled");
                        $("#t1reg39").attr("disabled", "disabled");
                        $("#t2fn39").attr("disabled", "disabled");
                        $("#t2reg39").attr("disabled", "disabled"); 
                break;
                
                case "Dolly Trailer":
                    $("#t1fn39").removeAttr("disabled");
                    $("#t1reg39").removeAttr("disabled");
                    $("#ext39").removeAttr("disabled");    
                    $("#pmfn39").attr("disabled", "disabled");
                    $("#pmreg39").attr("disabled", "disabled");
                    $("#t2fn39").attr("disabled", "disabled");
                    $("#t2reg39").attr("disabled", "disabled");
            break;
                case "Other 1":


            						$("#pmfn39").removeAttr("disabled");
            						$("#pmreg39").removeAttr("disabled");
            						$("#t1fn39").attr("disabled", "disabled");
                                    $("#t1reg39").attr("disabled", "disabled");
                                    $("#t2fn39").attr("disabled", "disabled");
                                    $("#t2reg39").attr("disabled", "disabled");
                                    $("#ext39").removeAttr("disabled");    
                                  
                                    
                                      
                                      break;
                                      
            					case "Other 2":
                

            						$("#pmfn39").removeAttr("disabled");
            						$("#pmreg39").removeAttr("disabled");
            						$("#t1fn39").removeAttr("disabled");
            						$("#t1reg39").removeAttr("disabled");
                                    $("#t2fn39").attr("disabled", "disabled");
                                    $("#t2reg39").attr("disabled", "disabled");
                                    $("#ext39").removeAttr("disabled");  
                
                  
                  break;
            					case "Other 3":
                

            						$("#pmfn39").removeAttr("disabled");
            						$("#pmreg39").removeAttr("disabled");
            						$("#t1fn39").removeAttr("disabled");
            						$("#t1reg39").removeAttr("disabled");
            						$("#t2fn39").removeAttr("disabled");
            						$("#t2reg39").removeAttr("disabled");
                                    $("#ext39").removeAttr("disabled");  
                
                  
                  break;
                 default:
                        $("#t1fn39").removeAttr("disabled");
                        $("#t2fn39").removeAttr("disabled");
                        $("#t1reg39").removeAttr("disabled");
                        $("#t2reg39").removeAttr("disabled");
                        $("#pmfn39").removeAttr("disabled");
                        $("#pmreg39").removeAttr("disabled");
                        $("#ext39").removeAttr("disabled");
                    break;
            } 
        	
            
            if(type == "Single Rigid"){
                $('#type39').html('<option value="">Type</option><option value="Box">Box</option><option value="Flat Top">Flat Top</option>');
                }
                if(type == "Bogie Rigid"){
                $('#type39').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Prime Mover"){
                $('#type39').html('<option value="">Type</option><option value="Day Cab">Day Cab</option><option value="Sleeper Cab">Sleeper Cab</option>');
                }
                if(type == "Single Combination"){
                $('#type39').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "B Double Combination"){
                $('#type39').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "Single Trailer"){
                $('#type39').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option>');
                }
                if(type == "B Double Trailer"){
                $('#type39').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "FORKLIFT"){
                $('#type39').html('<option value="">Type</option><option value="Small">Small</option><option value="Medium">Medium</option><option value="Large">Large</option>');
                }
                if(type == "VAN/UTE/CAR"){
                $('#type39').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Dolly Trailer"){
                $('#type39').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 1"){
                $('#type39').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 2"){
                $('#type39').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 3"){
                $('#type39').html('<option value="">Type</option><option value=" ">All</option>');
                }
            	}).trigger("change");
	     	   
   	   //--------------------------------------40     	
      	
   	   $('#sel40').on('change', function() {
                var type = document.getElementById("sel40").value;
            switch(type) {
                case "Single Rigid":
                      $("#pmfn40").removeAttr("disabled");
                      $("#pmreg40").removeAttr("disabled");
                      $("#ext40").removeAttr("disabled");
                      $("#t1fn40").attr("disabled", "disabled");
                      $("#t1reg40").attr("disabled", "disabled");
                      $("#t2fn40").attr("disabled", "disabled");
                      $("#t2reg40").attr("disabled", "disabled");
                        break;
                case "Bogie Rigid":
                   $("#pmfn40").removeAttr("disabled");
                   $("#pmreg40").removeAttr("disabled");
                   $("#ext40").removeAttr("disabled");
                   $("#t1fn40").attr("disabled", "disabled");
                   $("#t1reg40").attr("disabled", "disabled");
                   $("#t2fn40").attr("disabled", "disabled");
                   $("#t2reg40").attr("disabled", "disabled");
                     break;
                case "Prime Mover":
                  $("#pmfn40").removeAttr("disabled");
                    $("#pmreg40").removeAttr("disabled");
                    $("#ext40").removeAttr("disabled");
                    $("#t1fn40").attr("disabled", "disabled");
                    $("#t1reg40").attr("disabled", "disabled");
                    $("#t2fn40").attr("disabled", "disabled");
                    $("#t2reg40").attr("disabled", "disabled");
                break;
                
                case "Single Combination":
                    $("#t1fn40").removeAttr("disabled");
                    $("#t1reg40").removeAttr("disabled");
                    $("#ext40").removeAttr("disabled");    
                    $("#pmfn40").removeAttr("disabled");
                    $("#pmreg40").removeAttr("disabled");
                    $("#t2fn40").attr("disabled", "disabled");
                    $("#t2reg40").attr("disabled", "disabled");          
            break;
            
                case "B Double Combination":
                    

              	  $("#t1fn40").removeAttr("disabled");
                    $("#t2fn40").removeAttr("disabled");
                    $("#t1reg40").removeAttr("disabled");
                    $("#t2reg40").removeAttr("disabled");
                    $("#pmfn40").removeAttr("disabled");
                    $("#pmreg40").removeAttr("disabled");
                    $("#ext40").removeAttr("disabled");
                  
                    
                    break;
                    
                    
                case "Single Trailer":
                    $("#t1fn40").removeAttr("disabled");
                    $("#t1reg40").removeAttr("disabled");
                    $("#ext40").removeAttr("disabled");    
                    $("#pmfn40").attr("disabled", "disabled");
                    $("#pmreg40").attr("disabled", "disabled");
                    $("#t2fn40").attr("disabled", "disabled");
                    $("#t2reg40").attr("disabled", "disabled");
            break;
            
            
                case "B Double Trailer":
                    $("#t1fn40").removeAttr("disabled");
                    $("#t1reg40").removeAttr("disabled");
                    $("#ext40").removeAttr("disabled");    
                    $("#pmfn40").attr("disabled", "disabled");
                    $("#pmreg40").attr("disabled", "disabled");
                    $("#t2fn40").removeAttr("disabled");
                    $("#t2reg40").removeAttr("disabled");
            break;
            
                case "FORKLIFT":
                    $("#pmfn40").removeAttr("disabled");
                      $("#pmreg40").removeAttr("disabled");
                      $("#ext40").removeAttr("disabled");
                      $("#t1fn40").attr("disabled", "disabled");
                      $("#t1reg40").attr("disabled", "disabled");
                      $("#t2fn40").attr("disabled", "disabled");
                      $("#t2reg40").attr("disabled", "disabled");
                  break;
            
            
                
                case "VAN/UTE/CAR":
                      $("#pmfn40").removeAttr("disabled");
                      $("#pmreg40").removeAttr("disabled");
                      $("#ext40").removeAttr("disabled");
                        $("#t1fn40").attr("disabled", "disabled");
                        $("#t1reg40").attr("disabled", "disabled");
                        $("#t2fn40").attr("disabled", "disabled");
                        $("#t2reg40").attr("disabled", "disabled"); 
                break;
                
                case "Dolly Trailer":
                    $("#t1fn40").removeAttr("disabled");
                    $("#t1reg40").removeAttr("disabled");
                    $("#ext40").removeAttr("disabled");    
                    $("#pmfn40").attr("disabled", "disabled");
                    $("#pmreg40").attr("disabled", "disabled");
                    $("#t2fn40").attr("disabled", "disabled");
                    $("#t2reg40").attr("disabled", "disabled");
            break;
                case "Other 1":


            						$("#pmfn40").removeAttr("disabled");
            						$("#pmreg40").removeAttr("disabled");
            						$("#t1fn40").attr("disabled", "disabled");
                                    $("#t1reg40").attr("disabled", "disabled");
                                    $("#t2fn40").attr("disabled", "disabled");
                                    $("#t2reg40").attr("disabled", "disabled");
                                    $("#ext40").removeAttr("disabled");    
                                  
                                    
                                      
                                      break;
                                      
            					case "Other 2":
                

            						$("#pmfn40").removeAttr("disabled");
            						$("#pmreg40").removeAttr("disabled");
            						$("#t1fn40").removeAttr("disabled");
            						$("#t1reg40").removeAttr("disabled");
                                    $("#t2fn40").attr("disabled", "disabled");
                                    $("#t2reg40").attr("disabled", "disabled");
                                    $("#ext40").removeAttr("disabled");  
                
                  
                  break;
            					case "Other 3":
                

            						$("#pmfn40").removeAttr("disabled");
            						$("#pmreg40").removeAttr("disabled");
            						$("#t1fn40").removeAttr("disabled");
            						$("#t1reg40").removeAttr("disabled");
            						$("#t2fn40").removeAttr("disabled");
            						$("#t2reg40").removeAttr("disabled");
                                    $("#ext40").removeAttr("disabled");  
                
                  
                  break;
                 default:
                        $("#t1fn40").removeAttr("disabled");
                        $("#t2fn40").removeAttr("disabled");
                        $("#t1reg40").removeAttr("disabled");
                        $("#t2reg40").removeAttr("disabled");
                        $("#pmfn40").removeAttr("disabled");
                        $("#pmreg40").removeAttr("disabled");
                        $("#ext40").removeAttr("disabled");
                    break;
            } 
        	
            
            
            if(type == "Single Rigid"){
                $('#type40').html('<option value="">Type</option><option value="Box">Box</option><option value="Flat Top">Flat Top</option>');
                }
                if(type == "Bogie Rigid"){
                $('#type40').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Prime Mover"){
                $('#type40').html('<option value="">Type</option><option value="Day Cab">Day Cab</option><option value="Sleeper Cab">Sleeper Cab</option>');
                }
                if(type == "Single Combination"){
                $('#type40').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "B Double Combination"){
                $('#type40').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "Single Trailer"){
                $('#type40').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option>');
                }
                if(type == "B Double Trailer"){
                $('#type40').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "FORKLIFT"){
                $('#type40').html('<option value="">Type</option><option value="Small">Small</option><option value="Medium">Medium</option><option value="Large">Large</option>');
                }
                if(type == "VAN/UTE/CAR"){
                $('#type40').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Dolly Trailer"){
                $('#type40').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 1"){
                $('#type40').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 2"){
                $('#type40').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 3"){
                $('#type40').html('<option value="">Type</option><option value=" ">All</option>');
                }
            	}).trigger("change");
	      	   
   	   
   	   //--------------------------------------41     	
      	
   	   $('#sel41').on('change', function() {
                var type = document.getElementById("sel41").value;
            switch(type) {
                case "Single Rigid":
                      $("#pmfn41").removeAttr("disabled");
                      $("#pmreg41").removeAttr("disabled");
                      $("#ext41").removeAttr("disabled");
                      $("#t1fn41").attr("disabled", "disabled");
                      $("#t1reg41").attr("disabled", "disabled");
                      $("#t2fn41").attr("disabled", "disabled");
                      $("#t2reg41").attr("disabled", "disabled");
                        break;
                case "Bogie Rigid":
                   $("#pmfn41").removeAttr("disabled");
                   $("#pmreg41").removeAttr("disabled");
                   $("#ext41").removeAttr("disabled");
                   $("#t1fn41").attr("disabled", "disabled");
                   $("#t1reg41").attr("disabled", "disabled");
                   $("#t2fn41").attr("disabled", "disabled");
                   $("#t2reg41").attr("disabled", "disabled");
                     break;
                case "Prime Mover":
                  $("#pmfn41").removeAttr("disabled");
                    $("#pmreg41").removeAttr("disabled");
                    $("#ext41").removeAttr("disabled");
                    $("#t1fn41").attr("disabled", "disabled");
                    $("#t1reg41").attr("disabled", "disabled");
                    $("#t2fn41").attr("disabled", "disabled");
                    $("#t2reg41").attr("disabled", "disabled");
                break;
                
                case "Single Combination":
                    $("#t1fn41").removeAttr("disabled");
                    $("#t1reg41").removeAttr("disabled");
                    $("#ext41").removeAttr("disabled");    
                    $("#pmfn41").removeAttr("disabled");
                    $("#pmreg41").removeAttr("disabled");
                    $("#t2fn41").attr("disabled", "disabled");
                    $("#t2reg41").attr("disabled", "disabled");          
            break;
            
                case "B Double Combination":
                    

              	  $("#t1fn41").removeAttr("disabled");
                    $("#t2fn41").removeAttr("disabled");
                    $("#t1reg41").removeAttr("disabled");
                    $("#t2reg41").removeAttr("disabled");
                    $("#pmfn41").removeAttr("disabled");
                    $("#pmreg41").removeAttr("disabled");
                    $("#ext41").removeAttr("disabled");
                  
                    
                    break;
                    
                    
                case "Single Trailer":
                    $("#t1fn41").removeAttr("disabled");
                    $("#t1reg41").removeAttr("disabled");
                    $("#ext41").removeAttr("disabled");    
                    $("#pmfn41").attr("disabled", "disabled");
                    $("#pmreg41").attr("disabled", "disabled");
                    $("#t2fn41").attr("disabled", "disabled");
                    $("#t2reg41").attr("disabled", "disabled");
            break;
            
            
                case "B Double Trailer":
                    $("#t1fn41").removeAttr("disabled");
                    $("#t1reg41").removeAttr("disabled");
                    $("#ext41").removeAttr("disabled");    
                    $("#pmfn41").attr("disabled", "disabled");
                    $("#pmreg41").attr("disabled", "disabled");
                    $("#t2fn41").removeAttr("disabled");
                    $("#t2reg41").removeAttr("disabled");
            break;
            
                case "FORKLIFT":
                    $("#pmfn41").removeAttr("disabled");
                      $("#pmreg41").removeAttr("disabled");
                      $("#ext41").removeAttr("disabled");
                      $("#t1fn41").attr("disabled", "disabled");
                      $("#t1reg41").attr("disabled", "disabled");
                      $("#t2fn41").attr("disabled", "disabled");
                      $("#t2reg41").attr("disabled", "disabled");
                  break;
            
            
                
                case "VAN/UTE/CAR":
                      $("#pmfn41").removeAttr("disabled");
                      $("#pmreg41").removeAttr("disabled");
                      $("#ext41").removeAttr("disabled");
                        $("#t1fn41").attr("disabled", "disabled");
                        $("#t1reg41").attr("disabled", "disabled");
                        $("#t2fn41").attr("disabled", "disabled");
                        $("#t2reg41").attr("disabled", "disabled"); 
                break;
                
                case "Dolly Trailer":
                    $("#t1fn41").removeAttr("disabled");
                    $("#t1reg41").removeAttr("disabled");
                    $("#ext41").removeAttr("disabled");    
                    $("#pmfn41").attr("disabled", "disabled");
                    $("#pmreg41").attr("disabled", "disabled");
                    $("#t2fn41").attr("disabled", "disabled");
                    $("#t2reg41").attr("disabled", "disabled");
            break;
                case "Other 1":


            						$("#pmfn41").removeAttr("disabled");
            						$("#pmreg41").removeAttr("disabled");
            						$("#t1fn41").attr("disabled", "disabled");
                                    $("#t1reg41").attr("disabled", "disabled");
                                    $("#t2fn41").attr("disabled", "disabled");
                                    $("#t2reg41").attr("disabled", "disabled");
                                    $("#ext41").removeAttr("disabled");    
                                  
                                    
                                      
                                      break;
                                      
            					case "Other 2":
                

            						$("#pmfn41").removeAttr("disabled");
            						$("#pmreg41").removeAttr("disabled");
            						$("#t1fn41").removeAttr("disabled");
            						$("#t1reg41").removeAttr("disabled");
                                    $("#t2fn41").attr("disabled", "disabled");
                                    $("#t2reg41").attr("disabled", "disabled");
                                    $("#ext41").removeAttr("disabled");  
                
                  
                  break;
            					case "Other 3":
                

            						$("#pmfn41").removeAttr("disabled");
            						$("#pmreg41").removeAttr("disabled");
            						$("#t1fn41").removeAttr("disabled");
            						$("#t1reg41").removeAttr("disabled");
            						$("#t2fn41").removeAttr("disabled");
            						$("#t2reg41").removeAttr("disabled");
                                    $("#ext41").removeAttr("disabled");  
                
                  
                  break;
                 default:
                        $("#t1fn41").removeAttr("disabled");
                        $("#t2fn41").removeAttr("disabled");
                        $("#t1reg41").removeAttr("disabled");
                        $("#t2reg41").removeAttr("disabled");
                        $("#pmfn41").removeAttr("disabled");
                        $("#pmreg41").removeAttr("disabled");
                        $("#ext41").removeAttr("disabled");
                    break;
            } 
        	
            
            
            if(type == "Single Rigid"){
                $('#type41').html('<option value="">Type</option><option value="Box">Box</option><option value="Flat Top">Flat Top</option>');
                }
                if(type == "Bogie Rigid"){
                $('#type41').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Prime Mover"){
                $('#type41').html('<option value="">Type</option><option value="Day Cab">Day Cab</option><option value="Sleeper Cab">Sleeper Cab</option>');
                }
                if(type == "Single Combination"){
                $('#type41').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "B Double Combination"){
                $('#type41').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "Single Trailer"){
                $('#type41').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option>');
                }
                if(type == "B Double Trailer"){
                $('#type41').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "FORKLIFT"){
                $('#type41').html('<option value="">Type</option><option value="Small">Small</option><option value="Medium">Medium</option><option value="Large">Large</option>');
                }
                if(type == "VAN/UTE/CAR"){
                $('#type41').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Dolly Trailer"){
                $('#type41').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 1"){
                $('#type41').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 2"){
                $('#type41').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 3"){
                $('#type41').html('<option value="">Type</option><option value=" ">All</option>');
                }
            	}).trigger("change");
	     	   
   	   
   	   //--------------------------------------42     	
      	
   	   $('#sel42').on('change', function() {
                var type = document.getElementById("sel42").value;
            switch(type) {
                case "Single Rigid":
                      $("#pmfn42").removeAttr("disabled");
                      $("#pmreg42").removeAttr("disabled");
                      $("#ext42").removeAttr("disabled");
                      $("#t1fn42").attr("disabled", "disabled");
                      $("#t1reg42").attr("disabled", "disabled");
                      $("#t2fn42").attr("disabled", "disabled");
                      $("#t2reg42").attr("disabled", "disabled");
                        break;
                case "Bogie Rigid":
                   $("#pmfn42").removeAttr("disabled");
                   $("#pmreg42").removeAttr("disabled");
                   $("#ext42").removeAttr("disabled");
                   $("#t1fn42").attr("disabled", "disabled");
                   $("#t1reg42").attr("disabled", "disabled");
                   $("#t2fn42").attr("disabled", "disabled");
                   $("#t2reg42").attr("disabled", "disabled");
                     break;
                case "Prime Mover":
                  $("#pmfn42").removeAttr("disabled");
                    $("#pmreg42").removeAttr("disabled");
                    $("#ext42").removeAttr("disabled");
                    $("#t1fn42").attr("disabled", "disabled");
                    $("#t1reg42").attr("disabled", "disabled");
                    $("#t2fn42").attr("disabled", "disabled");
                    $("#t2reg42").attr("disabled", "disabled");
                break;
                
                case "Single Combination":
                    $("#t1fn42").removeAttr("disabled");
                    $("#t1reg42").removeAttr("disabled");
                    $("#ext42").removeAttr("disabled");    
                    $("#pmfn42").removeAttr("disabled");
                    $("#pmreg42").removeAttr("disabled");
                    $("#t2fn42").attr("disabled", "disabled");
                    $("#t2reg42").attr("disabled", "disabled");          
            break;
            
                case "B Double Combination":
                    

              	  $("#t1fn42").removeAttr("disabled");
                    $("#t2fn42").removeAttr("disabled");
                    $("#t1reg42").removeAttr("disabled");
                    $("#t2reg42").removeAttr("disabled");
                    $("#pmfn42").removeAttr("disabled");
                    $("#pmreg42").removeAttr("disabled");
                    $("#ext42").removeAttr("disabled");
                  
                    
                    break;
                    
                    
                case "Single Trailer":
                    $("#t1fn42").removeAttr("disabled");
                    $("#t1reg42").removeAttr("disabled");
                    $("#ext42").removeAttr("disabled");    
                    $("#pmfn42").attr("disabled", "disabled");
                    $("#pmreg42").attr("disabled", "disabled");
                    $("#t2fn42").attr("disabled", "disabled");
                    $("#t2reg42").attr("disabled", "disabled");
            break;
            
            
                case "B Double Trailer":
                    $("#t1fn42").removeAttr("disabled");
                    $("#t1reg42").removeAttr("disabled");
                    $("#ext42").removeAttr("disabled");    
                    $("#pmfn42").attr("disabled", "disabled");
                    $("#pmreg42").attr("disabled", "disabled");
                    $("#t2fn42").removeAttr("disabled");
                    $("#t2reg42").removeAttr("disabled");
            break;
            
                case "FORKLIFT":
                    $("#pmfn42").removeAttr("disabled");
                      $("#pmreg42").removeAttr("disabled");
                      $("#ext42").removeAttr("disabled");
                      $("#t1fn42").attr("disabled", "disabled");
                      $("#t1reg42").attr("disabled", "disabled");
                      $("#t2fn42").attr("disabled", "disabled");
                      $("#t2reg42").attr("disabled", "disabled");
                  break;
            
            
                
                case "VAN/UTE/CAR":
                      $("#pmfn42").removeAttr("disabled");
                      $("#pmreg42").removeAttr("disabled");
                      $("#ext42").removeAttr("disabled");
                        $("#t1fn42").attr("disabled", "disabled");
                        $("#t1reg42").attr("disabled", "disabled");
                        $("#t2fn42").attr("disabled", "disabled");
                        $("#t2reg42").attr("disabled", "disabled"); 
                break;
                
                case "Dolly Trailer":
                    $("#t1fn42").removeAttr("disabled");
                    $("#t1reg42").removeAttr("disabled");
                    $("#ext42").removeAttr("disabled");    
                    $("#pmfn42").attr("disabled", "disabled");
                    $("#pmreg42").attr("disabled", "disabled");
                    $("#t2fn42").attr("disabled", "disabled");
                    $("#t2reg42").attr("disabled", "disabled");
            break;
                case "Other 1":


            						$("#pmfn42").removeAttr("disabled");
            						$("#pmreg42").removeAttr("disabled");
            						$("#t1fn42").attr("disabled", "disabled");
                                    $("#t1reg42").attr("disabled", "disabled");
                                    $("#t2fn42").attr("disabled", "disabled");
                                    $("#t2reg42").attr("disabled", "disabled");
                                    $("#ext42").removeAttr("disabled");    
                                  
                                    
                                      
                                      break;
                                      
            					case "Other 2":
                

            						$("#pmfn42").removeAttr("disabled");
            						$("#pmreg42").removeAttr("disabled");
            						$("#t1fn42").removeAttr("disabled");
            						$("#t1reg42").removeAttr("disabled");
                                    $("#t2fn42").attr("disabled", "disabled");
                                    $("#t2reg42").attr("disabled", "disabled");
                                    $("#ext42").removeAttr("disabled");  
                
                  
                  break;
            					case "Other 3":
                

            						$("#pmfn42").removeAttr("disabled");
            						$("#pmreg42").removeAttr("disabled");
            						$("#t1fn42").removeAttr("disabled");
            						$("#t1reg42").removeAttr("disabled");
            						$("#t2fn42").removeAttr("disabled");
            						$("#t2reg42").removeAttr("disabled");
                                    $("#ext42").removeAttr("disabled");  
                
                  
                  break;
                 default:
                        $("#t1fn42").removeAttr("disabled");
                        $("#t2fn42").removeAttr("disabled");
                        $("#t1reg42").removeAttr("disabled");
                        $("#t2reg42").removeAttr("disabled");
                        $("#pmfn42").removeAttr("disabled");
                        $("#pmreg42").removeAttr("disabled");
                        $("#ext42").removeAttr("disabled");
                    break;
            } 
        	
            
            if(type == "Single Rigid"){
                $('#type42').html('<option value="">Type</option><option value="Box">Box</option><option value="Flat Top">Flat Top</option>');
                }
                if(type == "Bogie Rigid"){
                $('#type42').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Prime Mover"){
                $('#type42').html('<option value="">Type</option><option value="Day Cab">Day Cab</option><option value="Sleeper Cab">Sleeper Cab</option>');
                }
                if(type == "Single Combination"){
                $('#type42').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "B Double Combination"){
                $('#type42').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "Single Trailer"){
                $('#type42').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option>');
                }
                if(type == "B Double Trailer"){
                $('#type42').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "FORKLIFT"){
                $('#type42').html('<option value="">Type</option><option value="Small">Small</option><option value="Medium">Medium</option><option value="Large">Large</option>');
                }
                if(type == "VAN/UTE/CAR"){
                $('#type42').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Dolly Trailer"){
                $('#type42').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 1"){
                $('#type42').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 2"){
                $('#type42').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 3"){
                $('#type42').html('<option value="">Type</option><option value=" ">All</option>');
                }
            	}).trigger("change");
	     	   
   	   
   	   
   	   //--------------------------------------43     	
      	
   	   $('#sel43').on('change', function() {
                var type = document.getElementById("sel43").value;
            switch(type) {
                case "Single Rigid":
                      $("#pmfn43").removeAttr("disabled");
                      $("#pmreg43").removeAttr("disabled");
                      $("#ext43").removeAttr("disabled");
                      $("#t1fn43").attr("disabled", "disabled");
                      $("#t1reg43").attr("disabled", "disabled");
                      $("#t2fn43").attr("disabled", "disabled");
                      $("#t2reg43").attr("disabled", "disabled");
                        break;
                case "Bogie Rigid":
                   $("#pmfn43").removeAttr("disabled");
                   $("#pmreg43").removeAttr("disabled");
                   $("#ext43").removeAttr("disabled");
                   $("#t1fn43").attr("disabled", "disabled");
                   $("#t1reg43").attr("disabled", "disabled");
                   $("#t2fn43").attr("disabled", "disabled");
                   $("#t2reg43").attr("disabled", "disabled");
                     break;
                case "Prime Mover":
                  $("#pmfn43").removeAttr("disabled");
                    $("#pmreg43").removeAttr("disabled");
                    $("#ext43").removeAttr("disabled");
                    $("#t1fn43").attr("disabled", "disabled");
                    $("#t1reg43").attr("disabled", "disabled");
                    $("#t2fn43").attr("disabled", "disabled");
                    $("#t2reg43").attr("disabled", "disabled");
                break;
                
                case "Single Combination":
                    $("#t1fn43").removeAttr("disabled");
                    $("#t1reg43").removeAttr("disabled");
                    $("#ext43").removeAttr("disabled");    
                    $("#pmfn43").removeAttr("disabled");
                    $("#pmreg43").removeAttr("disabled");
                    $("#t2fn43").attr("disabled", "disabled");
                    $("#t2reg43").attr("disabled", "disabled");          
            break;
            
                case "B Double Combination":
                    

              	  $("#t1fn43").removeAttr("disabled");
                    $("#t2fn43").removeAttr("disabled");
                    $("#t1reg43").removeAttr("disabled");
                    $("#t2reg43").removeAttr("disabled");
                    $("#pmfn43").removeAttr("disabled");
                    $("#pmreg43").removeAttr("disabled");
                    $("#ext43").removeAttr("disabled");
                  
                    
                    break;
                    
                    
                case "Single Trailer":
                    $("#t1fn43").removeAttr("disabled");
                    $("#t1reg43").removeAttr("disabled");
                    $("#ext43").removeAttr("disabled");    
                    $("#pmfn43").attr("disabled", "disabled");
                    $("#pmreg43").attr("disabled", "disabled");
                    $("#t2fn43").attr("disabled", "disabled");
                    $("#t2reg43").attr("disabled", "disabled");
            break;
            
            
                case "B Double Trailer":
                    $("#t1fn43").removeAttr("disabled");
                    $("#t1reg43").removeAttr("disabled");
                    $("#ext43").removeAttr("disabled");    
                    $("#pmfn43").attr("disabled", "disabled");
                    $("#pmreg43").attr("disabled", "disabled");
                    $("#t2fn43").removeAttr("disabled");
                    $("#t2reg43").removeAttr("disabled");
            break;
            
                case "FORKLIFT":
                    $("#pmfn43").removeAttr("disabled");
                      $("#pmreg43").removeAttr("disabled");
                      $("#ext43").removeAttr("disabled");
                      $("#t1fn43").attr("disabled", "disabled");
                      $("#t1reg43").attr("disabled", "disabled");
                      $("#t2fn43").attr("disabled", "disabled");
                      $("#t2reg43").attr("disabled", "disabled");
                  break;
            
            
                
                case "VAN/UTE/CAR":
                      $("#pmfn43").removeAttr("disabled");
                      $("#pmreg43").removeAttr("disabled");
                      $("#ext43").removeAttr("disabled");
                        $("#t1fn43").attr("disabled", "disabled");
                        $("#t1reg43").attr("disabled", "disabled");
                        $("#t2fn43").attr("disabled", "disabled");
                        $("#t2reg43").attr("disabled", "disabled"); 
                break;
                
                case "Dolly Trailer":
                    $("#t1fn43").removeAttr("disabled");
                    $("#t1reg43").removeAttr("disabled");
                    $("#ext43").removeAttr("disabled");    
                    $("#pmfn43").attr("disabled", "disabled");
                    $("#pmreg43").attr("disabled", "disabled");
                    $("#t2fn43").attr("disabled", "disabled");
                    $("#t2reg43").attr("disabled", "disabled");
            break;
                case "Other 1":


            						$("#pmfn43").removeAttr("disabled");
            						$("#pmreg43").removeAttr("disabled");
            						$("#t1fn43").attr("disabled", "disabled");
                                    $("#t1reg43").attr("disabled", "disabled");
                                    $("#t2fn43").attr("disabled", "disabled");
                                    $("#t2reg43").attr("disabled", "disabled");
                                    $("#ext43").removeAttr("disabled");    
                                  
                                    
                                      
                                      break;
                                      
            					case "Other 2":
                

            						$("#pmfn43").removeAttr("disabled");
            						$("#pmreg43").removeAttr("disabled");
            						$("#t1fn43").removeAttr("disabled");
            						$("#t1reg43").removeAttr("disabled");
                                    $("#t2fn43").attr("disabled", "disabled");
                                    $("#t2reg43").attr("disabled", "disabled");
                                    $("#ext43").removeAttr("disabled");  
                
                  
                  break;
            					case "Other 3":
                

            						$("#pmfn43").removeAttr("disabled");
            						$("#pmreg43").removeAttr("disabled");
            						$("#t1fn43").removeAttr("disabled");
            						$("#t1reg43").removeAttr("disabled");
            						$("#t2fn43").removeAttr("disabled");
            						$("#t2reg43").removeAttr("disabled");
                                    $("#ext43").removeAttr("disabled");  
                
                  
                  break;
                 default:
                        $("#t1fn43").removeAttr("disabled");
                        $("#t2fn43").removeAttr("disabled");
                        $("#t1reg43").removeAttr("disabled");
                        $("#t2reg43").removeAttr("disabled");
                        $("#pmfn43").removeAttr("disabled");
                        $("#pmreg43").removeAttr("disabled");
                        $("#ext43").removeAttr("disabled");
                    break;
            } 
        	
            
            
            if(type == "Single Rigid"){
                $('#type43').html('<option value="">Type</option><option value="Box">Box</option><option value="Flat Top">Flat Top</option>');
                }
                if(type == "Bogie Rigid"){
                $('#type43').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Prime Mover"){
                $('#type43').html('<option value="">Type</option><option value="Day Cab">Day Cab</option><option value="Sleeper Cab">Sleeper Cab</option>');
                }
                if(type == "Single Combination"){
                $('#type43').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "B Double Combination"){
                $('#type43').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "Single Trailer"){
                $('#type43').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option>');
                }
                if(type == "B Double Trailer"){
                $('#type43').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "FORKLIFT"){
                $('#type43').html('<option value="">Type</option><option value="Small">Small</option><option value="Medium">Medium</option><option value="Large">Large</option>');
                }
                if(type == "VAN/UTE/CAR"){
                $('#type43').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Dolly Trailer"){
                $('#type43').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 1"){
                $('#type43').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 2"){
                $('#type43').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 3"){
                $('#type43').html('<option value="">Type</option><option value=" ">All</option>');
                }
            	}).trigger("change");
	      	   
   	   
   	   //--------------------------------------44     	
      	
   	   $('#sel44').on('change', function() {
                var type = document.getElementById("sel44").value;
            switch(type) {
                case "Single Rigid":
                      $("#pmfn44").removeAttr("disabled");
                      $("#pmreg44").removeAttr("disabled");
                      $("#ext44").removeAttr("disabled");
                      $("#t1fn44").attr("disabled", "disabled");
                      $("#t1reg44").attr("disabled", "disabled");
                      $("#t2fn44").attr("disabled", "disabled");
                      $("#t2reg44").attr("disabled", "disabled");
                        break;
                case "Bogie Rigid":
                   $("#pmfn44").removeAttr("disabled");
                   $("#pmreg44").removeAttr("disabled");
                   $("#ext44").removeAttr("disabled");
                   $("#t1fn44").attr("disabled", "disabled");
                   $("#t1reg44").attr("disabled", "disabled");
                   $("#t2fn44").attr("disabled", "disabled");
                   $("#t2reg44").attr("disabled", "disabled");
                     break;
                case "Prime Mover":
                  $("#pmfn44").removeAttr("disabled");
                    $("#pmreg44").removeAttr("disabled");
                    $("#ext44").removeAttr("disabled");
                    $("#t1fn44").attr("disabled", "disabled");
                    $("#t1reg44").attr("disabled", "disabled");
                    $("#t2fn44").attr("disabled", "disabled");
                    $("#t2reg44").attr("disabled", "disabled");
                break;
                
                case "Single Combination":
                    $("#t1fn44").removeAttr("disabled");
                    $("#t1reg44").removeAttr("disabled");
                    $("#ext44").removeAttr("disabled");    
                    $("#pmfn44").removeAttr("disabled");
                    $("#pmreg44").removeAttr("disabled");
                    $("#t2fn44").attr("disabled", "disabled");
                    $("#t2reg44").attr("disabled", "disabled");          
            break;
            
                case "B Double Combination":
                    

              	  $("#t1fn44").removeAttr("disabled");
                    $("#t2fn44").removeAttr("disabled");
                    $("#t1reg44").removeAttr("disabled");
                    $("#t2reg44").removeAttr("disabled");
                    $("#pmfn44").removeAttr("disabled");
                    $("#pmreg44").removeAttr("disabled");
                    $("#ext44").removeAttr("disabled");
                  
                    
                    break;
                    
                    
                case "Single Trailer":
                    $("#t1fn44").removeAttr("disabled");
                    $("#t1reg44").removeAttr("disabled");
                    $("#ext44").removeAttr("disabled");    
                    $("#pmfn44").attr("disabled", "disabled");
                    $("#pmreg44").attr("disabled", "disabled");
                    $("#t2fn44").attr("disabled", "disabled");
                    $("#t2reg44").attr("disabled", "disabled");
            break;
            
            
                case "B Double Trailer":
                    $("#t1fn44").removeAttr("disabled");
                    $("#t1reg44").removeAttr("disabled");
                    $("#ext44").removeAttr("disabled");    
                    $("#pmfn44").attr("disabled", "disabled");
                    $("#pmreg44").attr("disabled", "disabled");
                    $("#t2fn44").removeAttr("disabled");
                    $("#t2reg44").removeAttr("disabled");
            break;
            
                case "FORKLIFT":
                    $("#pmfn44").removeAttr("disabled");
                      $("#pmreg44").removeAttr("disabled");
                      $("#ext44").removeAttr("disabled");
                      $("#t1fn44").attr("disabled", "disabled");
                      $("#t1reg44").attr("disabled", "disabled");
                      $("#t2fn44").attr("disabled", "disabled");
                      $("#t2reg44").attr("disabled", "disabled");
                  break;
            
            
                
                case "VAN/UTE/CAR":
                      $("#pmfn44").removeAttr("disabled");
                      $("#pmreg44").removeAttr("disabled");
                      $("#ext44").removeAttr("disabled");
                        $("#t1fn44").attr("disabled", "disabled");
                        $("#t1reg44").attr("disabled", "disabled");
                        $("#t2fn44").attr("disabled", "disabled");
                        $("#t2reg44").attr("disabled", "disabled"); 
                break;
                
                case "Dolly Trailer":
                    $("#t1fn44").removeAttr("disabled");
                    $("#t1reg44").removeAttr("disabled");
                    $("#ext44").removeAttr("disabled");    
                    $("#pmfn44").attr("disabled", "disabled");
                    $("#pmreg44").attr("disabled", "disabled");
                    $("#t2fn44").attr("disabled", "disabled");
                    $("#t2reg44").attr("disabled", "disabled");
            break;
                case "Other 1":


            						$("#pmfn44").removeAttr("disabled");
            						$("#pmreg44").removeAttr("disabled");
            						$("#t1fn44").attr("disabled", "disabled");
                                    $("#t1reg44").attr("disabled", "disabled");
                                    $("#t2fn44").attr("disabled", "disabled");
                                    $("#t2reg44").attr("disabled", "disabled");
                                    $("#ext44").removeAttr("disabled");    
                                  
                                    
                                      
                                      break;
                                      
            					case "Other 2":
                

            						$("#pmfn44").removeAttr("disabled");
            						$("#pmreg44").removeAttr("disabled");
            						$("#t1fn44").removeAttr("disabled");
            						$("#t1reg44").removeAttr("disabled");
                                    $("#t2fn44").attr("disabled", "disabled");
                                    $("#t2reg44").attr("disabled", "disabled");
                                    $("#ext44").removeAttr("disabled");  
                
                  
                  break;
            					case "Other 3":
                

            						$("#pmfn44").removeAttr("disabled");
            						$("#pmreg44").removeAttr("disabled");
            						$("#t1fn44").removeAttr("disabled");
            						$("#t1reg44").removeAttr("disabled");
            						$("#t2fn44").removeAttr("disabled");
            						$("#t2reg44").removeAttr("disabled");
                                    $("#ext44").removeAttr("disabled");  
                
                  
                  break;
                 default:
                        $("#t1fn44").removeAttr("disabled");
                        $("#t2fn44").removeAttr("disabled");
                        $("#t1reg44").removeAttr("disabled");
                        $("#t2reg44").removeAttr("disabled");
                        $("#pmfn44").removeAttr("disabled");
                        $("#pmreg44").removeAttr("disabled");
                        $("#ext44").removeAttr("disabled");
                    break;
            } 
        	
            
            
            if(type == "Single Rigid"){
                $('#type44').html('<option value="">Type</option><option value="Box">Box</option><option value="Flat Top">Flat Top</option>');
                }
                if(type == "Bogie Rigid"){
                $('#type44').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Prime Mover"){
                $('#type44').html('<option value="">Type</option><option value="Day Cab">Day Cab</option><option value="Sleeper Cab">Sleeper Cab</option>');
                }
                if(type == "Single Combination"){
                $('#type44').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "B Double Combination"){
                $('#type44').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "Single Trailer"){
                $('#type44').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option>');
                }
                if(type == "B Double Trailer"){
                $('#type44').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "FORKLIFT"){
                $('#type44').html('<option value="">Type</option><option value="Small">Small</option><option value="Medium">Medium</option><option value="Large">Large</option>');
                }
                if(type == "VAN/UTE/CAR"){
                $('#type44').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Dolly Trailer"){
                $('#type44').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 1"){
                $('#type44').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 2"){
                $('#type44').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 3"){
                $('#type44').html('<option value="">Type</option><option value=" ">All</option>');
                }
            	}).trigger("change");
	   
	     	   
   	   //--------------------------------------45     	
      	
   	   $('#sel45').on('change', function() {
                var type = document.getElementById("sel45").value;
            switch(type) {
                case "Single Rigid":
                      $("#pmfn45").removeAttr("disabled");
                      $("#pmreg45").removeAttr("disabled");
                      $("#ext45").removeAttr("disabled");
                      $("#t1fn45").attr("disabled", "disabled");
                      $("#t1reg45").attr("disabled", "disabled");
                      $("#t2fn45").attr("disabled", "disabled");
                      $("#t2reg45").attr("disabled", "disabled");
                        break;
                case "Bogie Rigid":
                   $("#pmfn45").removeAttr("disabled");
                   $("#pmreg45").removeAttr("disabled");
                   $("#ext45").removeAttr("disabled");
                   $("#t1fn45").attr("disabled", "disabled");
                   $("#t1reg45").attr("disabled", "disabled");
                   $("#t2fn45").attr("disabled", "disabled");
                   $("#t2reg45").attr("disabled", "disabled");
                     break;
                case "Prime Mover":
                  $("#pmfn45").removeAttr("disabled");
                    $("#pmreg45").removeAttr("disabled");
                    $("#ext45").removeAttr("disabled");
                    $("#t1fn45").attr("disabled", "disabled");
                    $("#t1reg45").attr("disabled", "disabled");
                    $("#t2fn45").attr("disabled", "disabled");
                    $("#t2reg45").attr("disabled", "disabled");
                break;
                
                case "Single Combination":
                    $("#t1fn45").removeAttr("disabled");
                    $("#t1reg45").removeAttr("disabled");
                    $("#ext45").removeAttr("disabled");    
                    $("#pmfn45").removeAttr("disabled");
                    $("#pmreg45").removeAttr("disabled");
                    $("#t2fn45").attr("disabled", "disabled");
                    $("#t2reg45").attr("disabled", "disabled");          
            break;
            
                case "B Double Combination":
                    

              	  $("#t1fn45").removeAttr("disabled");
                    $("#t2fn45").removeAttr("disabled");
                    $("#t1reg45").removeAttr("disabled");
                    $("#t2reg45").removeAttr("disabled");
                    $("#pmfn45").removeAttr("disabled");
                    $("#pmreg45").removeAttr("disabled");
                    $("#ext45").removeAttr("disabled");
                  
                    
                    break;
                    
                    
                case "Single Trailer":
                    $("#t1fn45").removeAttr("disabled");
                    $("#t1reg45").removeAttr("disabled");
                    $("#ext45").removeAttr("disabled");    
                    $("#pmfn45").attr("disabled", "disabled");
                    $("#pmreg45").attr("disabled", "disabled");
                    $("#t2fn45").attr("disabled", "disabled");
                    $("#t2reg45").attr("disabled", "disabled");
            break;
            
            
                case "B Double Trailer":
                    $("#t1fn45").removeAttr("disabled");
                    $("#t1reg45").removeAttr("disabled");
                    $("#ext45").removeAttr("disabled");    
                    $("#pmfn45").attr("disabled", "disabled");
                    $("#pmreg45").attr("disabled", "disabled");
                    $("#t2fn45").removeAttr("disabled");
                    $("#t2reg45").removeAttr("disabled");
            break;
            
                case "FORKLIFT":
                    $("#pmfn45").removeAttr("disabled");
                      $("#pmreg45").removeAttr("disabled");
                      $("#ext45").removeAttr("disabled");
                      $("#t1fn45").attr("disabled", "disabled");
                      $("#t1reg45").attr("disabled", "disabled");
                      $("#t2fn45").attr("disabled", "disabled");
                      $("#t2reg45").attr("disabled", "disabled");
                  break;
            
            
                
                case "VAN/UTE/CAR":
                      $("#pmfn45").removeAttr("disabled");
                      $("#pmreg45").removeAttr("disabled");
                      $("#ext45").removeAttr("disabled");
                        $("#t1fn45").attr("disabled", "disabled");
                        $("#t1reg45").attr("disabled", "disabled");
                        $("#t2fn45").attr("disabled", "disabled");
                        $("#t2reg45").attr("disabled", "disabled"); 
                break;
                
                case "Dolly Trailer":
                    $("#t1fn45").removeAttr("disabled");
                    $("#t1reg45").removeAttr("disabled");
                    $("#ext45").removeAttr("disabled");    
                    $("#pmfn45").attr("disabled", "disabled");
                    $("#pmreg45").attr("disabled", "disabled");
                    $("#t2fn45").attr("disabled", "disabled");
                    $("#t2reg45").attr("disabled", "disabled");
            break;
                case "Other 1":


            						$("#pmfn45").removeAttr("disabled");
            						$("#pmreg45").removeAttr("disabled");
            						$("#t1fn45").attr("disabled", "disabled");
                                    $("#t1reg45").attr("disabled", "disabled");
                                    $("#t2fn45").attr("disabled", "disabled");
                                    $("#t2reg45").attr("disabled", "disabled");
                                    $("#ext45").removeAttr("disabled");    
                                  
                                    
                                      
                                      break;
                                      
            					case "Other 2":
                

            						$("#pmfn45").removeAttr("disabled");
            						$("#pmreg45").removeAttr("disabled");
            						$("#t1fn45").removeAttr("disabled");
            						$("#t1reg45").removeAttr("disabled");
                                    $("#t2fn45").attr("disabled", "disabled");
                                    $("#t2reg45").attr("disabled", "disabled");
                                    $("#ext45").removeAttr("disabled");  
                
                  
                  break;
            					case "Other 3":
                

            						$("#pmfn45").removeAttr("disabled");
            						$("#pmreg45").removeAttr("disabled");
            						$("#t1fn45").removeAttr("disabled");
            						$("#t1reg45").removeAttr("disabled");
            						$("#t2fn45").removeAttr("disabled");
            						$("#t2reg45").removeAttr("disabled");
                                    $("#ext45").removeAttr("disabled");  
                
                  
                  break;
                 default:
                        $("#t1fn45").removeAttr("disabled");
                        $("#t2fn45").removeAttr("disabled");
                        $("#t1reg45").removeAttr("disabled");
                        $("#t2reg45").removeAttr("disabled");
                        $("#pmfn45").removeAttr("disabled");
                        $("#pmreg45").removeAttr("disabled");
                        $("#ext45").removeAttr("disabled");
                    break;
            } 
        	
            
            if(type == "Single Rigid"){
                $('#type45').html('<option value="">Type</option><option value="Box">Box</option><option value="Flat Top">Flat Top</option>');
                }
                if(type == "Bogie Rigid"){
                $('#type45').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Prime Mover"){
                $('#type45').html('<option value="">Type</option><option value="Day Cab">Day Cab</option><option value="Sleeper Cab">Sleeper Cab</option>');
                }
                if(type == "Single Combination"){
                $('#type45').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "B Double Combination"){
                $('#type45').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "Single Trailer"){
                $('#type45').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option>');
                }
                if(type == "B Double Trailer"){
                $('#type45').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "FORKLIFT"){
                $('#type45').html('<option value="">Type</option><option value="Small">Small</option><option value="Medium">Medium</option><option value="Large">Large</option>');
                }
                if(type == "VAN/UTE/CAR"){
                $('#type45').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Dolly Trailer"){
                $('#type45').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 1"){
                $('#type45').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 2"){
                $('#type45').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 3"){
                $('#type45').html('<option value="">Type</option><option value=" ">All</option>');
                }
            	}).trigger("change");
	      	   
   	   //--------------------------------------46     	
      	
   	   $('#sel46').on('change', function() {
                var type = document.getElementById("sel46").value;
            switch(type) {
                case "Single Rigid":
                      $("#pmfn46").removeAttr("disabled");
                      $("#pmreg46").removeAttr("disabled");
                      $("#ext46").removeAttr("disabled");
                      $("#t1fn46").attr("disabled", "disabled");
                      $("#t1reg46").attr("disabled", "disabled");
                      $("#t2fn46").attr("disabled", "disabled");
                      $("#t2reg46").attr("disabled", "disabled");
                        break;
                case "Bogie Rigid":
                   $("#pmfn46").removeAttr("disabled");
                   $("#pmreg46").removeAttr("disabled");
                   $("#ext46").removeAttr("disabled");
                   $("#t1fn46").attr("disabled", "disabled");
                   $("#t1reg46").attr("disabled", "disabled");
                   $("#t2fn46").attr("disabled", "disabled");
                   $("#t2reg46").attr("disabled", "disabled");
                     break;
                case "Prime Mover":
                  $("#pmfn46").removeAttr("disabled");
                    $("#pmreg46").removeAttr("disabled");
                    $("#ext46").removeAttr("disabled");
                    $("#t1fn46").attr("disabled", "disabled");
                    $("#t1reg46").attr("disabled", "disabled");
                    $("#t2fn46").attr("disabled", "disabled");
                    $("#t2reg46").attr("disabled", "disabled");
                break;
                
                case "Single Combination":
                    $("#t1fn46").removeAttr("disabled");
                    $("#t1reg46").removeAttr("disabled");
                    $("#ext46").removeAttr("disabled");    
                    $("#pmfn46").removeAttr("disabled");
                    $("#pmreg46").removeAttr("disabled");
                    $("#t2fn46").attr("disabled", "disabled");
                    $("#t2reg46").attr("disabled", "disabled");          
            break;
            
                case "B Double Combination":
                    

              	  $("#t1fn46").removeAttr("disabled");
                    $("#t2fn46").removeAttr("disabled");
                    $("#t1reg46").removeAttr("disabled");
                    $("#t2reg46").removeAttr("disabled");
                    $("#pmfn46").removeAttr("disabled");
                    $("#pmreg46").removeAttr("disabled");
                    $("#ext46").removeAttr("disabled");
                  
                    
                    break;
                    
                    
                case "Single Trailer":
                    $("#t1fn46").removeAttr("disabled");
                    $("#t1reg46").removeAttr("disabled");
                    $("#ext46").removeAttr("disabled");    
                    $("#pmfn46").attr("disabled", "disabled");
                    $("#pmreg46").attr("disabled", "disabled");
                    $("#t2fn46").attr("disabled", "disabled");
                    $("#t2reg46").attr("disabled", "disabled");
            break;
            
            
                case "B Double Trailer":
                    $("#t1fn46").removeAttr("disabled");
                    $("#t1reg46").removeAttr("disabled");
                    $("#ext46").removeAttr("disabled");    
                    $("#pmfn46").attr("disabled", "disabled");
                    $("#pmreg46").attr("disabled", "disabled");
                    $("#t2fn46").removeAttr("disabled");
                    $("#t2reg46").removeAttr("disabled");
            break;
            
                case "FORKLIFT":
                    $("#pmfn46").removeAttr("disabled");
                      $("#pmreg46").removeAttr("disabled");
                      $("#ext46").removeAttr("disabled");
                      $("#t1fn46").attr("disabled", "disabled");
                      $("#t1reg46").attr("disabled", "disabled");
                      $("#t2fn46").attr("disabled", "disabled");
                      $("#t2reg46").attr("disabled", "disabled");
                  break;
            
            
                
                case "VAN/UTE/CAR":
                      $("#pmfn46").removeAttr("disabled");
                      $("#pmreg46").removeAttr("disabled");
                      $("#ext46").removeAttr("disabled");
                        $("#t1fn46").attr("disabled", "disabled");
                        $("#t1reg46").attr("disabled", "disabled");
                        $("#t2fn46").attr("disabled", "disabled");
                        $("#t2reg46").attr("disabled", "disabled"); 
                break;
                
                case "Dolly Trailer":
                    $("#t1fn46").removeAttr("disabled");
                    $("#t1reg46").removeAttr("disabled");
                    $("#ext46").removeAttr("disabled");    
                    $("#pmfn46").attr("disabled", "disabled");
                    $("#pmreg46").attr("disabled", "disabled");
                    $("#t2fn46").attr("disabled", "disabled");
                    $("#t2reg46").attr("disabled", "disabled");
            break;
                case "Other 1":


            						$("#pmfn46").removeAttr("disabled");
            						$("#pmreg46").removeAttr("disabled");
            						$("#t1fn46").attr("disabled", "disabled");
                                    $("#t1reg46").attr("disabled", "disabled");
                                    $("#t2fn46").attr("disabled", "disabled");
                                    $("#t2reg46").attr("disabled", "disabled");
                                    $("#ext46").removeAttr("disabled");    
                                  
                                    
                                      
                                      break;
                                      
            					case "Other 2":
                

            						$("#pmfn46").removeAttr("disabled");
            						$("#pmreg46").removeAttr("disabled");
            						$("#t1fn46").removeAttr("disabled");
            						$("#t1reg46").removeAttr("disabled");
                                    $("#t2fn46").attr("disabled", "disabled");
                                    $("#t2reg46").attr("disabled", "disabled");
                                    $("#ext46").removeAttr("disabled");  
                
                  
                  break;
            					case "Other 3":
                

            						$("#pmfn46").removeAttr("disabled");
            						$("#pmreg46").removeAttr("disabled");
            						$("#t1fn46").removeAttr("disabled");
            						$("#t1reg46").removeAttr("disabled");
            						$("#t2fn46").removeAttr("disabled");
            						$("#t2reg46").removeAttr("disabled");
                                    $("#ext46").removeAttr("disabled");  
                
                  
                  break;
                 default:
                        $("#t1fn46").removeAttr("disabled");
                        $("#t2fn46").removeAttr("disabled");
                        $("#t1reg46").removeAttr("disabled");
                        $("#t2reg46").removeAttr("disabled");
                        $("#pmfn46").removeAttr("disabled");
                        $("#pmreg46").removeAttr("disabled");
                        $("#ext46").removeAttr("disabled");
                    break;
            } 
        	
            
            if(type == "Single Rigid"){
                $('#type46').html('<option value="">Type</option><option value="Box">Box</option><option value="Flat Top">Flat Top</option>');
                }
                if(type == "Bogie Rigid"){
                $('#type46').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Prime Mover"){
                $('#type46').html('<option value="">Type</option><option value="Day Cab">Day Cab</option><option value="Sleeper Cab">Sleeper Cab</option>');
                }
                if(type == "Single Combination"){
                $('#type46').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "B Double Combination"){
                $('#type46').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "Single Trailer"){
                $('#type46').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option>');
                }
                if(type == "B Double Trailer"){
                $('#type46').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "FORKLIFT"){
                $('#type46').html('<option value="">Type</option><option value="Small">Small</option><option value="Medium">Medium</option><option value="Large">Large</option>');
                }
                if(type == "VAN/UTE/CAR"){
                $('#type46').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Dolly Trailer"){
                $('#type46').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 1"){
                $('#type46').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 2"){
                $('#type46').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 3"){
                $('#type46').html('<option value="">Type</option><option value=" ">All</option>');
                }
            	}).trigger("change");    
	   
	      	   
   	   
   	   //--------------------------------------47     	
      	
   	   $('#sel47').on('change', function() {
                var type = document.getElementById("sel47").value;
            switch(type) {
                case "Single Rigid":
                      $("#pmfn47").removeAttr("disabled");
                      $("#pmreg47").removeAttr("disabled");
                      $("#ext47").removeAttr("disabled");
                      $("#t1fn47").attr("disabled", "disabled");
                      $("#t1reg47").attr("disabled", "disabled");
                      $("#t2fn47").attr("disabled", "disabled");
                      $("#t2reg47").attr("disabled", "disabled");
                        break;
                case "Bogie Rigid":
                   $("#pmfn47").removeAttr("disabled");
                   $("#pmreg47").removeAttr("disabled");
                   $("#ext47").removeAttr("disabled");
                   $("#t1fn47").attr("disabled", "disabled");
                   $("#t1reg47").attr("disabled", "disabled");
                   $("#t2fn47").attr("disabled", "disabled");
                   $("#t2reg47").attr("disabled", "disabled");
                     break;
                case "Prime Mover":
                  $("#pmfn47").removeAttr("disabled");
                    $("#pmreg47").removeAttr("disabled");
                    $("#ext47").removeAttr("disabled");
                    $("#t1fn47").attr("disabled", "disabled");
                    $("#t1reg47").attr("disabled", "disabled");
                    $("#t2fn47").attr("disabled", "disabled");
                    $("#t2reg47").attr("disabled", "disabled");
                break;
                
                case "Single Combination":
                    $("#t1fn47").removeAttr("disabled");
                    $("#t1reg47").removeAttr("disabled");
                    $("#ext47").removeAttr("disabled");    
                    $("#pmfn47").removeAttr("disabled");
                    $("#pmreg47").removeAttr("disabled");
                    $("#t2fn47").attr("disabled", "disabled");
                    $("#t2reg47").attr("disabled", "disabled");          
            break;
            
                case "B Double Combination":
                    

              	  $("#t1fn47").removeAttr("disabled");
                    $("#t2fn47").removeAttr("disabled");
                    $("#t1reg47").removeAttr("disabled");
                    $("#t2reg47").removeAttr("disabled");
                    $("#pmfn47").removeAttr("disabled");
                    $("#pmreg47").removeAttr("disabled");
                    $("#ext47").removeAttr("disabled");
                  
                    
                    break;
                    
                    
                case "Single Trailer":
                    $("#t1fn47").removeAttr("disabled");
                    $("#t1reg47").removeAttr("disabled");
                    $("#ext47").removeAttr("disabled");    
                    $("#pmfn47").attr("disabled", "disabled");
                    $("#pmreg47").attr("disabled", "disabled");
                    $("#t2fn47").attr("disabled", "disabled");
                    $("#t2reg47").attr("disabled", "disabled");
            break;
            
            
                case "B Double Trailer":
                    $("#t1fn47").removeAttr("disabled");
                    $("#t1reg47").removeAttr("disabled");
                    $("#ext47").removeAttr("disabled");    
                    $("#pmfn47").attr("disabled", "disabled");
                    $("#pmreg47").attr("disabled", "disabled");
                    $("#t2fn47").removeAttr("disabled");
                    $("#t2reg47").removeAttr("disabled");
            break;
            
                case "FORKLIFT":
                    $("#pmfn47").removeAttr("disabled");
                      $("#pmreg47").removeAttr("disabled");
                      $("#ext47").removeAttr("disabled");
                      $("#t1fn47").attr("disabled", "disabled");
                      $("#t1reg47").attr("disabled", "disabled");
                      $("#t2fn47").attr("disabled", "disabled");
                      $("#t2reg47").attr("disabled", "disabled");
                  break;
            
            
                
                case "VAN/UTE/CAR":
                      $("#pmfn47").removeAttr("disabled");
                      $("#pmreg47").removeAttr("disabled");
                      $("#ext47").removeAttr("disabled");
                        $("#t1fn47").attr("disabled", "disabled");
                        $("#t1reg47").attr("disabled", "disabled");
                        $("#t2fn47").attr("disabled", "disabled");
                        $("#t2reg47").attr("disabled", "disabled"); 
                break;
                
                case "Dolly Trailer":
                    $("#t1fn47").removeAttr("disabled");
                    $("#t1reg47").removeAttr("disabled");
                    $("#ext47").removeAttr("disabled");    
                    $("#pmfn47").attr("disabled", "disabled");
                    $("#pmreg47").attr("disabled", "disabled");
                    $("#t2fn47").attr("disabled", "disabled");
                    $("#t2reg47").attr("disabled", "disabled");
            break;
                case "Other 1":


            						$("#pmfn47").removeAttr("disabled");
            						$("#pmreg47").removeAttr("disabled");
            						$("#t1fn47").attr("disabled", "disabled");
                                    $("#t1reg47").attr("disabled", "disabled");
                                    $("#t2fn47").attr("disabled", "disabled");
                                    $("#t2reg47").attr("disabled", "disabled");
                                    $("#ext47").removeAttr("disabled");    
                                  
                                    
                                      
                                      break;
                                      
            					case "Other 2":
                

            						$("#pmfn47").removeAttr("disabled");
            						$("#pmreg47").removeAttr("disabled");
            						$("#t1fn47").removeAttr("disabled");
            						$("#t1reg47").removeAttr("disabled");
                                    $("#t2fn47").attr("disabled", "disabled");
                                    $("#t2reg47").attr("disabled", "disabled");
                                    $("#ext47").removeAttr("disabled");  
                
                  
                  break;
            					case "Other 3":
                

            						$("#pmfn47").removeAttr("disabled");
            						$("#pmreg47").removeAttr("disabled");
            						$("#t1fn47").removeAttr("disabled");
            						$("#t1reg47").removeAttr("disabled");
            						$("#t2fn47").removeAttr("disabled");
            						$("#t2reg47").removeAttr("disabled");
                                    $("#ext47").removeAttr("disabled");  
                
                  
                  break;
                 default:
                        $("#t1fn47").removeAttr("disabled");
                        $("#t2fn47").removeAttr("disabled");
                        $("#t1reg47").removeAttr("disabled");
                        $("#t2reg47").removeAttr("disabled");
                        $("#pmfn47").removeAttr("disabled");
                        $("#pmreg47").removeAttr("disabled");
                        $("#ext47").removeAttr("disabled");
                    break;
            } 
        	
            
            
            if(type == "Single Rigid"){
                $('#type47').html('<option value="">Type</option><option value="Box">Box</option><option value="Flat Top">Flat Top</option>');
                }
                if(type == "Bogie Rigid"){
                $('#type47').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Prime Mover"){
                $('#type47').html('<option value="">Type</option><option value="Day Cab">Day Cab</option><option value="Sleeper Cab">Sleeper Cab</option>');
                }
                if(type == "Single Combination"){
                $('#type47').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "B Double Combination"){
                $('#type47').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "Single Trailer"){
                $('#type47').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option>');
                }
                if(type == "B Double Trailer"){
                $('#type47').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "FORKLIFT"){
                $('#type47').html('<option value="">Type</option><option value="Small">Small</option><option value="Medium">Medium</option><option value="Large">Large</option>');
                }
                if(type == "VAN/UTE/CAR"){
                $('#type47').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Dolly Trailer"){
                $('#type47').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 1"){
                $('#type47').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 2"){
                $('#type47').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 3"){
                $('#type47').html('<option value="">Type</option><option value=" ">All</option>');
                }
            	}).trigger("change");
	   
	      	   
   	   
   	   //--------------------------------------48     	
      	
   	   $('#sel48').on('change', function() {
                var type = document.getElementById("sel48").value;
            switch(type) {
                case "Single Rigid":
                      $("#pmfn48").removeAttr("disabled");
                      $("#pmreg48").removeAttr("disabled");
                      $("#ext48").removeAttr("disabled");
                      $("#t1fn48").attr("disabled", "disabled");
                      $("#t1reg48").attr("disabled", "disabled");
                      $("#t2fn48").attr("disabled", "disabled");
                      $("#t2reg48").attr("disabled", "disabled");
                        break;
                case "Bogie Rigid":
                   $("#pmfn48").removeAttr("disabled");
                   $("#pmreg48").removeAttr("disabled");
                   $("#ext48").removeAttr("disabled");
                   $("#t1fn48").attr("disabled", "disabled");
                   $("#t1reg48").attr("disabled", "disabled");
                   $("#t2fn48").attr("disabled", "disabled");
                   $("#t2reg48").attr("disabled", "disabled");
                     break;
                case "Prime Mover":
                  $("#pmfn48").removeAttr("disabled");
                    $("#pmreg48").removeAttr("disabled");
                    $("#ext48").removeAttr("disabled");
                    $("#t1fn48").attr("disabled", "disabled");
                    $("#t1reg48").attr("disabled", "disabled");
                    $("#t2fn48").attr("disabled", "disabled");
                    $("#t2reg48").attr("disabled", "disabled");
                break;
                
                case "Single Combination":
                    $("#t1fn48").removeAttr("disabled");
                    $("#t1reg48").removeAttr("disabled");
                    $("#ext48").removeAttr("disabled");    
                    $("#pmfn48").removeAttr("disabled");
                    $("#pmreg48").removeAttr("disabled");
                    $("#t2fn48").attr("disabled", "disabled");
                    $("#t2reg48").attr("disabled", "disabled");          
            break;
            
                case "B Double Combination":
                    

              	  $("#t1fn48").removeAttr("disabled");
                    $("#t2fn48").removeAttr("disabled");
                    $("#t1reg48").removeAttr("disabled");
                    $("#t2reg48").removeAttr("disabled");
                    $("#pmfn48").removeAttr("disabled");
                    $("#pmreg48").removeAttr("disabled");
                    $("#ext48").removeAttr("disabled");
                  
                    
                    break;
                    
                    
                case "Single Trailer":
                    $("#t1fn48").removeAttr("disabled");
                    $("#t1reg48").removeAttr("disabled");
                    $("#ext48").removeAttr("disabled");    
                    $("#pmfn48").attr("disabled", "disabled");
                    $("#pmreg48").attr("disabled", "disabled");
                    $("#t2fn48").attr("disabled", "disabled");
                    $("#t2reg48").attr("disabled", "disabled");
            break;
            
            
                case "B Double Trailer":
                    $("#t1fn48").removeAttr("disabled");
                    $("#t1reg48").removeAttr("disabled");
                    $("#ext48").removeAttr("disabled");    
                    $("#pmfn48").attr("disabled", "disabled");
                    $("#pmreg48").attr("disabled", "disabled");
                    $("#t2fn48").removeAttr("disabled");
                    $("#t2reg48").removeAttr("disabled");
            break;
            
                case "FORKLIFT":
                    $("#pmfn48").removeAttr("disabled");
                      $("#pmreg48").removeAttr("disabled");
                      $("#ext48").removeAttr("disabled");
                      $("#t1fn48").attr("disabled", "disabled");
                      $("#t1reg48").attr("disabled", "disabled");
                      $("#t2fn48").attr("disabled", "disabled");
                      $("#t2reg48").attr("disabled", "disabled");
                  break;
            
            
                
                case "VAN/UTE/CAR":
                      $("#pmfn48").removeAttr("disabled");
                      $("#pmreg48").removeAttr("disabled");
                      $("#ext48").removeAttr("disabled");
                        $("#t1fn48").attr("disabled", "disabled");
                        $("#t1reg48").attr("disabled", "disabled");
                        $("#t2fn48").attr("disabled", "disabled");
                        $("#t2reg48").attr("disabled", "disabled"); 
                break;
                
                case "Dolly Trailer":
                    $("#t1fn48").removeAttr("disabled");
                    $("#t1reg48").removeAttr("disabled");
                    $("#ext48").removeAttr("disabled");    
                    $("#pmfn48").attr("disabled", "disabled");
                    $("#pmreg48").attr("disabled", "disabled");
                    $("#t2fn48").attr("disabled", "disabled");
                    $("#t2reg48").attr("disabled", "disabled");
            break;
                case "Other 1":


            						$("#pmfn48").removeAttr("disabled");
            						$("#pmreg48").removeAttr("disabled");
            						$("#t1fn48").attr("disabled", "disabled");
                                    $("#t1reg48").attr("disabled", "disabled");
                                    $("#t2fn48").attr("disabled", "disabled");
                                    $("#t2reg48").attr("disabled", "disabled");
                                    $("#ext48").removeAttr("disabled");    
                                  
                                    
                                      
                                      break;
                                      
            					case "Other 2":
                

            						$("#pmfn48").removeAttr("disabled");
            						$("#pmreg48").removeAttr("disabled");
            						$("#t1fn48").removeAttr("disabled");
            						$("#t1reg48").removeAttr("disabled");
                                    $("#t2fn48").attr("disabled", "disabled");
                                    $("#t2reg48").attr("disabled", "disabled");
                                    $("#ext48").removeAttr("disabled");  
                
                  
                  break;
            					case "Other 3":
                

            						$("#pmfn48").removeAttr("disabled");
            						$("#pmreg48").removeAttr("disabled");
            						$("#t1fn48").removeAttr("disabled");
            						$("#t1reg48").removeAttr("disabled");
            						$("#t2fn48").removeAttr("disabled");
            						$("#t2reg48").removeAttr("disabled");
                                    $("#ext48").removeAttr("disabled");  
                
                  
                  break;
                 default:
                        $("#t1fn48").removeAttr("disabled");
                        $("#t2fn48").removeAttr("disabled");
                        $("#t1reg48").removeAttr("disabled");
                        $("#t2reg48").removeAttr("disabled");
                        $("#pmfn48").removeAttr("disabled");
                        $("#pmreg48").removeAttr("disabled");
                        $("#ext48").removeAttr("disabled");
                    break;
            } 
        	
            
            
            if(type == "Single Rigid"){
                $('#type48').html('<option value="">Type</option><option value="Box">Box</option><option value="Flat Top">Flat Top</option>');
                }
                if(type == "Bogie Rigid"){
                $('#type48').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Prime Mover"){
                $('#type48').html('<option value="">Type</option><option value="Day Cab">Day Cab</option><option value="Sleeper Cab">Sleeper Cab</option>');
                }
                if(type == "Single Combination"){
                $('#type48').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "B Double Combination"){
                $('#type48').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "Single Trailer"){
                $('#type48').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option>');
                }
                if(type == "B Double Trailer"){
                $('#type48').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "FORKLIFT"){
                $('#type48').html('<option value="">Type</option><option value="Small">Small</option><option value="Medium">Medium</option><option value="Large">Large</option>');
                }
                if(type == "VAN/UTE/CAR"){
                $('#type48').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Dolly Trailer"){
                $('#type48').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 1"){
                $('#type48').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 2"){
                $('#type48').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 3"){
                $('#type48').html('<option value="">Type</option><option value=" ">All</option>');
                }
            	}).trigger("change");  
	   
	      	   
   	   
   	   //--------------------------------------49     	
      	
   	   $('#sel49').on('change', function() {
                var type = document.getElementById("sel49").value;
            switch(type) {
                case "Single Rigid":
                      $("#pmfn49").removeAttr("disabled");
                      $("#pmreg49").removeAttr("disabled");
                      $("#ext49").removeAttr("disabled");
                      $("#t1fn49").attr("disabled", "disabled");
                      $("#t1reg49").attr("disabled", "disabled");
                      $("#t2fn49").attr("disabled", "disabled");
                      $("#t2reg49").attr("disabled", "disabled");
                        break;
                case "Bogie Rigid":
                   $("#pmfn49").removeAttr("disabled");
                   $("#pmreg49").removeAttr("disabled");
                   $("#ext49").removeAttr("disabled");
                   $("#t1fn49").attr("disabled", "disabled");
                   $("#t1reg49").attr("disabled", "disabled");
                   $("#t2fn49").attr("disabled", "disabled");
                   $("#t2reg49").attr("disabled", "disabled");
                     break;
                case "Prime Mover":
                  $("#pmfn49").removeAttr("disabled");
                    $("#pmreg49").removeAttr("disabled");
                    $("#ext49").removeAttr("disabled");
                    $("#t1fn49").attr("disabled", "disabled");
                    $("#t1reg49").attr("disabled", "disabled");
                    $("#t2fn49").attr("disabled", "disabled");
                    $("#t2reg49").attr("disabled", "disabled");
                break;
                
                case "Single Combination":
                    $("#t1fn49").removeAttr("disabled");
                    $("#t1reg49").removeAttr("disabled");
                    $("#ext49").removeAttr("disabled");    
                    $("#pmfn49").removeAttr("disabled");
                    $("#pmreg49").removeAttr("disabled");
                    $("#t2fn49").attr("disabled", "disabled");
                    $("#t2reg49").attr("disabled", "disabled");          
            break;
            
                case "B Double Combination":
                    

              	  $("#t1fn49").removeAttr("disabled");
                    $("#t2fn49").removeAttr("disabled");
                    $("#t1reg49").removeAttr("disabled");
                    $("#t2reg49").removeAttr("disabled");
                    $("#pmfn49").removeAttr("disabled");
                    $("#pmreg49").removeAttr("disabled");
                    $("#ext49").removeAttr("disabled");
                  
                    
                    break;
                    
                    
                case "Single Trailer":
                    $("#t1fn49").removeAttr("disabled");
                    $("#t1reg49").removeAttr("disabled");
                    $("#ext49").removeAttr("disabled");    
                    $("#pmfn49").attr("disabled", "disabled");
                    $("#pmreg49").attr("disabled", "disabled");
                    $("#t2fn49").attr("disabled", "disabled");
                    $("#t2reg49").attr("disabled", "disabled");
            break;
            
            
                case "B Double Trailer":
                    $("#t1fn49").removeAttr("disabled");
                    $("#t1reg49").removeAttr("disabled");
                    $("#ext49").removeAttr("disabled");    
                    $("#pmfn49").attr("disabled", "disabled");
                    $("#pmreg49").attr("disabled", "disabled");
                    $("#t2fn49").removeAttr("disabled");
                    $("#t2reg49").removeAttr("disabled");
            break;
            
                case "FORKLIFT":
                    $("#pmfn49").removeAttr("disabled");
                      $("#pmreg49").removeAttr("disabled");
                      $("#ext49").removeAttr("disabled");
                      $("#t1fn49").attr("disabled", "disabled");
                      $("#t1reg49").attr("disabled", "disabled");
                      $("#t2fn49").attr("disabled", "disabled");
                      $("#t2reg49").attr("disabled", "disabled");
                  break;
            
            
                
                case "VAN/UTE/CAR":
                      $("#pmfn49").removeAttr("disabled");
                      $("#pmreg49").removeAttr("disabled");
                      $("#ext49").removeAttr("disabled");
                        $("#t1fn49").attr("disabled", "disabled");
                        $("#t1reg49").attr("disabled", "disabled");
                        $("#t2fn49").attr("disabled", "disabled");
                        $("#t2reg49").attr("disabled", "disabled"); 
                break;
                
                case "Dolly Trailer":
                    $("#t1fn49").removeAttr("disabled");
                    $("#t1reg49").removeAttr("disabled");
                    $("#ext49").removeAttr("disabled");    
                    $("#pmfn49").attr("disabled", "disabled");
                    $("#pmreg49").attr("disabled", "disabled");
                    $("#t2fn49").attr("disabled", "disabled");
                    $("#t2reg49").attr("disabled", "disabled");
            break;
                case "Other 1":


            						$("#pmfn49").removeAttr("disabled");
            						$("#pmreg49").removeAttr("disabled");
            						$("#t1fn49").attr("disabled", "disabled");
                                    $("#t1reg49").attr("disabled", "disabled");
                                    $("#t2fn49").attr("disabled", "disabled");
                                    $("#t2reg49").attr("disabled", "disabled");
                                    $("#ext49").removeAttr("disabled");    
                                  
                                    
                                      
                                      break;
                                      
            					case "Other 2":
                

            						$("#pmfn49").removeAttr("disabled");
            						$("#pmreg49").removeAttr("disabled");
            						$("#t1fn49").removeAttr("disabled");
            						$("#t1reg49").removeAttr("disabled");
                                    $("#t2fn49").attr("disabled", "disabled");
                                    $("#t2reg49").attr("disabled", "disabled");
                                    $("#ext49").removeAttr("disabled");  
                
                  
                  break;
            					case "Other 3":
                

            						$("#pmfn49").removeAttr("disabled");
            						$("#pmreg49").removeAttr("disabled");
            						$("#t1fn49").removeAttr("disabled");
            						$("#t1reg49").removeAttr("disabled");
            						$("#t2fn49").removeAttr("disabled");
            						$("#t2reg49").removeAttr("disabled");
                                    $("#ext49").removeAttr("disabled");  
                
                  
                  break;
                 default:
                        $("#t1fn49").removeAttr("disabled");
                        $("#t2fn49").removeAttr("disabled");
                        $("#t1reg49").removeAttr("disabled");
                        $("#t2reg49").removeAttr("disabled");
                        $("#pmfn49").removeAttr("disabled");
                        $("#pmreg49").removeAttr("disabled");
                        $("#ext49").removeAttr("disabled");
                    break;
            } 
        	
            
            
            if(type == "Single Rigid"){
                $('#type49').html('<option value="">Type</option><option value="Box">Box</option><option value="Flat Top">Flat Top</option>');
                }
                if(type == "Bogie Rigid"){
                $('#type49').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Prime Mover"){
                $('#type49').html('<option value="">Type</option><option value="Day Cab">Day Cab</option><option value="Sleeper Cab">Sleeper Cab</option>');
                }
                if(type == "Single Combination"){
                $('#type49').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "B Double Combination"){
                $('#type49').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "Single Trailer"){
                $('#type49').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option>');
                }
                if(type == "B Double Trailer"){
                $('#type49').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "FORKLIFT"){
                $('#type49').html('<option value="">Type</option><option value="Small">Small</option><option value="Medium">Medium</option><option value="Large">Large</option>');
                }
                if(type == "VAN/UTE/CAR"){
                $('#type49').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Dolly Trailer"){
                $('#type49').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 1"){
                $('#type49').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 2"){
                $('#type49').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 3"){
                $('#type49').html('<option value="">Type</option><option value=" ">All</option>');
                }
            	}).trigger("change");
	      	   
   	   
   	   //--------------------------------------50     	
      	
   	   $('#sel50').on('change', function() {
                var type = document.getElementById("sel50").value;
            switch(type) {
                case "Single Rigid":
                      $("#pmfn50").removeAttr("disabled");
                      $("#pmreg50").removeAttr("disabled");
                      $("#ext50").removeAttr("disabled");
                      $("#t1fn50").attr("disabled", "disabled");
                      $("#t1reg50").attr("disabled", "disabled");
                      $("#t2fn50").attr("disabled", "disabled");
                      $("#t2reg50").attr("disabled", "disabled");
                        break;
                case "Bogie Rigid":
                   $("#pmfn50").removeAttr("disabled");
                   $("#pmreg50").removeAttr("disabled");
                   $("#ext50").removeAttr("disabled");
                   $("#t1fn50").attr("disabled", "disabled");
                   $("#t1reg50").attr("disabled", "disabled");
                   $("#t2fn50").attr("disabled", "disabled");
                   $("#t2reg50").attr("disabled", "disabled");
                     break;
                case "Prime Mover":
                  $("#pmfn50").removeAttr("disabled");
                    $("#pmreg50").removeAttr("disabled");
                    $("#ext50").removeAttr("disabled");
                    $("#t1fn50").attr("disabled", "disabled");
                    $("#t1reg50").attr("disabled", "disabled");
                    $("#t2fn50").attr("disabled", "disabled");
                    $("#t2reg50").attr("disabled", "disabled");
                break;
                
                case "Single Combination":
                    $("#t1fn50").removeAttr("disabled");
                    $("#t1reg50").removeAttr("disabled");
                    $("#ext50").removeAttr("disabled");    
                    $("#pmfn50").removeAttr("disabled");
                    $("#pmreg50").removeAttr("disabled");
                    $("#t2fn50").attr("disabled", "disabled");
                    $("#t2reg50").attr("disabled", "disabled");          
            break;
            
                case "B Double Combination":
                    

              	  $("#t1fn50").removeAttr("disabled");
                    $("#t2fn50").removeAttr("disabled");
                    $("#t1reg50").removeAttr("disabled");
                    $("#t2reg50").removeAttr("disabled");
                    $("#pmfn50").removeAttr("disabled");
                    $("#pmreg50").removeAttr("disabled");
                    $("#ext50").removeAttr("disabled");
                  
                    
                    break;
                    
                    
                case "Single Trailer":
                    $("#t1fn50").removeAttr("disabled");
                    $("#t1reg50").removeAttr("disabled");
                    $("#ext50").removeAttr("disabled");    
                    $("#pmfn50").attr("disabled", "disabled");
                    $("#pmreg50").attr("disabled", "disabled");
                    $("#t2fn50").attr("disabled", "disabled");
                    $("#t2reg50").attr("disabled", "disabled");
            break;
            
            
                case "B Double Trailer":
                    $("#t1fn50").removeAttr("disabled");
                    $("#t1reg50").removeAttr("disabled");
                    $("#ext50").removeAttr("disabled");    
                    $("#pmfn50").attr("disabled", "disabled");
                    $("#pmreg50").attr("disabled", "disabled");
                    $("#t2fn50").removeAttr("disabled");
                    $("#t2reg50").removeAttr("disabled");
            break;
            
                case "FORKLIFT":
                    $("#pmfn50").removeAttr("disabled");
                      $("#pmreg50").removeAttr("disabled");
                      $("#ext50").removeAttr("disabled");
                      $("#t1fn50").attr("disabled", "disabled");
                      $("#t1reg50").attr("disabled", "disabled");
                      $("#t2fn50").attr("disabled", "disabled");
                      $("#t2reg50").attr("disabled", "disabled");
                  break;
            
            
                
                case "VAN/UTE/CAR":
                      $("#pmfn50").removeAttr("disabled");
                      $("#pmreg50").removeAttr("disabled");
                      $("#ext50").removeAttr("disabled");
                        $("#t1fn50").attr("disabled", "disabled");
                        $("#t1reg50").attr("disabled", "disabled");
                        $("#t2fn50").attr("disabled", "disabled");
                        $("#t2reg50").attr("disabled", "disabled"); 
                break;
                
                case "Dolly Trailer":
                    $("#t1fn50").removeAttr("disabled");
                    $("#t1reg50").removeAttr("disabled");
                    $("#ext50").removeAttr("disabled");    
                    $("#pmfn50").attr("disabled", "disabled");
                    $("#pmreg50").attr("disabled", "disabled");
                    $("#t2fn50").attr("disabled", "disabled");
                    $("#t2reg50").attr("disabled", "disabled");
            break;
                case "Other 1":


            						$("#pmfn50").removeAttr("disabled");
            						$("#pmreg50").removeAttr("disabled");
            						$("#t1fn50").attr("disabled", "disabled");
                                    $("#t1reg50").attr("disabled", "disabled");
                                    $("#t2fn50").attr("disabled", "disabled");
                                    $("#t2reg50").attr("disabled", "disabled");
                                    $("#ext50").removeAttr("disabled");    
                                  
                                    
                                      
                                      break;
                                      
            					case "Other 2":
                

            						$("#pmfn50").removeAttr("disabled");
            						$("#pmreg50").removeAttr("disabled");
            						$("#t1fn50").removeAttr("disabled");
            						$("#t1reg50").removeAttr("disabled");
                                    $("#t2fn50").attr("disabled", "disabled");
                                    $("#t2reg50").attr("disabled", "disabled");
                                    $("#ext50").removeAttr("disabled");  
                
                  
                  break;
            					case "Other 3":
                

            						$("#pmfn50").removeAttr("disabled");
            						$("#pmreg50").removeAttr("disabled");
            						$("#t1fn50").removeAttr("disabled");
            						$("#t1reg50").removeAttr("disabled");
            						$("#t2fn50").removeAttr("disabled");
            						$("#t2reg50").removeAttr("disabled");
                                    $("#ext50").removeAttr("disabled");  
                
                  
                  break;
                 default:
                        $("#t1fn50").removeAttr("disabled");
                        $("#t2fn50").removeAttr("disabled");
                        $("#t1reg50").removeAttr("disabled");
                        $("#t2reg50").removeAttr("disabled");
                        $("#pmfn50").removeAttr("disabled");
                        $("#pmreg50").removeAttr("disabled");
                        $("#ext50").removeAttr("disabled");
                    break;
            } 
        	
            
            
            if(type == "Single Rigid"){
                $('#type50').html('<option value="">Type</option><option value="Box">Box</option><option value="Flat Top">Flat Top</option>');
                }
                if(type == "Bogie Rigid"){
                $('#type50').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Prime Mover"){
                $('#type50').html('<option value="">Type</option><option value="Day Cab">Day Cab</option><option value="Sleeper Cab">Sleeper Cab</option>');
                }
                if(type == "Single Combination"){
                $('#type50').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "B Double Combination"){
                $('#type50').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "Single Trailer"){
                $('#type50').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option>');
                }
                if(type == "B Double Trailer"){
                $('#type50').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "FORKLIFT"){
                $('#type50').html('<option value="">Type</option><option value="Small">Small</option><option value="Medium">Medium</option><option value="Large">Large</option>');
                }
                if(type == "VAN/UTE/CAR"){
                $('#type50').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Dolly Trailer"){
                $('#type50').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 1"){
                $('#type50').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 2"){
                $('#type50').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 3"){
                $('#type50').html('<option value="">Type</option><option value=" ">All</option>');
                }
            	}).trigger("change");    
	   
	      	   
   	   
   	   //--------------------------------------51     	
      	
   	   $('#sel51').on('change', function() {
                var type = document.getElementById("sel51").value;
            switch(type) {
                case "Single Rigid":
                      $("#pmfn51").removeAttr("disabled");
                      $("#pmreg51").removeAttr("disabled");
                      $("#ext51").removeAttr("disabled");
                      $("#t1fn51").attr("disabled", "disabled");
                      $("#t1reg51").attr("disabled", "disabled");
                      $("#t2fn51").attr("disabled", "disabled");
                      $("#t2reg51").attr("disabled", "disabled");
                        break;
                case "Bogie Rigid":
                   $("#pmfn51").removeAttr("disabled");
                   $("#pmreg51").removeAttr("disabled");
                   $("#ext51").removeAttr("disabled");
                   $("#t1fn51").attr("disabled", "disabled");
                   $("#t1reg51").attr("disabled", "disabled");
                   $("#t2fn51").attr("disabled", "disabled");
                   $("#t2reg51").attr("disabled", "disabled");
                     break;
                case "Prime Mover":
                  $("#pmfn51").removeAttr("disabled");
                    $("#pmreg51").removeAttr("disabled");
                    $("#ext51").removeAttr("disabled");
                    $("#t1fn51").attr("disabled", "disabled");
                    $("#t1reg51").attr("disabled", "disabled");
                    $("#t2fn51").attr("disabled", "disabled");
                    $("#t2reg51").attr("disabled", "disabled");
                break;
                
                case "Single Combination":
                    $("#t1fn51").removeAttr("disabled");
                    $("#t1reg51").removeAttr("disabled");
                    $("#ext51").removeAttr("disabled");    
                    $("#pmfn51").removeAttr("disabled");
                    $("#pmreg51").removeAttr("disabled");
                    $("#t2fn51").attr("disabled", "disabled");
                    $("#t2reg51").attr("disabled", "disabled");          
            break;
            
                case "B Double Combination":
                    

              	  $("#t1fn51").removeAttr("disabled");
                    $("#t2fn51").removeAttr("disabled");
                    $("#t1reg51").removeAttr("disabled");
                    $("#t2reg51").removeAttr("disabled");
                    $("#pmfn51").removeAttr("disabled");
                    $("#pmreg51").removeAttr("disabled");
                    $("#ext51").removeAttr("disabled");
                  
                    
                    break;
                    
                    
                case "Single Trailer":
                    $("#t1fn51").removeAttr("disabled");
                    $("#t1reg51").removeAttr("disabled");
                    $("#ext51").removeAttr("disabled");    
                    $("#pmfn51").attr("disabled", "disabled");
                    $("#pmreg51").attr("disabled", "disabled");
                    $("#t2fn51").attr("disabled", "disabled");
                    $("#t2reg51").attr("disabled", "disabled");
            break;
            
            
                case "B Double Trailer":
                    $("#t1fn51").removeAttr("disabled");
                    $("#t1reg51").removeAttr("disabled");
                    $("#ext51").removeAttr("disabled");    
                    $("#pmfn51").attr("disabled", "disabled");
                    $("#pmreg51").attr("disabled", "disabled");
                    $("#t2fn51").removeAttr("disabled");
                    $("#t2reg51").removeAttr("disabled");
            break;
            
                case "FORKLIFT":
                    $("#pmfn51").removeAttr("disabled");
                      $("#pmreg51").removeAttr("disabled");
                      $("#ext51").removeAttr("disabled");
                      $("#t1fn51").attr("disabled", "disabled");
                      $("#t1reg51").attr("disabled", "disabled");
                      $("#t2fn51").attr("disabled", "disabled");
                      $("#t2reg51").attr("disabled", "disabled");
                  break;
            
            
                
                case "VAN/UTE/CAR":
                      $("#pmfn51").removeAttr("disabled");
                      $("#pmreg51").removeAttr("disabled");
                      $("#ext51").removeAttr("disabled");
                        $("#t1fn51").attr("disabled", "disabled");
                        $("#t1reg51").attr("disabled", "disabled");
                        $("#t2fn51").attr("disabled", "disabled");
                        $("#t2reg51").attr("disabled", "disabled"); 
                break;
                
                case "Dolly Trailer":
                    $("#t1fn51").removeAttr("disabled");
                    $("#t1reg51").removeAttr("disabled");
                    $("#ext51").removeAttr("disabled");    
                    $("#pmfn51").attr("disabled", "disabled");
                    $("#pmreg51").attr("disabled", "disabled");
                    $("#t2fn51").attr("disabled", "disabled");
                    $("#t2reg51").attr("disabled", "disabled");
            break;
                case "Other 1":


            						$("#pmfn51").removeAttr("disabled");
            						$("#pmreg51").removeAttr("disabled");
            						$("#t1fn51").attr("disabled", "disabled");
                                    $("#t1reg51").attr("disabled", "disabled");
                                    $("#t2fn51").attr("disabled", "disabled");
                                    $("#t2reg51").attr("disabled", "disabled");
                                    $("#ext51").removeAttr("disabled");    
                                  
                                    
                                      
                                      break;
                                      
            					case "Other 2":
                

            						$("#pmfn51").removeAttr("disabled");
            						$("#pmreg51").removeAttr("disabled");
            						$("#t1fn51").removeAttr("disabled");
            						$("#t1reg51").removeAttr("disabled");
                                    $("#t2fn51").attr("disabled", "disabled");
                                    $("#t2reg51").attr("disabled", "disabled");
                                    $("#ext51").removeAttr("disabled");  
                
                  
                  break;
            					case "Other 3":
                

            						$("#pmfn51").removeAttr("disabled");
            						$("#pmreg51").removeAttr("disabled");
            						$("#t1fn51").removeAttr("disabled");
            						$("#t1reg51").removeAttr("disabled");
            						$("#t2fn51").removeAttr("disabled");
            						$("#t2reg51").removeAttr("disabled");
                                    $("#ext51").removeAttr("disabled");  
                
                  
                  break;
                 default:
                        $("#t1fn51").removeAttr("disabled");
                        $("#t2fn51").removeAttr("disabled");
                        $("#t1reg51").removeAttr("disabled");
                        $("#t2reg51").removeAttr("disabled");
                        $("#pmfn51").removeAttr("disabled");
                        $("#pmreg51").removeAttr("disabled");
                        $("#ext51").removeAttr("disabled");
                    break;
            } 
        	
            
            if(type == "Single Rigid"){
                $('#type51').html('<option value="">Type</option><option value="Box">Box</option><option value="Flat Top">Flat Top</option>');
                }
                if(type == "Bogie Rigid"){
                $('#type51').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Prime Mover"){
                $('#type51').html('<option value="">Type</option><option value="Day Cab">Day Cab</option><option value="Sleeper Cab">Sleeper Cab</option>');
                }
                if(type == "Single Combination"){
                $('#type51').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "B Double Combination"){
                $('#type51').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "Single Trailer"){
                $('#type51').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option>');
                }
                if(type == "B Double Trailer"){
                $('#type51').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "FORKLIFT"){
                $('#type51').html('<option value="">Type</option><option value="Small">Small</option><option value="Medium">Medium</option><option value="Large">Large</option>');
                }
                if(type == "VAN/UTE/CAR"){
                $('#type51').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Dolly Trailer"){
                $('#type51').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 1"){
                $('#type51').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 2"){
                $('#type51').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 3"){
                $('#type51').html('<option value="">Type</option><option value=" ">All</option>');
                }
            	}).trigger("change");     
	   
	      	   
   	   //--------------------------------------52     	
      	
   	   $('#sel52').on('change', function() {
                var type = document.getElementById("sel52").value;
            switch(type) {
                case "Single Rigid":
                      $("#pmfn52").removeAttr("disabled");
                      $("#pmreg52").removeAttr("disabled");
                      $("#ext52").removeAttr("disabled");
                      $("#t1fn52").attr("disabled", "disabled");
                      $("#t1reg52").attr("disabled", "disabled");
                      $("#t2fn52").attr("disabled", "disabled");
                      $("#t2reg52").attr("disabled", "disabled");
                        break;
                case "Bogie Rigid":
                   $("#pmfn52").removeAttr("disabled");
                   $("#pmreg52").removeAttr("disabled");
                   $("#ext52").removeAttr("disabled");
                   $("#t1fn52").attr("disabled", "disabled");
                   $("#t1reg52").attr("disabled", "disabled");
                   $("#t2fn52").attr("disabled", "disabled");
                   $("#t2reg52").attr("disabled", "disabled");
                     break;
                case "Prime Mover":
                  $("#pmfn52").removeAttr("disabled");
                    $("#pmreg52").removeAttr("disabled");
                    $("#ext52").removeAttr("disabled");
                    $("#t1fn52").attr("disabled", "disabled");
                    $("#t1reg52").attr("disabled", "disabled");
                    $("#t2fn52").attr("disabled", "disabled");
                    $("#t2reg52").attr("disabled", "disabled");
                break;
                
                case "Single Combination":
                    $("#t1fn52").removeAttr("disabled");
                    $("#t1reg52").removeAttr("disabled");
                    $("#ext52").removeAttr("disabled");    
                    $("#pmfn52").removeAttr("disabled");
                    $("#pmreg52").removeAttr("disabled");
                    $("#t2fn52").attr("disabled", "disabled");
                    $("#t2reg52").attr("disabled", "disabled");          
            break;
            
                case "B Double Combination":
                    

              	  $("#t1fn52").removeAttr("disabled");
                    $("#t2fn52").removeAttr("disabled");
                    $("#t1reg52").removeAttr("disabled");
                    $("#t2reg52").removeAttr("disabled");
                    $("#pmfn52").removeAttr("disabled");
                    $("#pmreg52").removeAttr("disabled");
                    $("#ext52").removeAttr("disabled");
                  
                    
                    break;
                    
                    
                case "Single Trailer":
                    $("#t1fn52").removeAttr("disabled");
                    $("#t1reg52").removeAttr("disabled");
                    $("#ext52").removeAttr("disabled");    
                    $("#pmfn52").attr("disabled", "disabled");
                    $("#pmreg52").attr("disabled", "disabled");
                    $("#t2fn52").attr("disabled", "disabled");
                    $("#t2reg52").attr("disabled", "disabled");
            break;
            
            
                case "B Double Trailer":
                    $("#t1fn52").removeAttr("disabled");
                    $("#t1reg52").removeAttr("disabled");
                    $("#ext52").removeAttr("disabled");    
                    $("#pmfn52").attr("disabled", "disabled");
                    $("#pmreg52").attr("disabled", "disabled");
                    $("#t2fn52").removeAttr("disabled");
                    $("#t2reg52").removeAttr("disabled");
            break;
            
                case "FORKLIFT":
                    $("#pmfn52").removeAttr("disabled");
                      $("#pmreg52").removeAttr("disabled");
                      $("#ext52").removeAttr("disabled");
                      $("#t1fn52").attr("disabled", "disabled");
                      $("#t1reg52").attr("disabled", "disabled");
                      $("#t2fn52").attr("disabled", "disabled");
                      $("#t2reg52").attr("disabled", "disabled");
                  break;
            
            
                
                case "VAN/UTE/CAR":
                      $("#pmfn52").removeAttr("disabled");
                      $("#pmreg52").removeAttr("disabled");
                      $("#ext52").removeAttr("disabled");
                        $("#t1fn52").attr("disabled", "disabled");
                        $("#t1reg52").attr("disabled", "disabled");
                        $("#t2fn52").attr("disabled", "disabled");
                        $("#t2reg52").attr("disabled", "disabled"); 
                break;
                
                case "Dolly Trailer":
                    $("#t1fn52").removeAttr("disabled");
                    $("#t1reg52").removeAttr("disabled");
                    $("#ext52").removeAttr("disabled");    
                    $("#pmfn52").attr("disabled", "disabled");
                    $("#pmreg52").attr("disabled", "disabled");
                    $("#t2fn52").attr("disabled", "disabled");
                    $("#t2reg52").attr("disabled", "disabled");
            break;
                case "Other 1":


            						$("#pmfn52").removeAttr("disabled");
            						$("#pmreg52").removeAttr("disabled");
            						$("#t1fn52").attr("disabled", "disabled");
                                    $("#t1reg52").attr("disabled", "disabled");
                                    $("#t2fn52").attr("disabled", "disabled");
                                    $("#t2reg52").attr("disabled", "disabled");
                                    $("#ext52").removeAttr("disabled");    
                                  
                                    
                                      
                                      break;
                                      
            					case "Other 2":
                

            						$("#pmfn52").removeAttr("disabled");
            						$("#pmreg52").removeAttr("disabled");
            						$("#t1fn52").removeAttr("disabled");
            						$("#t1reg52").removeAttr("disabled");
                                    $("#t2fn52").attr("disabled", "disabled");
                                    $("#t2reg52").attr("disabled", "disabled");
                                    $("#ext52").removeAttr("disabled");  
                
                  
                  break;
            					case "Other 3":
                

            						$("#pmfn52").removeAttr("disabled");
            						$("#pmreg52").removeAttr("disabled");
            						$("#t1fn52").removeAttr("disabled");
            						$("#t1reg52").removeAttr("disabled");
            						$("#t2fn52").removeAttr("disabled");
            						$("#t2reg52").removeAttr("disabled");
                                    $("#ext52").removeAttr("disabled");  
                
                  
                  break;
                 default:
                        $("#t1fn52").removeAttr("disabled");
                        $("#t2fn52").removeAttr("disabled");
                        $("#t1reg52").removeAttr("disabled");
                        $("#t2reg52").removeAttr("disabled");
                        $("#pmfn52").removeAttr("disabled");
                        $("#pmreg52").removeAttr("disabled");
                        $("#ext52").removeAttr("disabled");
                    break;
            } 
        	
            
            
            if(type == "Single Rigid"){
                $('#type52').html('<option value="">Type</option><option value="Box">Box</option><option value="Flat Top">Flat Top</option>');
                }
                if(type == "Bogie Rigid"){
                $('#type52').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Prime Mover"){
                $('#type52').html('<option value="">Type</option><option value="Day Cab">Day Cab</option><option value="Sleeper Cab">Sleeper Cab</option>');
                }
                if(type == "Single Combination"){
                $('#type52').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "B Double Combination"){
                $('#type52').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "Single Trailer"){
                $('#type52').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option>');
                }
                if(type == "B Double Trailer"){
                $('#type52').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "FORKLIFT"){
                $('#type52').html('<option value="">Type</option><option value="Small">Small</option><option value="Medium">Medium</option><option value="Large">Large</option>');
                }
                if(type == "VAN/UTE/CAR"){
                $('#type52').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Dolly Trailer"){
                $('#type52').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 1"){
                $('#type52').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 2"){
                $('#type52').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 3"){
                $('#type52').html('<option value="">Type</option><option value=" ">All</option>');
                }
            	}).trigger("change");    
	   
   	   //--------------------------------------53     	
      	
   	   $('#sel53').on('change', function() {
                var type = document.getElementById("sel53").value;
            switch(type) {
                case "Single Rigid":
                      $("#pmfn53").removeAttr("disabled");
                      $("#pmreg53").removeAttr("disabled");
                      $("#ext53").removeAttr("disabled");
                      $("#t1fn53").attr("disabled", "disabled");
                      $("#t1reg53").attr("disabled", "disabled");
                      $("#t2fn53").attr("disabled", "disabled");
                      $("#t2reg53").attr("disabled", "disabled");
                        break;
                case "Bogie Rigid":
                   $("#pmfn53").removeAttr("disabled");
                   $("#pmreg53").removeAttr("disabled");
                   $("#ext53").removeAttr("disabled");
                   $("#t1fn53").attr("disabled", "disabled");
                   $("#t1reg53").attr("disabled", "disabled");
                   $("#t2fn53").attr("disabled", "disabled");
                   $("#t2reg53").attr("disabled", "disabled");
                     break;
                case "Prime Mover":
                  $("#pmfn53").removeAttr("disabled");
                    $("#pmreg53").removeAttr("disabled");
                    $("#ext53").removeAttr("disabled");
                    $("#t1fn53").attr("disabled", "disabled");
                    $("#t1reg53").attr("disabled", "disabled");
                    $("#t2fn53").attr("disabled", "disabled");
                    $("#t2reg53").attr("disabled", "disabled");
                break;
                
                case "Single Combination":
                    $("#t1fn53").removeAttr("disabled");
                    $("#t1reg53").removeAttr("disabled");
                    $("#ext53").removeAttr("disabled");    
                    $("#pmfn53").removeAttr("disabled");
                    $("#pmreg53").removeAttr("disabled");
                    $("#t2fn53").attr("disabled", "disabled");
                    $("#t2reg53").attr("disabled", "disabled");          
            break;
            
                case "B Double Combination":
                    

              	  $("#t1fn53").removeAttr("disabled");
                    $("#t2fn53").removeAttr("disabled");
                    $("#t1reg53").removeAttr("disabled");
                    $("#t2reg53").removeAttr("disabled");
                    $("#pmfn53").removeAttr("disabled");
                    $("#pmreg53").removeAttr("disabled");
                    $("#ext53").removeAttr("disabled");
                  
                    
                    break;
                    
                    
                case "Single Trailer":
                    $("#t1fn53").removeAttr("disabled");
                    $("#t1reg53").removeAttr("disabled");
                    $("#ext53").removeAttr("disabled");    
                    $("#pmfn53").attr("disabled", "disabled");
                    $("#pmreg53").attr("disabled", "disabled");
                    $("#t2fn53").attr("disabled", "disabled");
                    $("#t2reg53").attr("disabled", "disabled");
            break;
            
            
                case "B Double Trailer":
                    $("#t1fn53").removeAttr("disabled");
                    $("#t1reg53").removeAttr("disabled");
                    $("#ext53").removeAttr("disabled");    
                    $("#pmfn53").attr("disabled", "disabled");
                    $("#pmreg53").attr("disabled", "disabled");
                    $("#t2fn53").removeAttr("disabled");
                    $("#t2reg53").removeAttr("disabled");
            break;
            
                case "FORKLIFT":
                    $("#pmfn53").removeAttr("disabled");
                      $("#pmreg53").removeAttr("disabled");
                      $("#ext53").removeAttr("disabled");
                      $("#t1fn53").attr("disabled", "disabled");
                      $("#t1reg53").attr("disabled", "disabled");
                      $("#t2fn53").attr("disabled", "disabled");
                      $("#t2reg53").attr("disabled", "disabled");
                  break;
            
            
                
                case "VAN/UTE/CAR":
                      $("#pmfn53").removeAttr("disabled");
                      $("#pmreg53").removeAttr("disabled");
                      $("#ext53").removeAttr("disabled");
                        $("#t1fn53").attr("disabled", "disabled");
                        $("#t1reg53").attr("disabled", "disabled");
                        $("#t2fn53").attr("disabled", "disabled");
                        $("#t2reg53").attr("disabled", "disabled"); 
                break;
                
                case "Dolly Trailer":
                    $("#t1fn53").removeAttr("disabled");
                    $("#t1reg53").removeAttr("disabled");
                    $("#ext53").removeAttr("disabled");    
                    $("#pmfn53").attr("disabled", "disabled");
                    $("#pmreg53").attr("disabled", "disabled");
                    $("#t2fn53").attr("disabled", "disabled");
                    $("#t2reg53").attr("disabled", "disabled");
            break;
                case "Other 1":


            						$("#pmfn53").removeAttr("disabled");
            						$("#pmreg53").removeAttr("disabled");
            						$("#t1fn53").attr("disabled", "disabled");
                                    $("#t1reg53").attr("disabled", "disabled");
                                    $("#t2fn53").attr("disabled", "disabled");
                                    $("#t2reg53").attr("disabled", "disabled");
                                    $("#ext53").removeAttr("disabled");    
                                  
                                    
                                      
                                      break;
                                      
            					case "Other 2":
                

            						$("#pmfn53").removeAttr("disabled");
            						$("#pmreg53").removeAttr("disabled");
            						$("#t1fn53").removeAttr("disabled");
            						$("#t1reg53").removeAttr("disabled");
                                    $("#t2fn53").attr("disabled", "disabled");
                                    $("#t2reg53").attr("disabled", "disabled");
                                    $("#ext53").removeAttr("disabled");  
                
                  
                  break;
            					case "Other 3":
                

            						$("#pmfn53").removeAttr("disabled");
            						$("#pmreg53").removeAttr("disabled");
            						$("#t1fn53").removeAttr("disabled");
            						$("#t1reg53").removeAttr("disabled");
            						$("#t2fn53").removeAttr("disabled");
            						$("#t2reg53").removeAttr("disabled");
                                    $("#ext53").removeAttr("disabled");  
                
                  
                  break;
                 default:
                        $("#t1fn53").removeAttr("disabled");
                        $("#t2fn53").removeAttr("disabled");
                        $("#t1reg53").removeAttr("disabled");
                        $("#t2reg53").removeAttr("disabled");
                        $("#pmfn53").removeAttr("disabled");
                        $("#pmreg53").removeAttr("disabled");
                        $("#ext53").removeAttr("disabled");
                    break;
            } 
        	
            
            
            if(type == "Single Rigid"){
                $('#type53').html('<option value="">Type</option><option value="Box">Box</option><option value="Flat Top">Flat Top</option>');
                }
                if(type == "Bogie Rigid"){
                $('#type53').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Prime Mover"){
                $('#type53').html('<option value="">Type</option><option value="Day Cab">Day Cab</option><option value="Sleeper Cab">Sleeper Cab</option>');
                }
                if(type == "Single Combination"){
                $('#type53').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "B Double Combination"){
                $('#type53').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "Single Trailer"){
                $('#type53').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option>');
                }
                if(type == "B Double Trailer"){
                $('#type53').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "FORKLIFT"){
                $('#type53').html('<option value="">Type</option><option value="Small">Small</option><option value="Medium">Medium</option><option value="Large">Large</option>');
                }
                if(type == "VAN/UTE/CAR"){
                $('#type53').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Dolly Trailer"){
                $('#type53').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 1"){
                $('#type53').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 2"){
                $('#type53').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 3"){
                $('#type53').html('<option value="">Type</option><option value=" ">All</option>');
                }
            	}).trigger("change");
	   
	   	      	   
   	   //--------------------------------------54     	
      	
   	   $('#sel54').on('change', function() {
                var type = document.getElementById("sel54").value;
            switch(type) {
                case "Single Rigid":
                      $("#pmfn54").removeAttr("disabled");
                      $("#pmreg54").removeAttr("disabled");
                      $("#ext54").removeAttr("disabled");
                      $("#t1fn54").attr("disabled", "disabled");
                      $("#t1reg54").attr("disabled", "disabled");
                      $("#t2fn54").attr("disabled", "disabled");
                      $("#t2reg54").attr("disabled", "disabled");
                        break;
                case "Bogie Rigid":
                   $("#pmfn54").removeAttr("disabled");
                   $("#pmreg54").removeAttr("disabled");
                   $("#ext54").removeAttr("disabled");
                   $("#t1fn54").attr("disabled", "disabled");
                   $("#t1reg54").attr("disabled", "disabled");
                   $("#t2fn54").attr("disabled", "disabled");
                   $("#t2reg54").attr("disabled", "disabled");
                     break;
                case "Prime Mover":
                  $("#pmfn54").removeAttr("disabled");
                    $("#pmreg54").removeAttr("disabled");
                    $("#ext54").removeAttr("disabled");
                    $("#t1fn54").attr("disabled", "disabled");
                    $("#t1reg54").attr("disabled", "disabled");
                    $("#t2fn54").attr("disabled", "disabled");
                    $("#t2reg54").attr("disabled", "disabled");
                break;
                
                case "Single Combination":
                    $("#t1fn54").removeAttr("disabled");
                    $("#t1reg54").removeAttr("disabled");
                    $("#ext54").removeAttr("disabled");    
                    $("#pmfn54").removeAttr("disabled");
                    $("#pmreg54").removeAttr("disabled");
                    $("#t2fn54").attr("disabled", "disabled");
                    $("#t2reg54").attr("disabled", "disabled");          
            break;
            
                case "B Double Combination":
                    

              	  $("#t1fn54").removeAttr("disabled");
                    $("#t2fn54").removeAttr("disabled");
                    $("#t1reg54").removeAttr("disabled");
                    $("#t2reg54").removeAttr("disabled");
                    $("#pmfn54").removeAttr("disabled");
                    $("#pmreg54").removeAttr("disabled");
                    $("#ext54").removeAttr("disabled");
                  
                    
                    break;
                    
                    
                case "Single Trailer":
                    $("#t1fn54").removeAttr("disabled");
                    $("#t1reg54").removeAttr("disabled");
                    $("#ext54").removeAttr("disabled");    
                    $("#pmfn54").attr("disabled", "disabled");
                    $("#pmreg54").attr("disabled", "disabled");
                    $("#t2fn54").attr("disabled", "disabled");
                    $("#t2reg54").attr("disabled", "disabled");
            break;
            
            
                case "B Double Trailer":
                    $("#t1fn54").removeAttr("disabled");
                    $("#t1reg54").removeAttr("disabled");
                    $("#ext54").removeAttr("disabled");    
                    $("#pmfn54").attr("disabled", "disabled");
                    $("#pmreg54").attr("disabled", "disabled");
                    $("#t2fn54").removeAttr("disabled");
                    $("#t2reg54").removeAttr("disabled");
            break;
            
                case "FORKLIFT":
                    $("#pmfn54").removeAttr("disabled");
                      $("#pmreg54").removeAttr("disabled");
                      $("#ext54").removeAttr("disabled");
                      $("#t1fn54").attr("disabled", "disabled");
                      $("#t1reg54").attr("disabled", "disabled");
                      $("#t2fn54").attr("disabled", "disabled");
                      $("#t2reg54").attr("disabled", "disabled");
                  break;
            
            
                
                case "VAN/UTE/CAR":
                      $("#pmfn54").removeAttr("disabled");
                      $("#pmreg54").removeAttr("disabled");
                      $("#ext54").removeAttr("disabled");
                        $("#t1fn54").attr("disabled", "disabled");
                        $("#t1reg54").attr("disabled", "disabled");
                        $("#t2fn54").attr("disabled", "disabled");
                        $("#t2reg54").attr("disabled", "disabled"); 
                break;
                
                case "Dolly Trailer":
                    $("#t1fn54").removeAttr("disabled");
                    $("#t1reg54").removeAttr("disabled");
                    $("#ext54").removeAttr("disabled");    
                    $("#pmfn54").attr("disabled", "disabled");
                    $("#pmreg54").attr("disabled", "disabled");
                    $("#t2fn54").attr("disabled", "disabled");
                    $("#t2reg54").attr("disabled", "disabled");
            break;
                case "Other 1":


            						$("#pmfn54").removeAttr("disabled");
            						$("#pmreg54").removeAttr("disabled");
            						$("#t1fn54").attr("disabled", "disabled");
                                    $("#t1reg54").attr("disabled", "disabled");
                                    $("#t2fn54").attr("disabled", "disabled");
                                    $("#t2reg54").attr("disabled", "disabled");
                                    $("#ext54").removeAttr("disabled");    
                                  
                                    
                                      
                                      break;
                                      
            					case "Other 2":
                

            						$("#pmfn54").removeAttr("disabled");
            						$("#pmreg54").removeAttr("disabled");
            						$("#t1fn54").removeAttr("disabled");
            						$("#t1reg54").removeAttr("disabled");
                                    $("#t2fn54").attr("disabled", "disabled");
                                    $("#t2reg54").attr("disabled", "disabled");
                                    $("#ext54").removeAttr("disabled");  
                
                  
                  break;
            					case "Other 3":
                

            						$("#pmfn54").removeAttr("disabled");
            						$("#pmreg54").removeAttr("disabled");
            						$("#t1fn54").removeAttr("disabled");
            						$("#t1reg54").removeAttr("disabled");
            						$("#t2fn54").removeAttr("disabled");
            						$("#t2reg54").removeAttr("disabled");
                                    $("#ext54").removeAttr("disabled");  
                
                  
                  break;
                 default:
                        $("#t1fn54").removeAttr("disabled");
                        $("#t2fn54").removeAttr("disabled");
                        $("#t1reg54").removeAttr("disabled");
                        $("#t2reg54").removeAttr("disabled");
                        $("#pmfn54").removeAttr("disabled");
                        $("#pmreg54").removeAttr("disabled");
                        $("#ext54").removeAttr("disabled");
                    break;
            } 
        	
            
            
            if(type == "Single Rigid"){
                $('#type54').html('<option value="">Type</option><option value="Box">Box</option><option value="Flat Top">Flat Top</option>');
                }
                if(type == "Bogie Rigid"){
                $('#type54').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Prime Mover"){
                $('#type54').html('<option value="">Type</option><option value="Day Cab">Day Cab</option><option value="Sleeper Cab">Sleeper Cab</option>');
                }
                if(type == "Single Combination"){
                $('#type54').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "B Double Combination"){
                $('#type54').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "Single Trailer"){
                $('#type54').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option>');
                }
                if(type == "B Double Trailer"){
                $('#type54').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "FORKLIFT"){
                $('#type54').html('<option value="">Type</option><option value="Small">Small</option><option value="Medium">Medium</option><option value="Large">Large</option>');
                }
                if(type == "VAN/UTE/CAR"){
                $('#type54').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Dolly Trailer"){
                $('#type54').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 1"){
                $('#type54').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 2"){
                $('#type54').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 3"){
                $('#type54').html('<option value="">Type</option><option value=" ">All</option>');
                }
            	}).trigger("change");
	    
   	   
   	   //--------------------------------------55     	
      	
   	   $('#sel55').on('change', function() {
                var type = document.getElementById("sel55").value;
            switch(type) {
                case "Single Rigid":
                      $("#pmfn55").removeAttr("disabled");
                      $("#pmreg55").removeAttr("disabled");
                      $("#ext55").removeAttr("disabled");
                      $("#t1fn55").attr("disabled", "disabled");
                      $("#t1reg55").attr("disabled", "disabled");
                      $("#t2fn55").attr("disabled", "disabled");
                      $("#t2reg55").attr("disabled", "disabled");
                        break;
                case "Bogie Rigid":
                   $("#pmfn55").removeAttr("disabled");
                   $("#pmreg55").removeAttr("disabled");
                   $("#ext55").removeAttr("disabled");
                   $("#t1fn55").attr("disabled", "disabled");
                   $("#t1reg55").attr("disabled", "disabled");
                   $("#t2fn55").attr("disabled", "disabled");
                   $("#t2reg55").attr("disabled", "disabled");
                     break;
                case "Prime Mover":
                  $("#pmfn55").removeAttr("disabled");
                    $("#pmreg55").removeAttr("disabled");
                    $("#ext55").removeAttr("disabled");
                    $("#t1fn55").attr("disabled", "disabled");
                    $("#t1reg55").attr("disabled", "disabled");
                    $("#t2fn55").attr("disabled", "disabled");
                    $("#t2reg55").attr("disabled", "disabled");
                break;
                
                case "Single Combination":
                    $("#t1fn55").removeAttr("disabled");
                    $("#t1reg55").removeAttr("disabled");
                    $("#ext55").removeAttr("disabled");    
                    $("#pmfn55").removeAttr("disabled");
                    $("#pmreg55").removeAttr("disabled");
                    $("#t2fn55").attr("disabled", "disabled");
                    $("#t2reg55").attr("disabled", "disabled");          
            break;
            
                case "B Double Combination":
                    

              	  $("#t1fn55").removeAttr("disabled");
                    $("#t2fn55").removeAttr("disabled");
                    $("#t1reg55").removeAttr("disabled");
                    $("#t2reg55").removeAttr("disabled");
                    $("#pmfn55").removeAttr("disabled");
                    $("#pmreg55").removeAttr("disabled");
                    $("#ext55").removeAttr("disabled");
                  
                    
                    break;
                    
                    
                case "Single Trailer":
                    $("#t1fn55").removeAttr("disabled");
                    $("#t1reg55").removeAttr("disabled");
                    $("#ext55").removeAttr("disabled");    
                    $("#pmfn55").attr("disabled", "disabled");
                    $("#pmreg55").attr("disabled", "disabled");
                    $("#t2fn55").attr("disabled", "disabled");
                    $("#t2reg55").attr("disabled", "disabled");
            break;
            
            
                case "B Double Trailer":
                    $("#t1fn55").removeAttr("disabled");
                    $("#t1reg55").removeAttr("disabled");
                    $("#ext55").removeAttr("disabled");    
                    $("#pmfn55").attr("disabled", "disabled");
                    $("#pmreg55").attr("disabled", "disabled");
                    $("#t2fn55").removeAttr("disabled");
                    $("#t2reg55").removeAttr("disabled");
            break;
            
                case "FORKLIFT":
                    $("#pmfn55").removeAttr("disabled");
                      $("#pmreg55").removeAttr("disabled");
                      $("#ext55").removeAttr("disabled");
                      $("#t1fn55").attr("disabled", "disabled");
                      $("#t1reg55").attr("disabled", "disabled");
                      $("#t2fn55").attr("disabled", "disabled");
                      $("#t2reg55").attr("disabled", "disabled");
                  break;
            
            
                
                case "VAN/UTE/CAR":
                      $("#pmfn55").removeAttr("disabled");
                      $("#pmreg55").removeAttr("disabled");
                      $("#ext55").removeAttr("disabled");
                        $("#t1fn55").attr("disabled", "disabled");
                        $("#t1reg55").attr("disabled", "disabled");
                        $("#t2fn55").attr("disabled", "disabled");
                        $("#t2reg55").attr("disabled", "disabled"); 
                break;
                
                case "Dolly Trailer":
                    $("#t1fn55").removeAttr("disabled");
                    $("#t1reg55").removeAttr("disabled");
                    $("#ext55").removeAttr("disabled");    
                    $("#pmfn55").attr("disabled", "disabled");
                    $("#pmreg55").attr("disabled", "disabled");
                    $("#t2fn55").attr("disabled", "disabled");
                    $("#t2reg55").attr("disabled", "disabled");
            break;
                case "Other 1":


            						$("#pmfn55").removeAttr("disabled");
            						$("#pmreg55").removeAttr("disabled");
            						$("#t1fn55").attr("disabled", "disabled");
                                    $("#t1reg55").attr("disabled", "disabled");
                                    $("#t2fn55").attr("disabled", "disabled");
                                    $("#t2reg55").attr("disabled", "disabled");
                                    $("#ext55").removeAttr("disabled");    
                                  
                                    
                                      
                                      break;
                                      
            					case "Other 2":
                

            						$("#pmfn55").removeAttr("disabled");
            						$("#pmreg55").removeAttr("disabled");
            						$("#t1fn55").removeAttr("disabled");
            						$("#t1reg55").removeAttr("disabled");
                                    $("#t2fn55").attr("disabled", "disabled");
                                    $("#t2reg55").attr("disabled", "disabled");
                                    $("#ext55").removeAttr("disabled");  
                
                  
                  break;
            					case "Other 3":
                

            						$("#pmfn55").removeAttr("disabled");
            						$("#pmreg55").removeAttr("disabled");
            						$("#t1fn55").removeAttr("disabled");
            						$("#t1reg55").removeAttr("disabled");
            						$("#t2fn55").removeAttr("disabled");
            						$("#t2reg55").removeAttr("disabled");
                                    $("#ext55").removeAttr("disabled");  
                
                  
                  break;
                 default:
                        $("#t1fn55").removeAttr("disabled");
                        $("#t2fn55").removeAttr("disabled");
                        $("#t1reg55").removeAttr("disabled");
                        $("#t2reg55").removeAttr("disabled");
                        $("#pmfn55").removeAttr("disabled");
                        $("#pmreg55").removeAttr("disabled");
                        $("#ext55").removeAttr("disabled");
                    break;
            } 
        	
            
            if(type == "Single Rigid"){
                $('#type55').html('<option value="">Type</option><option value="Box">Box</option><option value="Flat Top">Flat Top</option>');
                }
                if(type == "Bogie Rigid"){
                $('#type55').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Prime Mover"){
                $('#type55').html('<option value="">Type</option><option value="Day Cab">Day Cab</option><option value="Sleeper Cab">Sleeper Cab</option>');
                }
                if(type == "Single Combination"){
                $('#type55').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "B Double Combination"){
                $('#type55').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "Single Trailer"){
                $('#type55').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option>');
                }
                if(type == "B Double Trailer"){
                $('#type55').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "FORKLIFT"){
                $('#type55').html('<option value="">Type</option><option value="Small">Small</option><option value="Medium">Medium</option><option value="Large">Large</option>');
                }
                if(type == "VAN/UTE/CAR"){
                $('#type55').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Dolly Trailer"){
                $('#type55').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 1"){
                $('#type55').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 2"){
                $('#type55').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 3"){
                $('#type55').html('<option value="">Type</option><option value=" ">All</option>');
                }
            	}).trigger("change");
	      	   
   	   
   	   
   	   //--------------------------------------56     	
      	
   	   $('#sel56').on('change', function() {
                var type = document.getElementById("sel56").value;
            switch(type) {
                case "Single Rigid":
                      $("#pmfn56").removeAttr("disabled");
                      $("#pmreg56").removeAttr("disabled");
                      $("#ext56").removeAttr("disabled");
                      $("#t1fn56").attr("disabled", "disabled");
                      $("#t1reg56").attr("disabled", "disabled");
                      $("#t2fn56").attr("disabled", "disabled");
                      $("#t2reg56").attr("disabled", "disabled");
                        break;
                case "Bogie Rigid":
                   $("#pmfn56").removeAttr("disabled");
                   $("#pmreg56").removeAttr("disabled");
                   $("#ext56").removeAttr("disabled");
                   $("#t1fn56").attr("disabled", "disabled");
                   $("#t1reg56").attr("disabled", "disabled");
                   $("#t2fn56").attr("disabled", "disabled");
                   $("#t2reg56").attr("disabled", "disabled");
                     break;
                case "Prime Mover":
                  $("#pmfn56").removeAttr("disabled");
                    $("#pmreg56").removeAttr("disabled");
                    $("#ext56").removeAttr("disabled");
                    $("#t1fn56").attr("disabled", "disabled");
                    $("#t1reg56").attr("disabled", "disabled");
                    $("#t2fn56").attr("disabled", "disabled");
                    $("#t2reg56").attr("disabled", "disabled");
                break;
                
                case "Single Combination":
                    $("#t1fn56").removeAttr("disabled");
                    $("#t1reg56").removeAttr("disabled");
                    $("#ext56").removeAttr("disabled");    
                    $("#pmfn56").removeAttr("disabled");
                    $("#pmreg56").removeAttr("disabled");
                    $("#t2fn56").attr("disabled", "disabled");
                    $("#t2reg56").attr("disabled", "disabled");          
            break;
            
                case "B Double Combination":
                    

              	  $("#t1fn56").removeAttr("disabled");
                    $("#t2fn56").removeAttr("disabled");
                    $("#t1reg56").removeAttr("disabled");
                    $("#t2reg56").removeAttr("disabled");
                    $("#pmfn56").removeAttr("disabled");
                    $("#pmreg56").removeAttr("disabled");
                    $("#ext56").removeAttr("disabled");
                  
                    
                    break;
                    
                    
                case "Single Trailer":
                    $("#t1fn56").removeAttr("disabled");
                    $("#t1reg56").removeAttr("disabled");
                    $("#ext56").removeAttr("disabled");    
                    $("#pmfn56").attr("disabled", "disabled");
                    $("#pmreg56").attr("disabled", "disabled");
                    $("#t2fn56").attr("disabled", "disabled");
                    $("#t2reg56").attr("disabled", "disabled");
            break;
            
            
                case "B Double Trailer":
                    $("#t1fn56").removeAttr("disabled");
                    $("#t1reg56").removeAttr("disabled");
                    $("#ext56").removeAttr("disabled");    
                    $("#pmfn56").attr("disabled", "disabled");
                    $("#pmreg56").attr("disabled", "disabled");
                    $("#t2fn56").removeAttr("disabled");
                    $("#t2reg56").removeAttr("disabled");
            break;
            
                case "FORKLIFT":
                    $("#pmfn56").removeAttr("disabled");
                      $("#pmreg56").removeAttr("disabled");
                      $("#ext56").removeAttr("disabled");
                      $("#t1fn56").attr("disabled", "disabled");
                      $("#t1reg56").attr("disabled", "disabled");
                      $("#t2fn56").attr("disabled", "disabled");
                      $("#t2reg56").attr("disabled", "disabled");
                  break;
            
            
                
                case "VAN/UTE/CAR":
                      $("#pmfn56").removeAttr("disabled");
                      $("#pmreg56").removeAttr("disabled");
                      $("#ext56").removeAttr("disabled");
                        $("#t1fn56").attr("disabled", "disabled");
                        $("#t1reg56").attr("disabled", "disabled");
                        $("#t2fn56").attr("disabled", "disabled");
                        $("#t2reg56").attr("disabled", "disabled"); 
                break;
                
                case "Dolly Trailer":
                    $("#t1fn56").removeAttr("disabled");
                    $("#t1reg56").removeAttr("disabled");
                    $("#ext56").removeAttr("disabled");    
                    $("#pmfn56").attr("disabled", "disabled");
                    $("#pmreg56").attr("disabled", "disabled");
                    $("#t2fn56").attr("disabled", "disabled");
                    $("#t2reg56").attr("disabled", "disabled");
            break;
                case "Other 1":


            						$("#pmfn56").removeAttr("disabled");
            						$("#pmreg56").removeAttr("disabled");
            						$("#t1fn56").attr("disabled", "disabled");
                                    $("#t1reg56").attr("disabled", "disabled");
                                    $("#t2fn56").attr("disabled", "disabled");
                                    $("#t2reg56").attr("disabled", "disabled");
                                    $("#ext56").removeAttr("disabled");    
                                  
                                    
                                      
                                      break;
                                      
            					case "Other 2":
                

            						$("#pmfn56").removeAttr("disabled");
            						$("#pmreg56").removeAttr("disabled");
            						$("#t1fn56").removeAttr("disabled");
            						$("#t1reg56").removeAttr("disabled");
                                    $("#t2fn56").attr("disabled", "disabled");
                                    $("#t2reg56").attr("disabled", "disabled");
                                    $("#ext56").removeAttr("disabled");  
                
                  
                  break;
            					case "Other 3":
                

            						$("#pmfn56").removeAttr("disabled");
            						$("#pmreg56").removeAttr("disabled");
            						$("#t1fn56").removeAttr("disabled");
            						$("#t1reg56").removeAttr("disabled");
            						$("#t2fn56").removeAttr("disabled");
            						$("#t2reg56").removeAttr("disabled");
                                    $("#ext56").removeAttr("disabled");  
                
                  
                  break;
                 default:
                        $("#t1fn56").removeAttr("disabled");
                        $("#t2fn56").removeAttr("disabled");
                        $("#t1reg56").removeAttr("disabled");
                        $("#t2reg56").removeAttr("disabled");
                        $("#pmfn56").removeAttr("disabled");
                        $("#pmreg56").removeAttr("disabled");
                        $("#ext56").removeAttr("disabled");
                    break;
            } 
        	
            
            
            if(type == "Single Rigid"){
                $('#type56').html('<option value="">Type</option><option value="Box">Box</option><option value="Flat Top">Flat Top</option>');
                }
                if(type == "Bogie Rigid"){
                $('#type56').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Prime Mover"){
                $('#type56').html('<option value="">Type</option><option value="Day Cab">Day Cab</option><option value="Sleeper Cab">Sleeper Cab</option>');
                }
                if(type == "Single Combination"){
                $('#type56').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "B Double Combination"){
                $('#type56').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "Single Trailer"){
                $('#type56').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option>');
                }
                if(type == "B Double Trailer"){
                $('#type56').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "FORKLIFT"){
                $('#type56').html('<option value="">Type</option><option value="Small">Small</option><option value="Medium">Medium</option><option value="Large">Large</option>');
                }
                if(type == "VAN/UTE/CAR"){
                $('#type56').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Dolly Trailer"){
                $('#type56').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 1"){
                $('#type56').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 2"){
                $('#type56').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 3"){
                $('#type56').html('<option value="">Type</option><option value=" ">All</option>');
                }
            	}).trigger("change");      
	   
	      	   
   	   
   	   //--------------------------------------57     	
      	
   	   $('#sel57').on('change', function() {
                var type = document.getElementById("sel57").value;
            switch(type) {
                case "Single Rigid":
                      $("#pmfn57").removeAttr("disabled");
                      $("#pmreg57").removeAttr("disabled");
                      $("#ext57").removeAttr("disabled");
                      $("#t1fn57").attr("disabled", "disabled");
                      $("#t1reg57").attr("disabled", "disabled");
                      $("#t2fn57").attr("disabled", "disabled");
                      $("#t2reg57").attr("disabled", "disabled");
                        break;
                case "Bogie Rigid":
                   $("#pmfn57").removeAttr("disabled");
                   $("#pmreg57").removeAttr("disabled");
                   $("#ext57").removeAttr("disabled");
                   $("#t1fn57").attr("disabled", "disabled");
                   $("#t1reg57").attr("disabled", "disabled");
                   $("#t2fn57").attr("disabled", "disabled");
                   $("#t2reg57").attr("disabled", "disabled");
                     break;
                case "Prime Mover":
                  $("#pmfn57").removeAttr("disabled");
                    $("#pmreg57").removeAttr("disabled");
                    $("#ext57").removeAttr("disabled");
                    $("#t1fn57").attr("disabled", "disabled");
                    $("#t1reg57").attr("disabled", "disabled");
                    $("#t2fn57").attr("disabled", "disabled");
                    $("#t2reg57").attr("disabled", "disabled");
                break;
                
                case "Single Combination":
                    $("#t1fn57").removeAttr("disabled");
                    $("#t1reg57").removeAttr("disabled");
                    $("#ext57").removeAttr("disabled");    
                    $("#pmfn57").removeAttr("disabled");
                    $("#pmreg57").removeAttr("disabled");
                    $("#t2fn57").attr("disabled", "disabled");
                    $("#t2reg57").attr("disabled", "disabled");          
            break;
            
                case "B Double Combination":
                    

              	  $("#t1fn57").removeAttr("disabled");
                    $("#t2fn57").removeAttr("disabled");
                    $("#t1reg57").removeAttr("disabled");
                    $("#t2reg57").removeAttr("disabled");
                    $("#pmfn57").removeAttr("disabled");
                    $("#pmreg57").removeAttr("disabled");
                    $("#ext57").removeAttr("disabled");
                  
                    
                    break;
                    
                    
                case "Single Trailer":
                    $("#t1fn57").removeAttr("disabled");
                    $("#t1reg57").removeAttr("disabled");
                    $("#ext57").removeAttr("disabled");    
                    $("#pmfn57").attr("disabled", "disabled");
                    $("#pmreg57").attr("disabled", "disabled");
                    $("#t2fn57").attr("disabled", "disabled");
                    $("#t2reg57").attr("disabled", "disabled");
            break;
            
            
                case "B Double Trailer":
                    $("#t1fn57").removeAttr("disabled");
                    $("#t1reg57").removeAttr("disabled");
                    $("#ext57").removeAttr("disabled");    
                    $("#pmfn57").attr("disabled", "disabled");
                    $("#pmreg57").attr("disabled", "disabled");
                    $("#t2fn57").removeAttr("disabled");
                    $("#t2reg57").removeAttr("disabled");
            break;
            
                case "FORKLIFT":
                    $("#pmfn57").removeAttr("disabled");
                      $("#pmreg57").removeAttr("disabled");
                      $("#ext57").removeAttr("disabled");
                      $("#t1fn57").attr("disabled", "disabled");
                      $("#t1reg57").attr("disabled", "disabled");
                      $("#t2fn57").attr("disabled", "disabled");
                      $("#t2reg57").attr("disabled", "disabled");
                  break;
            
            
                
                case "VAN/UTE/CAR":
                      $("#pmfn57").removeAttr("disabled");
                      $("#pmreg57").removeAttr("disabled");
                      $("#ext57").removeAttr("disabled");
                        $("#t1fn57").attr("disabled", "disabled");
                        $("#t1reg57").attr("disabled", "disabled");
                        $("#t2fn57").attr("disabled", "disabled");
                        $("#t2reg57").attr("disabled", "disabled"); 
                break;
                
                case "Dolly Trailer":
                    $("#t1fn57").removeAttr("disabled");
                    $("#t1reg57").removeAttr("disabled");
                    $("#ext57").removeAttr("disabled");    
                    $("#pmfn57").attr("disabled", "disabled");
                    $("#pmreg57").attr("disabled", "disabled");
                    $("#t2fn57").attr("disabled", "disabled");
                    $("#t2reg57").attr("disabled", "disabled");
            break;
                case "Other 1":


            						$("#pmfn57").removeAttr("disabled");
            						$("#pmreg57").removeAttr("disabled");
            						$("#t1fn57").attr("disabled", "disabled");
                                    $("#t1reg57").attr("disabled", "disabled");
                                    $("#t2fn57").attr("disabled", "disabled");
                                    $("#t2reg57").attr("disabled", "disabled");
                                    $("#ext57").removeAttr("disabled");    
                                  
                                    
                                      
                                      break;
                                      
            					case "Other 2":
                

            						$("#pmfn57").removeAttr("disabled");
            						$("#pmreg57").removeAttr("disabled");
            						$("#t1fn57").removeAttr("disabled");
            						$("#t1reg57").removeAttr("disabled");
                                    $("#t2fn57").attr("disabled", "disabled");
                                    $("#t2reg57").attr("disabled", "disabled");
                                    $("#ext57").removeAttr("disabled");  
                
                  
                  break;
            					case "Other 3":
                

            						$("#pmfn57").removeAttr("disabled");
            						$("#pmreg57").removeAttr("disabled");
            						$("#t1fn57").removeAttr("disabled");
            						$("#t1reg57").removeAttr("disabled");
            						$("#t2fn57").removeAttr("disabled");
            						$("#t2reg57").removeAttr("disabled");
                                    $("#ext57").removeAttr("disabled");  
                
                  
                  break;
                 default:
                        $("#t1fn57").removeAttr("disabled");
                        $("#t2fn57").removeAttr("disabled");
                        $("#t1reg57").removeAttr("disabled");
                        $("#t2reg57").removeAttr("disabled");
                        $("#pmfn57").removeAttr("disabled");
                        $("#pmreg57").removeAttr("disabled");
                        $("#ext57").removeAttr("disabled");
                    break;
            } 
        	
            
            
            if(type == "Single Rigid"){
                $('#type57').html('<option value="">Type</option><option value="Box">Box</option><option value="Flat Top">Flat Top</option>');
                }
                if(type == "Bogie Rigid"){
                $('#type57').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Prime Mover"){
                $('#type57').html('<option value="">Type</option><option value="Day Cab">Day Cab</option><option value="Sleeper Cab">Sleeper Cab</option>');
                }
                if(type == "Single Combination"){
                $('#type57').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "B Double Combination"){
                $('#type57').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "Single Trailer"){
                $('#type57').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option>');
                }
                if(type == "B Double Trailer"){
                $('#type57').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "FORKLIFT"){
                $('#type57').html('<option value="">Type</option><option value="Small">Small</option><option value="Medium">Medium</option><option value="Large">Large</option>');
                }
                if(type == "VAN/UTE/CAR"){
                $('#type57').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Dolly Trailer"){
                $('#type57').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 1"){
                $('#type57').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 2"){
                $('#type57').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 3"){
                $('#type57').html('<option value="">Type</option><option value=" ">All</option>');
                }
            	}).trigger("change");
	   
	      	   
   	   
   	   //--------------------------------------58     	
      	
   	   $('#sel58').on('change', function() {
                var type = document.getElementById("sel58").value;
            switch(type) {
                case "Single Rigid":
                      $("#pmfn58").removeAttr("disabled");
                      $("#pmreg58").removeAttr("disabled");
                      $("#ext58").removeAttr("disabled");
                      $("#t1fn58").attr("disabled", "disabled");
                      $("#t1reg58").attr("disabled", "disabled");
                      $("#t2fn58").attr("disabled", "disabled");
                      $("#t2reg58").attr("disabled", "disabled");
                        break;
                case "Bogie Rigid":
                   $("#pmfn58").removeAttr("disabled");
                   $("#pmreg58").removeAttr("disabled");
                   $("#ext58").removeAttr("disabled");
                   $("#t1fn58").attr("disabled", "disabled");
                   $("#t1reg58").attr("disabled", "disabled");
                   $("#t2fn58").attr("disabled", "disabled");
                   $("#t2reg58").attr("disabled", "disabled");
                     break;
                case "Prime Mover":
                  $("#pmfn58").removeAttr("disabled");
                    $("#pmreg58").removeAttr("disabled");
                    $("#ext58").removeAttr("disabled");
                    $("#t1fn58").attr("disabled", "disabled");
                    $("#t1reg58").attr("disabled", "disabled");
                    $("#t2fn58").attr("disabled", "disabled");
                    $("#t2reg58").attr("disabled", "disabled");
                break;
                
                case "Single Combination":
                    $("#t1fn58").removeAttr("disabled");
                    $("#t1reg58").removeAttr("disabled");
                    $("#ext58").removeAttr("disabled");    
                    $("#pmfn58").removeAttr("disabled");
                    $("#pmreg58").removeAttr("disabled");
                    $("#t2fn58").attr("disabled", "disabled");
                    $("#t2reg58").attr("disabled", "disabled");          
            break;
            
                case "B Double Combination":
                    

              	  $("#t1fn58").removeAttr("disabled");
                    $("#t2fn58").removeAttr("disabled");
                    $("#t1reg58").removeAttr("disabled");
                    $("#t2reg58").removeAttr("disabled");
                    $("#pmfn58").removeAttr("disabled");
                    $("#pmreg58").removeAttr("disabled");
                    $("#ext58").removeAttr("disabled");
                  
                    
                    break;
                    
                    
                case "Single Trailer":
                    $("#t1fn58").removeAttr("disabled");
                    $("#t1reg58").removeAttr("disabled");
                    $("#ext58").removeAttr("disabled");    
                    $("#pmfn58").attr("disabled", "disabled");
                    $("#pmreg58").attr("disabled", "disabled");
                    $("#t2fn58").attr("disabled", "disabled");
                    $("#t2reg58").attr("disabled", "disabled");
            break;
            
            
                case "B Double Trailer":
                    $("#t1fn58").removeAttr("disabled");
                    $("#t1reg58").removeAttr("disabled");
                    $("#ext58").removeAttr("disabled");    
                    $("#pmfn58").attr("disabled", "disabled");
                    $("#pmreg58").attr("disabled", "disabled");
                    $("#t2fn58").removeAttr("disabled");
                    $("#t2reg58").removeAttr("disabled");
            break;
            
                case "FORKLIFT":
                    $("#pmfn58").removeAttr("disabled");
                      $("#pmreg58").removeAttr("disabled");
                      $("#ext58").removeAttr("disabled");
                      $("#t1fn58").attr("disabled", "disabled");
                      $("#t1reg58").attr("disabled", "disabled");
                      $("#t2fn58").attr("disabled", "disabled");
                      $("#t2reg58").attr("disabled", "disabled");
                  break;
            
            
                
                case "VAN/UTE/CAR":
                      $("#pmfn58").removeAttr("disabled");
                      $("#pmreg58").removeAttr("disabled");
                      $("#ext58").removeAttr("disabled");
                        $("#t1fn58").attr("disabled", "disabled");
                        $("#t1reg58").attr("disabled", "disabled");
                        $("#t2fn58").attr("disabled", "disabled");
                        $("#t2reg58").attr("disabled", "disabled"); 
                break;
                
                case "Dolly Trailer":
                    $("#t1fn58").removeAttr("disabled");
                    $("#t1reg58").removeAttr("disabled");
                    $("#ext58").removeAttr("disabled");    
                    $("#pmfn58").attr("disabled", "disabled");
                    $("#pmreg58").attr("disabled", "disabled");
                    $("#t2fn58").attr("disabled", "disabled");
                    $("#t2reg58").attr("disabled", "disabled");
            break;
                case "Other 1":


            						$("#pmfn58").removeAttr("disabled");
            						$("#pmreg58").removeAttr("disabled");
            						$("#t1fn58").attr("disabled", "disabled");
                                    $("#t1reg58").attr("disabled", "disabled");
                                    $("#t2fn58").attr("disabled", "disabled");
                                    $("#t2reg58").attr("disabled", "disabled");
                                    $("#ext58").removeAttr("disabled");    
                                  
                                    
                                      
                                      break;
                                      
            					case "Other 2":
                

            						$("#pmfn58").removeAttr("disabled");
            						$("#pmreg58").removeAttr("disabled");
            						$("#t1fn58").removeAttr("disabled");
            						$("#t1reg58").removeAttr("disabled");
                                    $("#t2fn58").attr("disabled", "disabled");
                                    $("#t2reg58").attr("disabled", "disabled");
                                    $("#ext58").removeAttr("disabled");  
                
                  
                  break;
            					case "Other 3":
                

            						$("#pmfn58").removeAttr("disabled");
            						$("#pmreg58").removeAttr("disabled");
            						$("#t1fn58").removeAttr("disabled");
            						$("#t1reg58").removeAttr("disabled");
            						$("#t2fn58").removeAttr("disabled");
            						$("#t2reg58").removeAttr("disabled");
                                    $("#ext58").removeAttr("disabled");  
                
                  
                  break;
                 default:
                        $("#t1fn58").removeAttr("disabled");
                        $("#t2fn58").removeAttr("disabled");
                        $("#t1reg58").removeAttr("disabled");
                        $("#t2reg58").removeAttr("disabled");
                        $("#pmfn58").removeAttr("disabled");
                        $("#pmreg58").removeAttr("disabled");
                        $("#ext58").removeAttr("disabled");
                    break;
            } 
        	
            
            
            if(type == "Single Rigid"){
                $('#type58').html('<option value="">Type</option><option value="Box">Box</option><option value="Flat Top">Flat Top</option>');
                }
                if(type == "Bogie Rigid"){
                $('#type58').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Prime Mover"){
                $('#type58').html('<option value="">Type</option><option value="Day Cab">Day Cab</option><option value="Sleeper Cab">Sleeper Cab</option>');
                }
                if(type == "Single Combination"){
                $('#type58').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "B Double Combination"){
                $('#type58').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "Single Trailer"){
                $('#type58').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option>');
                }
                if(type == "B Double Trailer"){
                $('#type58').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "FORKLIFT"){
                $('#type58').html('<option value="">Type</option><option value="Small">Small</option><option value="Medium">Medium</option><option value="Large">Large</option>');
                }
                if(type == "VAN/UTE/CAR"){
                $('#type58').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Dolly Trailer"){
                $('#type58').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 1"){
                $('#type58').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 2"){
                $('#type58').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 3"){
                $('#type58').html('<option value="">Type</option><option value=" ">All</option>');
                }
            	}).trigger("change");
	      	   
   	   
   	   //--------------------------------------59     	
      	
   	   $('#sel59').on('change', function() {
                var type = document.getElementById("sel59").value;
            switch(type) {
                case "Single Rigid":
                      $("#pmfn59").removeAttr("disabled");
                      $("#pmreg59").removeAttr("disabled");
                      $("#ext59").removeAttr("disabled");
                      $("#t1fn59").attr("disabled", "disabled");
                      $("#t1reg59").attr("disabled", "disabled");
                      $("#t2fn59").attr("disabled", "disabled");
                      $("#t2reg59").attr("disabled", "disabled");
                        break;
                case "Bogie Rigid":
                   $("#pmfn59").removeAttr("disabled");
                   $("#pmreg59").removeAttr("disabled");
                   $("#ext59").removeAttr("disabled");
                   $("#t1fn59").attr("disabled", "disabled");
                   $("#t1reg59").attr("disabled", "disabled");
                   $("#t2fn59").attr("disabled", "disabled");
                   $("#t2reg59").attr("disabled", "disabled");
                     break;
                case "Prime Mover":
                  $("#pmfn59").removeAttr("disabled");
                    $("#pmreg59").removeAttr("disabled");
                    $("#ext59").removeAttr("disabled");
                    $("#t1fn59").attr("disabled", "disabled");
                    $("#t1reg59").attr("disabled", "disabled");
                    $("#t2fn59").attr("disabled", "disabled");
                    $("#t2reg59").attr("disabled", "disabled");
                break;
                
                case "Single Combination":
                    $("#t1fn59").removeAttr("disabled");
                    $("#t1reg59").removeAttr("disabled");
                    $("#ext59").removeAttr("disabled");    
                    $("#pmfn59").removeAttr("disabled");
                    $("#pmreg59").removeAttr("disabled");
                    $("#t2fn59").attr("disabled", "disabled");
                    $("#t2reg59").attr("disabled", "disabled");          
            break;
            
                case "B Double Combination":
                    

              	  $("#t1fn59").removeAttr("disabled");
                    $("#t2fn59").removeAttr("disabled");
                    $("#t1reg59").removeAttr("disabled");
                    $("#t2reg59").removeAttr("disabled");
                    $("#pmfn59").removeAttr("disabled");
                    $("#pmreg59").removeAttr("disabled");
                    $("#ext59").removeAttr("disabled");
                  
                    
                    break;
                    
                    
                case "Single Trailer":
                    $("#t1fn59").removeAttr("disabled");
                    $("#t1reg59").removeAttr("disabled");
                    $("#ext59").removeAttr("disabled");    
                    $("#pmfn59").attr("disabled", "disabled");
                    $("#pmreg59").attr("disabled", "disabled");
                    $("#t2fn59").attr("disabled", "disabled");
                    $("#t2reg59").attr("disabled", "disabled");
            break;
            
            
                case "B Double Trailer":
                    $("#t1fn59").removeAttr("disabled");
                    $("#t1reg59").removeAttr("disabled");
                    $("#ext59").removeAttr("disabled");    
                    $("#pmfn59").attr("disabled", "disabled");
                    $("#pmreg59").attr("disabled", "disabled");
                    $("#t2fn59").removeAttr("disabled");
                    $("#t2reg59").removeAttr("disabled");
            break;
            
                case "FORKLIFT":
                    $("#pmfn59").removeAttr("disabled");
                      $("#pmreg59").removeAttr("disabled");
                      $("#ext59").removeAttr("disabled");
                      $("#t1fn59").attr("disabled", "disabled");
                      $("#t1reg59").attr("disabled", "disabled");
                      $("#t2fn59").attr("disabled", "disabled");
                      $("#t2reg59").attr("disabled", "disabled");
                  break;
            
            
                
                case "VAN/UTE/CAR":
                      $("#pmfn59").removeAttr("disabled");
                      $("#pmreg59").removeAttr("disabled");
                      $("#ext59").removeAttr("disabled");
                        $("#t1fn59").attr("disabled", "disabled");
                        $("#t1reg59").attr("disabled", "disabled");
                        $("#t2fn59").attr("disabled", "disabled");
                        $("#t2reg59").attr("disabled", "disabled"); 
                break;
                
                case "Dolly Trailer":
                    $("#t1fn59").removeAttr("disabled");
                    $("#t1reg59").removeAttr("disabled");
                    $("#ext59").removeAttr("disabled");    
                    $("#pmfn59").attr("disabled", "disabled");
                    $("#pmreg59").attr("disabled", "disabled");
                    $("#t2fn59").attr("disabled", "disabled");
                    $("#t2reg59").attr("disabled", "disabled");
            break;
                case "Other 1":


            						$("#pmfn59").removeAttr("disabled");
            						$("#pmreg59").removeAttr("disabled");
            						$("#t1fn59").attr("disabled", "disabled");
                                    $("#t1reg59").attr("disabled", "disabled");
                                    $("#t2fn59").attr("disabled", "disabled");
                                    $("#t2reg59").attr("disabled", "disabled");
                                    $("#ext59").removeAttr("disabled");    
                                  
                                    
                                      
                                      break;
                                      
            					case "Other 2":
                

            						$("#pmfn59").removeAttr("disabled");
            						$("#pmreg59").removeAttr("disabled");
            						$("#t1fn59").removeAttr("disabled");
            						$("#t1reg59").removeAttr("disabled");
                                    $("#t2fn59").attr("disabled", "disabled");
                                    $("#t2reg59").attr("disabled", "disabled");
                                    $("#ext59").removeAttr("disabled");  
                
                  
                  break;
            					case "Other 3":
                

            						$("#pmfn59").removeAttr("disabled");
            						$("#pmreg59").removeAttr("disabled");
            						$("#t1fn59").removeAttr("disabled");
            						$("#t1reg59").removeAttr("disabled");
            						$("#t2fn59").removeAttr("disabled");
            						$("#t2reg59").removeAttr("disabled");
                                    $("#ext59").removeAttr("disabled");  
                
                  
                  break;
                 default:
                        $("#t1fn59").removeAttr("disabled");
                        $("#t2fn59").removeAttr("disabled");
                        $("#t1reg59").removeAttr("disabled");
                        $("#t2reg59").removeAttr("disabled");
                        $("#pmfn59").removeAttr("disabled");
                        $("#pmreg59").removeAttr("disabled");
                        $("#ext59").removeAttr("disabled");
                    break;
            } 
        	
            
            
            if(type == "Single Rigid"){
                $('#type59').html('<option value="">Type</option><option value="Box">Box</option><option value="Flat Top">Flat Top</option>');
                }
                if(type == "Bogie Rigid"){
                $('#type59').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Prime Mover"){
                $('#type59').html('<option value="">Type</option><option value="Day Cab">Day Cab</option><option value="Sleeper Cab">Sleeper Cab</option>');
                }
                if(type == "Single Combination"){
                $('#type59').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "B Double Combination"){
                $('#type59').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "Single Trailer"){
                $('#type59').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option>');
                }
                if(type == "B Double Trailer"){
                $('#type59').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "FORKLIFT"){
                $('#type59').html('<option value="">Type</option><option value="Small">Small</option><option value="Medium">Medium</option><option value="Large">Large</option>');
                }
                if(type == "VAN/UTE/CAR"){
                $('#type59').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Dolly Trailer"){
                $('#type59').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 1"){
                $('#type59').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 2"){
                $('#type59').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 3"){
                $('#type59').html('<option value="">Type</option><option value=" ">All</option>');
                }
            	}).trigger("change");
	      	   
   	   
   	   //--------------------------------------60     	
      	
   	   $('#sel60').on('change', function() {
                var type = document.getElementById("sel60").value;
            switch(type) {
                case "Single Rigid":
                      $("#pmfn60").removeAttr("disabled");
                      $("#pmreg60").removeAttr("disabled");
                      $("#ext60").removeAttr("disabled");
                      $("#t1fn60").attr("disabled", "disabled");
                      $("#t1reg60").attr("disabled", "disabled");
                      $("#t2fn60").attr("disabled", "disabled");
                      $("#t2reg60").attr("disabled", "disabled");
                        break;
                case "Bogie Rigid":
                   $("#pmfn60").removeAttr("disabled");
                   $("#pmreg60").removeAttr("disabled");
                   $("#ext60").removeAttr("disabled");
                   $("#t1fn60").attr("disabled", "disabled");
                   $("#t1reg60").attr("disabled", "disabled");
                   $("#t2fn60").attr("disabled", "disabled");
                   $("#t2reg60").attr("disabled", "disabled");
                     break;
                case "Prime Mover":
                  $("#pmfn60").removeAttr("disabled");
                    $("#pmreg60").removeAttr("disabled");
                    $("#ext60").removeAttr("disabled");
                    $("#t1fn60").attr("disabled", "disabled");
                    $("#t1reg60").attr("disabled", "disabled");
                    $("#t2fn60").attr("disabled", "disabled");
                    $("#t2reg60").attr("disabled", "disabled");
                break;
                
                case "Single Combination":
                    $("#t1fn60").removeAttr("disabled");
                    $("#t1reg60").removeAttr("disabled");
                    $("#ext60").removeAttr("disabled");    
                    $("#pmfn60").removeAttr("disabled");
                    $("#pmreg60").removeAttr("disabled");
                    $("#t2fn60").attr("disabled", "disabled");
                    $("#t2reg60").attr("disabled", "disabled");          
            break;
            
                case "B Double Combination":
                    

              	  $("#t1fn60").removeAttr("disabled");
                    $("#t2fn60").removeAttr("disabled");
                    $("#t1reg60").removeAttr("disabled");
                    $("#t2reg60").removeAttr("disabled");
                    $("#pmfn60").removeAttr("disabled");
                    $("#pmreg60").removeAttr("disabled");
                    $("#ext60").removeAttr("disabled");
                  
                    
                    break;
                    
                    
                case "Single Trailer":
                    $("#t1fn60").removeAttr("disabled");
                    $("#t1reg60").removeAttr("disabled");
                    $("#ext60").removeAttr("disabled");    
                    $("#pmfn60").attr("disabled", "disabled");
                    $("#pmreg60").attr("disabled", "disabled");
                    $("#t2fn60").attr("disabled", "disabled");
                    $("#t2reg60").attr("disabled", "disabled");
            break;
            
            
                case "B Double Trailer":
                    $("#t1fn60").removeAttr("disabled");
                    $("#t1reg60").removeAttr("disabled");
                    $("#ext60").removeAttr("disabled");    
                    $("#pmfn60").attr("disabled", "disabled");
                    $("#pmreg60").attr("disabled", "disabled");
                    $("#t2fn60").removeAttr("disabled");
                    $("#t2reg60").removeAttr("disabled");
            break;
            
                case "FORKLIFT":
                    $("#pmfn60").removeAttr("disabled");
                      $("#pmreg60").removeAttr("disabled");
                      $("#ext60").removeAttr("disabled");
                      $("#t1fn60").attr("disabled", "disabled");
                      $("#t1reg60").attr("disabled", "disabled");
                      $("#t2fn60").attr("disabled", "disabled");
                      $("#t2reg60").attr("disabled", "disabled");
                  break;
            
            
                
                case "VAN/UTE/CAR":
                      $("#pmfn60").removeAttr("disabled");
                      $("#pmreg60").removeAttr("disabled");
                      $("#ext60").removeAttr("disabled");
                        $("#t1fn60").attr("disabled", "disabled");
                        $("#t1reg60").attr("disabled", "disabled");
                        $("#t2fn60").attr("disabled", "disabled");
                        $("#t2reg60").attr("disabled", "disabled"); 
                break;
                
                case "Dolly Trailer":
                    $("#t1fn60").removeAttr("disabled");
                    $("#t1reg60").removeAttr("disabled");
                    $("#ext60").removeAttr("disabled");    
                    $("#pmfn60").attr("disabled", "disabled");
                    $("#pmreg60").attr("disabled", "disabled");
                    $("#t2fn60").attr("disabled", "disabled");
                    $("#t2reg60").attr("disabled", "disabled");
            break;
                case "Other 1":


            						$("#pmfn60").removeAttr("disabled");
            						$("#pmreg60").removeAttr("disabled");
            						$("#t1fn60").attr("disabled", "disabled");
                                    $("#t1reg60").attr("disabled", "disabled");
                                    $("#t2fn60").attr("disabled", "disabled");
                                    $("#t2reg60").attr("disabled", "disabled");
                                    $("#ext60").removeAttr("disabled");    
                                  
                                    
                                      
                                      break;
                                      
            					case "Other 2":
                

            						$("#pmfn60").removeAttr("disabled");
            						$("#pmreg60").removeAttr("disabled");
            						$("#t1fn60").removeAttr("disabled");
            						$("#t1reg60").removeAttr("disabled");
                                    $("#t2fn60").attr("disabled", "disabled");
                                    $("#t2reg60").attr("disabled", "disabled");
                                    $("#ext60").removeAttr("disabled");  
                
                  
                  break;
            					case "Other 3":
                

            						$("#pmfn60").removeAttr("disabled");
            						$("#pmreg60").removeAttr("disabled");
            						$("#t1fn60").removeAttr("disabled");
            						$("#t1reg60").removeAttr("disabled");
            						$("#t2fn60").removeAttr("disabled");
            						$("#t2reg60").removeAttr("disabled");
                                    $("#ext60").removeAttr("disabled");  
                
                  
                  break;
                 default:
                        $("#t1fn60").removeAttr("disabled");
                        $("#t2fn60").removeAttr("disabled");
                        $("#t1reg60").removeAttr("disabled");
                        $("#t2reg60").removeAttr("disabled");
                        $("#pmfn60").removeAttr("disabled");
                        $("#pmreg60").removeAttr("disabled");
                        $("#ext60").removeAttr("disabled");
                    break;
            } 
        	
            
            
            if(type == "Single Rigid"){
                $('#type60').html('<option value="">Type</option><option value="Box">Box</option><option value="Flat Top">Flat Top</option>');
                }
                if(type == "Bogie Rigid"){
                $('#type60').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Prime Mover"){
                $('#type60').html('<option value="">Type</option><option value="Day Cab">Day Cab</option><option value="Sleeper Cab">Sleeper Cab</option>');
                }
                if(type == "Single Combination"){
                $('#type60').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "B Double Combination"){
                $('#type60').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "Single Trailer"){
                $('#type60').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker 19m">Tanker 19m</option><option value="Tanker 25m">Tanker 25m</option>');
                }
                if(type == "B Double Trailer"){
                $('#type60').html('<option value="">Type</option><option value="Box">Box</option><option value="Skel">Skel</option><option value="Flat Top">Flat Top</option><option value="Tanker">Tanker</option><option value="Car Carrier">Car Carrier</option>');
                }
                if(type == "FORKLIFT"){
                $('#type60').html('<option value="">Type</option><option value="Small">Small</option><option value="Medium">Medium</option><option value="Large">Large</option>');
                }
                if(type == "VAN/UTE/CAR"){
                $('#type60').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Dolly Trailer"){
                $('#type60').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 1"){
                $('#type60').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 2"){
                $('#type60').html('<option value="">Type</option><option value=" ">All</option>');
                }
                if(type == "Other 3"){
                $('#type60').html('<option value="">Type</option><option value=" ">All</option>');
                }
            	}).trigger("change");
	      	   
   	   
   	   
   	   
   	   
   	   
  	  


         });