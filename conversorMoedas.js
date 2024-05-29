const convertButton = document.querySelector(".convert-button")
const currencySelectToConvert = document.querySelector(".currency-select-to-convert")
const currencySelect = document.querySelector(".currency-select")


function convertValues() {

    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")// Outras Moedas//


    const dolarToday = 5.06
    const euroToday =  5.45
    const libraesterlinaToday = 6.34
    const bitcoinToday = 320165.68 

    const dolarconverteuroToday = 0.93
    const dolarconvertlibraToday = 0.80
    const dolarconvertbitcoinToday = 0.008016
    


    



    





        



    if(currencySelectToConvert.value=="dolar" && currencySelect.value =="dolar" ){
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(inputCurrencyValue) 
}
    
    if(currencySelectToConvert.value=="dolar" && currencySelect.value =="real" ){
        currencyValueConverted.innerHTML= new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue*dolarToday)

    }

    if(currencySelectToConvert.value=="real" && currencySelect.value =="real" ){
        currencyValueConverted.innerHTML= new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue) 

    }

    if(currencySelectToConvert.value=="real" && currencySelect.value =="dolar" ){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue/dolarToday) 


    }

    if(currencySelectToConvert.value=="real" && currencySelect.value =="euro" ){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue/euroToday) 


    }

    if(currencySelectToConvert.value=="euro" && currencySelect.value =="real" ){
        currencyValueConverted.innerHTML= new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue*euroToday) 


    }

    if(currencySelectToConvert.value=="euro" && currencySelect.value =="euro" ){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue) 


    }

    if(currencySelectToConvert.value=="libra" && currencySelect.value =="real" ){
        currencyValueConverted.innerHTML= new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue*libraesterlinaToday) 


    }

    if(currencySelectToConvert.value=="real" && currencySelect.value =="libra" ){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue/libraesterlinaToday)     

    }

    if(currencySelectToConvert.value=="libra" && currencySelect.value =="libra" ){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)    

    }

    if(currencySelectToConvert.value=="real" && currencySelect.value =="bitcoin" ){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue/bitcoinToday) 

    }

    if(currencySelectToConvert.value=="bitcoin" && currencySelect.value =="real" ){
        currencyValueConverted.innerHTML= new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue*bitcoinToday) 


    }

    if(currencySelectToConvert.value=="bitcoin" && currencySelect.value =="bitcoin" ){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue) 

    }

    if(currencySelectToConvert.value=="dolar" && currencySelect.value =="euro" ){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue*dolarconverteuroToday)


    }


    if(currencySelectToConvert.value=="euro" && currencySelect.value =="dolar" ){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue/dolarconverteuroToday) 


    }

    if(currencySelectToConvert.value=="dolar" && currencySelect.value =="libra" ){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue*dolarconvertlibraToday)    

    }

    if(currencySelectToConvert.value=="libra" && currencySelect.value =="dolar" ){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue/dolarconvertlibraToday)
    }


   





























