   $(document).ready(function(){


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
            
                case "Forklift":
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
            if(type == "Forklift"){
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
       
           case "Forklift":
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
           if(type == "Forklift"){
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
      
          case "Forklift":
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
          if(type == "Forklift"){
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
           
               case "Forklift":
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
               if(type == "Forklift"){
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
            
                case "Forklift":
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
                if(type == "Forklift"){
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
            
                case "Forklift":
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
                if(type == "Forklift"){
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
            
                case "Forklift":
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
                if(type == "Forklift"){
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
            
                case "Forklift":
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
                if(type == "Forklift"){
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
            
                case "Forklift":
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
                if(type == "Forklift"){
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
            
                case "Forklift":
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
            $('#type10').html('<option value="">Type</option><option value=" ">All</option>');
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
            if(type == "Forklift")
            {
            $('#type10').html('<option value="">Type</option><option value="Small">Small</option><option value="Medium">Medium</option><option value="Large">Large</option>');
            }
            if(type == "VAN/UTE/CAR")
            {
            $('#type10').html('<option value="">Type</option><option value=" ">All</option>');
            }
            if(type == "Dolly Trailer"){
            $('#type10').html('<option value="">Type</option><option value=" ">All</option>');
            }
            if(type == "Other 1"){
            $('#type10').html('<option value="">Type</option><option value=" ">All</option>');
            }
            if(type == "Other 2"){
            $('#type10').html('<option value="">Type</option><option value=" ">All</option>');
            }
            if(type == "Other 3"){
            $('#type10').html('<option value="">Type</option><option value=" ">All</option>');
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
            
                case "Forklift":
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
                if(type == "Forklift"){
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
            
                case "Forklift":
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
                if(type == "Forklift"){
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
            
                case "Forklift":
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
                if(type == "Forklift"){
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
            
                case "Forklift":
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
                if(type == "Forklift"){
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
            
                case "Forklift":
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
                if(type == "Forklift"){
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
            
                case "Forklift":
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
                if(type == "Forklift"){
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
            
                case "Forklift":
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
                if(type == "Forklift"){
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
            
                case "Forklift":
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
                if(type == "Forklift"){
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
            
                case "Forklift":
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
                if(type == "Forklift"){
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
            
                case "Forklift":
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
                if(type == "Forklift"){
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
	   
   	   
  
	   

         });