/*

    if(currencySelectToConvert.value=="dolar" && currencySelect.value =="euro" ){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue*dolarToday)


    }

    if(currencySelectToConvert.value=="dolar" && currencySelect.value =="libra" ){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue*dolarToday)    

    }
    if(currencySelectToConvert.value=="dolar" && currencySelect.value =="bitcoin" ){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue*dolarToday)

    }







  

   
 
   





    if(currencySelectToConvert.value=="euro" && currencySelect.value =="dolar" ){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }
        
      
    
       
    
        if(currencySelectToConvert.value=="euro" && currencySelect.value =="libra" ){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue*libraesterlinaToday)    
    
        }
        if(currencySelectToConvert.value=="euro" && currencySelect.value =="bitcoin" ){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "BTC"
            }).format(inputCurrencyValue*bitcoinToday)
    
        }









        if(currencySelectToConvert.value=="libra" && currencySelect.value =="dolar" ){
            currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue)
        }
            
          
        
            if(currencySelectToConvert.value=="libra" && currencySelect.value =="euro" ){
                currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                    style: "currency",
                    currency: "EUR"
                }).format(inputCurrencyValue)
        
        
            }
        
           
            if(currencySelectToConvert.value=="libra" && currencySelect.value =="bitcoin" ){
                currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                    style: "currency",
                    currency: "BTC"
                }).format(inputCurrencyValue*bitcoinToday)
        
            }










            if(currencySelectToConvert.value=="bitcoin" && currencySelect.value =="dolar" ){
                currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD"
                }).format(inputCurrencyValue)
            }
                
               
            
                if(currencySelectToConvert.value=="bitcoin" && currencySelect.value =="euro" ){
                    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                        style: "currency",
                        currency: "EUR"
                    }).format(inputCurrencyValue)
            
            
                }
            
                if(currencySelectToConvert.value=="bitcoin" && currencySelect.value =="libra" ){
                    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
                        style: "currency",
                        currency: "GBP"
                    }).format(inputCurrencyValue)    
            
                }
               


            


if(currencySelect.value=="dolar" && currencySelectToConvert.value =="dolar" ){
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(inputCurrencyValue)
}
    
    if(currencySelect.value=="dolar" && currencySelectToConvert.value =="real" ){
        currencyValueConverted.innerHTML= new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue/dolarToday)


    }

    if(currencySelect.value=="dolar" && currencySelectToConvert.value =="euro" ){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue/euroToday)


    }

    if(currencySelect.value=="dolar" && currencySelectToConvert.value =="libra" ){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue/libraesterlinaToday)    

    }
    if(currencySelect.value=="dolar" && currencySelectToConvert.value =="bitcoin" ){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue/bitcoinToday)

    }







  



    if(currencySelect.value=="real" && currencySelectToConvert.value =="dolar" ){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue/dolarToday)


    }

    if(currencySelect.value=="real" && currencySelectToConvert.value =="euro" ){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue/euroToday)


    }

    if(currencySelect.value=="real" && currencySelectToConvert.value =="libra" ){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue/libraesterlinaToday)    

    }
    if(currencySelect.value=="real" && currencySelectToConvert.value =="bitcoin" ){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue/bitcoinToday)

    }





    if(currencySelect.value=="euro" && currencySelectToConvert.value =="dolar" ){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue/dolarToday)
    }
        
        if(currencySelect.value=="euro" && currencySelectToConvert.value =="real" ){
            currencyValueConverted.innerHTML= new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue*rToday)
    
    
        }
    
        if(currencySelect.value=="euro" && currencySelectToConvert.value =="euro" ){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue)
    
    
        }
    
        if(currencySelect.value=="euro" && currencySelectToConvert.value =="libra" ){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue*libraesterlinaToday)    
    
        }
        if(currencySelect.value=="euro" && currencySelectToConvert.value =="bitcoin" ){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "BTC"
            }).format(inputCurrencyValue*bitcoinToday)
    
        }









        if(currencySelect.value=="libra" && currencySelectToConvert.value =="dolar" ){
            currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue)
        }
            
            if(currencySelect.value=="libra" && currencySelectToConvert.value =="real" ){
                currencyValueConverted.innerHTML= new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL"
                }).format(inputCurrencyValue*dolarToday)
        
        
            }
        
            if(currencySelect.value=="libra" && currencySelectToConvert.value =="euro" ){
                currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                    style: "currency",
                    currency: "EUR"
                }).format(inputCurrencyValue)
        
        
            }
        
            if(currencySelect.value=="libra" && currencySelectToConvert.value =="libra" ){
                currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
                    style: "currency",
                    currency: "GBP"
                }).format(inputCurrencyValue)    
        
            }
            if(currencySelect.value=="libra" && currencySelectToConvert.value =="bitcoin" ){
                currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                    style: "currency",
                    currency: "BTC"
                }).format(inputCurrencyValue*bitcoinToday)
        
            }










            if(currencySelect.value=="bitcoin" && currencySelectToConvert.value =="dolar" ){
                currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD"
                }).format(inputCurrencyValue)
            }
                
                if(currencySelect.value=="bitcoin" && currencySelectToConvert.value =="real" ){
                    currencyValueConverted.innerHTML= new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL"
                    }).format(inputCurrencyValue*dolarToday)
            
            
                }
            
                if(currencySelect.value=="bitcoin" && currencySelectToConvert.value =="euro" ){
                    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                        style: "currency",
                        currency: "EUR"
                    }).format(inputCurrencyValue)
            
            
                }
            
                if(currencySelect.value=="bitcoin" && currencySelectToConvert.value =="libra" ){
                    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
                        style: "currency",
                        currency: "GBP"
                    }).format(inputCurrencyValue)    
            
                }
                if(currencySelect.value=="bitcoin" && currencySelectToConvert.value =="bitcoin" ){
                    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                        style: "currency",
                        currency: "BTC"
                    }).format(inputCurrencyValue)
            
                }

                


    










   

    if (currencySelect.value == "dolar") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(inputCurrencyValue/dolarToday)
}
*/
}

  
function changeCurrencyConvert(){

    
    const currencyNameToConvert = document.getElementById("currency-name-to-convert")
    const currencyImageToConvert = document.querySelector(".currency-image-to-convert")
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const inputCurrencyValue = document.querySelector(".input-currency").value
   
    

    if (currencySelectToConvert.value == "dolar") {
        currencyNameToConvert.innerHTML = "Dolar"
        currencyImageToConvert.src = "./assetsConversorDeMoedas/dolar.png"
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
       

    }
       
    

    if (currencySelectToConvert.value == "euro") {
        currencyNameToConvert.innerHTML = "Euro"
        currencyImageToConvert.src = "./assetsConversorDeMoedas/euro.png"
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
       
        
    }

    
    

    if (currencySelectToConvert.value == "libra") {
        currencyNameToConvert.innerHTML = "Libra"
        currencyImageToConvert.src = "./assetsConversorDeMoedas/libra 1.png"
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
       
       
    }

    if (currencySelectToConvert.value == "bitcoin") {
        currencyNameToConvert.innerHTML = "Bitcoin"
        currencyImageToConvert.src = "./assetsConversorDeMoedas/bitcoin 1.png"
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)
       
       
    }

    if (currencySelectToConvert.value == "real") {
        currencyNameToConvert.innerHTML = "Real"
        currencyImageToConvert.src = "./assetsConversorDeMoedas/real.png"
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
       

}    


}



convertValues()


    
function changeCurrencyConverted() {

    const currencyName = document.getElementById("currency-name")
    const imageToConvertedCurrency = document.querySelector(".image-to-converted-currency")
    const currencyValueConverted = document.querySelector(".currency-value")// Outras Moedas//
    const inputCurrencyValue = document.querySelector(".input-currency").value

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dolar"
        imageToConvertedCurrency.src = "./assetsConversorDeMoedas/dolar.png"
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
       

    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        imageToConvertedCurrency.src = "./assetsConversorDeMoedas/euro.png"
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
       
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        imageToConvertedCurrency.src = "./assetsConversorDeMoedas/libra 1.png"
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
        
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        imageToConvertedCurrency.src = "./assetsConversorDeMoedas/bitcoin 1.png"
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        })
    }

    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real"
        imageToConvertedCurrency.src = "./assetsConversorDeMoedas/real.png"
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        })
    }


    


}




convertButton.addEventListener("click", convertValues)

currencySelect.addEventListener("change", changeCurrencyConverted)

currencySelectToConvert.addEventListener("change", changeCurrencyConvert)
