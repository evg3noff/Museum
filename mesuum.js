"use string";
let WeekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let allMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


// яндекс карты api

initMap();

async function initMap() {
    await ymaps3.ready;

    const {YMap, YMapDefaultSchemeLayer, YMapMarker, YMapControls, YMapDefaultFeaturesLayer} = ymaps3;

    const {YMapZoomControl} = await ymaps3.import('@yandex/ymaps3-controls@0.0.1');
    const {YMapDefaultMarker} = await ymaps3.import('@yandex/ymaps3-markers@0.0.1');
    

    const map = new YMap(
        document.getElementById('map'),
        {
            location: {
                center: [48.86099177538215,2.335883719752006],
                zoom: 11
            }
        }
    );
    map.setLocation({
        center: [2.335883719752006, 48.86099177538215],
        zoom: 17
      });
      const content = document.createElement('div');

    
    map.addChild(new YMapDefaultSchemeLayer());
    map.addChild(new YMapControls({position: 'right'}).addChild(new YMapZoomControl({})));
    map.addChild(new YMapDefaultFeaturesLayer({id: 'features'}));
    


      const marker = new YMapDefaultMarker(INC_POINT);
        map.addChild(marker);

        
        marker.update({
            title: 'Palais Royal Musee du Louvre'
          });
        

        
}

const INC_POINT = {coordinates: [2.335883719752006, 48.86099177538215], title: 'Palais Royal Musee du Louvre'};
// конец с картами


let minus = document.getElementById('minus');
let plus = document.getElementById('plus1');
let count = document.getElementById('count');
let minusOkno = document.getElementById('countTicketsMinusBasic');
let plusOkno = document.getElementById('countTicketsPlusBasic');
let countOkno = document.getElementById('countTickets');
let IconCountTicket1 = document.querySelector('.forIconTypeTicket1');
let price1 = document.getElementById('price1');

countOkno.textContent = count.textContent;
IconCountTicket1.textContent = count.textContent;

let minus2 = document.getElementById('minus22');
let plus2 = document.getElementById('plus22');
let count2 = document.getElementById('count2');
let minusOkno2 = document.getElementById('countTicketsMinusSenior');
let plusOkno2 = document.getElementById('countTicketsPlusSenior');
let countOkno2 = document.getElementById('countTickets2');
let IconCountTicket2 = document.querySelector('.forIconTypeTicket2');
let price2 = document.getElementById('price2');

countOkno2.textContent = count.textContent;
IconCountTicket2.textContent = count.textContent;

let Total = document.getElementById('total');
let TotalPrice1Cache = 0;
let TotalPrice2Cache = 0;
let TotalPrice = document.getElementById('totalPrice')
let TotalPriceCache = 0;
let Amount = 1;
let Amount2 = 1;

plus.addEventListener('click', function plusC(){
    Amount += 1;
    count.textContent = Amount;
    countOkno.textContent = Amount;
    IconCountTicket1.textContent = Amount;
    TotalPriceCache = ((Amount * 20) + (Amount2 * 10));
    TotalPrice1Cache = Amount * 20;
    TotalPrice.textContent = 'Total € ' + TotalPriceCache;
    Total.textContent = TotalPriceCache + ' €';
    price1.textContent = TotalPrice1Cache + ' €';
});

minus.addEventListener('click', function minusC(){
    if (Amount < 1){
        count.textContent = 0;
        countOkno.textContent = 0;
        IconCountTicket1.textContent = 0;
    } else{
        Amount = Amount -  1;
    count.textContent = Amount;
    countOkno.textContent = Amount;
    IconCountTicket1.textContent = Amount;
    }
    TotalPriceCache = ((Amount * 20) + (Amount2 * 10));
    TotalPrice1Cache = Amount * 20;
    TotalPrice.textContent = 'Total € ' + TotalPriceCache;
    Total.textContent = TotalPriceCache + ' €';
    price1.textContent = TotalPrice1Cache + ' €';
});

plusOkno.addEventListener('click', function plusC(){
    Amount += 1;
    count.textContent = Amount;
    countOkno.textContent = Amount;
    IconCountTicket1.textContent = Amount;
    TotalPriceCache = ((Amount * 20) + (Amount2 * 10));
    TotalPrice1Cache = Amount * 20;
    TotalPrice.textContent = 'Total € ' + TotalPriceCache;
    Total.textContent = TotalPriceCache + ' €';
    price1.textContent = TotalPrice1Cache + ' €';
});

minusOkno.addEventListener('click', function minusC(){
    if (Amount < 1){
        count.textContent = 0;
        countOkno.textContent = 0;
        IconCountTicket1.textContent = 0;
    } else{
        Amount = Amount -  1;
    count.textContent = Amount;
    countOkno.textContent = Amount;
    IconCountTicket1.textContent = Amount;
    }
    TotalPriceCache = ((Amount * 20) + (Amount2 * 10));
    TotalPrice1Cache = Amount * 20;
    TotalPrice.textContent = 'Total € ' + TotalPriceCache;
    Total.textContent = TotalPriceCache + ' €';
    price1.textContent = TotalPrice1Cache + ' €';
});

plus2.addEventListener('click', function plus2c(){
    Amount2 += 1;
    count2.textContent = Amount2;
    countOkno2.textContent = Amount2;
    IconCountTicket2.textContent = Amount2;
    TotalPriceCache = ((Amount * 20) + (Amount2 * 10));
    TotalPrice2Cache = Amount2 * 10;
    TotalPrice.textContent = 'Total € ' + TotalPriceCache;
    Total.textContent = TotalPriceCache + ' €';
    price2.textContent = TotalPrice2Cache + ' €';
})
minus2.addEventListener('click', function minus2c(){
    if (Amount2 < 1){
        count2.textContent = 0;
        countOkno2.textContent = 0;
        IconCountTicket2.textContent = 0;
    } else{
        Amount2 -= 1;
        count2.textContent = Amount2;
        countOkno2.textContent = Amount2;
        IconCountTicket2.textContent = Amount2;
    }
    TotalPriceCache = ((Amount * 20) + (Amount2 * 10));
    TotalPrice.textContent = 'Total € ' + TotalPriceCache;
    Total.textContent = TotalPriceCache + ' €';
})

plusOkno2.addEventListener('click', function plus2c(){
    Amount2 += 1;
    count2.textContent = Amount2;
    countOkno2.textContent = Amount2;
    IconCountTicket2.textContent = Amount2;
    TotalPriceCache = ((Amount * 20) + (Amount2 * 10));
    TotalPrice2Cache = Amount2 * 10;
    TotalPrice.textContent = 'Total € ' + TotalPriceCache;
    Total.textContent = TotalPriceCache + ' €';
    price2.textContent = TotalPrice2Cache + ' €';
});

minusOkno2.addEventListener('click', function minus2c(){
    if (Amount2 < 1){
        count2.textContent = 0;
        countOkno2.textContent = 0;
        IconCountTicket2.textContent = 0;
    } else{
        Amount2 -= 1;
        count2.textContent = Amount2;
        countOkno2.textContent = Amount2;
        IconCountTicket2.textContent = Amount2;
    }
    TotalPriceCache = ((Amount * 20) + (Amount2 * 10));
    TotalPrice.textContent = 'Total € ' + TotalPriceCache;
    Total.textContent = TotalPriceCache + ' €';
    TotalPrice2Cache = Amount2 * 10;
    price2.textContent = TotalPrice2Cache + ' €';
})

// радио кнопки и их синхронизация с контентом в окне билетов
let TicketTypes = document.querySelectorAll('span#ratioTxt > input');
let ContTicketType = document.getElementById('TicketType');
let TypeMem;

for (let TicketType of TicketTypes){
    TicketType.addEventListener('click', function(){
        if (TicketType.checked){
            TypeMem = TicketType.value;
            ContTicketType.textContent = TypeMem;
            Placeholder.textContent = TypeMem;
        }
    })
}

// ниже идет код мини менюшки
let Menu = document.getElementById('menuSmallScreen');
let closeMenu = document.getElementById('menuSmallScreenClose');
console.log(window.innerWidth);
let OpnSmallMenu = false;
let Banner = document.querySelector('.BannerAnim');
let WelcomePaginationCont = document.querySelector('.welcome-pagination-container');


Menu.addEventListener('click', function opnNvg(){
    document.getElementById('menuSmallScreenActive').style.width = 'auto';
    document.getElementById('menuSmallScreenActive').style.display = 'block';
    document.getElementById('menuSmallScreenDeactive').style.display = 'none';
    document.getElementById('imgMona').style.marginTop = '0px';
    closeMenu.style.display = 'flex';
    Menu.style.display = 'none';
    OpnSmallMenu = true;
    // что-то подобие медиа запроса
    if(window.innerWidth < 768 || window.innerWidth == 768 && OpnSmallMenu == true){
        document.getElementById('imgMona').style.display = 'none';
        WelcomePaginationCont.style.display = 'none';
        Banner.style.height = '861px'
    }
    if(window.innerWidth < 420 || window.innerWidth == 420 && OpnSmallMenu == true){
        document.getElementById('imgMona').style.display = 'none';
        WelcomePaginationCont.style.display = 'none';
        Banner.style.height = '544px'
    }
});

closeMenu.addEventListener('click', function closeNvg(){
    document.getElementById('menuSmallScreenActive').style.width = '0';
    document.getElementById('menuSmallScreenActive').style.display = 'none';
    document.getElementById('menuSmallScreenDeactive').style.display = 'block';
    document.getElementById('imgMona').style.marginTop = '-403px';
    closeMenu.style.display = 'none';
    Menu.style.display = 'flex';
    OpnSmallMenu = false;
    if(window.innerWidth < 768 || window.innerWidth == 768 && OpnSmallMenu == false){
        document.getElementById('imgMona').style.display = 'flex';
        document.getElementById('imgMona').style.marginTop = '50px';
        WelcomePaginationCont.style.display = 'flex';
        Banner.style.height = 'auto'
    }
})

let expTool = document.querySelector('.exploreTool input');
let img = document.querySelector('.images .exploreImg2');
img.style.width = expTool.value + '%';
expTool.oninput = () =>{

    let sliderVal = expTool.value;
    expTool.style.left = sliderVal + '%';
    img.style.width = sliderVal + '%';
}

// всплывающее окно билетов

let TicketOkno = document.getElementById('zatemnenie');
let buyBtn = document.getElementById('BuyButton');
let closeBtn = document.querySelector('.closeOkno');
let TicketOknoCont = document.getElementById('okno');
TicketOknoCont.style.opacity = '0.5';
let scale = function scaleOkno(){
    TicketOknoCont.style.transform = 'scale(1.0)';
    TicketOknoCont.style.opacity = '1';
}

buyBtn.addEventListener('click', function OpnBuyTickets(){
    TicketOkno.style.display = 'flex';
    setTimeout(scale, 80);
});

closeBtn.addEventListener('click', function(){
    TicketOkno.style.display = 'none';
    TicketOknoCont.style.transform = 'scale(0.9)';
    TicketOknoCont.style.opacity = '0';  
})


//кастом селекс

let OptionMenu = document.querySelector('.forSelect');
let SelectCustoms = document.querySelectorAll('.select2');
let PlaceholderSVG = document.querySelector('.placeholderSVG');
let Options = document.querySelectorAll('#option');
let Placeholder = document.querySelector('.placeholder');
let SelectTxtOptions = document.querySelectorAll('.selectTxtOpt');
for (let SelectTxtOption of SelectTxtOptions){
    SelectTxtOption.style.opacity = '0';
    SelectTxtOption.style.display = 'none';
    
}

for (let Option of Options){
    Option.style.height = '0';
}
OptionMenu.style.border = '0px';
OptionMenu.style.height = '0';
//OptionMenu.style.display = 'none';
let activeOption = false;

for (let SelectCustom of SelectCustoms){
    let CloseCount = 0;
    SelectCustom.addEventListener('click', function OpnSlc(){
        PlaceholderSVG.style.backgroundImage = "url('image/arrow2.svg')";
        CloseCount += 1;
        activeOption = true;
        OptionMenu.style.height = 'auto';
        OptionMenu.style.border = '1px solid black';
        OptionMenu.style.borderTop = 'none';
        OptionMenu.style.borderBottom = '1px solid black';
        for (let Option of Options){
            Option.style.height = '45px';
            
        }
        for (let SelectTxtOption of SelectTxtOptions){
            
            //SelectTxtOption.style.opacity = '1';
            SelectTxtOption.style.display = 'block';
            let OpacityForSelectTxt = function(){
                SelectTxtOption.style.opacity = '1';
            }
        setTimeout(OpacityForSelectTxt, 500);
        
        }
        
       
        
        //OptionMenu.style.display = 'flex';

        // option - checked
        for (let Option of Options){
            Option.addEventListener('click', function OpnCheck(){
            TypeMem = Option.textContent;
            Placeholder.textContent = TypeMem;
            ContTicketType.textContent = TypeMem;
            
            });
        }
        SelectCustom.removeEventListener('click', OpnSlc); // прерываем событие и запускаем новое на закрытие меню

        SelectCustom.addEventListener('click', function CloseSlc(){
            OptionMenu.style.borderTop = 'none';
            let offBorderOpt = function offBorder(){
                OptionMenu.style.borderBottom = 'none';
            }
            setTimeout(offBorderOpt, 500);
            OptionMenu.style.height = 'auto';
            PlaceholderSVG.style.backgroundImage = "url('image/arrow.svg')";
            for (let Option of Options){
                Option.style.height = '0';
            }
            for (let SelectTxtOption of SelectTxtOptions){
                SelectTxtOption.style.opacity = '0';
                console.log(SelectTxtOption.style.opacity);
 
                SelectTxtOption.style.display = 'none';
                
            }
            SelectCustom.removeEventListener('click', CloseSlc);
            SelectCustom.addEventListener('click', OpnSlc);
        });
        
    });
}

// кастом селекс для даты в билетах

let SelectCustomsMini = document.querySelectorAll('.select1');
let DateOptionMenu = document.querySelector('#optionDate');
let PlaceholderSVGDate = document.querySelector('.placeholderSVGDate');
let PlaceholderDate = document.querySelector('.placeholderDate');
let InputDate1 = document.querySelector('input.InpDate');
DateOptionMenu.style.display = 'none';
inputActive = false;
let arrDate = [];
let DateRes = new Date();
let DateOkno = document.querySelector('#Date');


// читаем инфу с инпутов
InputDate1.addEventListener('change', function(){
    arrDate = InputDate1.value.split('-');
    for (let i = 0; i < arrDate.length; i++){
        console.log(arrDate[i]);
        DateRes = new Date(arrDate[0], arrDate[1] - 1, arrDate[2]);
    }
})

for (let SelectCustomMini of SelectCustomsMini){
    let CloseCount = 0;
    if (SelectCustomMini.dataset.date == 'true'){

    SelectCustomMini.addEventListener('click', function OpnSlc2(){
        PlaceholderSVGDate.style.backgroundImage = "url('image/arrow2.svg')";
        CloseCount += 1;
        DateOptionMenu.style.display = 'block';
        PlaceholderDate.textContent = '';
        InputDate1.addEventListener('focus', function(){
            inputActive = true;
        })
        InputDate1.addEventListener('blur', function(){
            inputActive = false;
        })

        if (CloseCount % 2 == 0 && inputActive == false){
            DateOptionMenu.style.display = 'none';
            PlaceholderSVGDate.style.backgroundImage = "url('image/arrow.svg')";
            PlaceholderDate.textContent = WeekDays[DateRes.getDay()] + ',' + DateRes.getMonth() + '.' + DateRes.getDate();
            DateOkno.textContent = WeekDays[DateRes.getDay()] + ', ' + allMonth[DateRes.getMonth()] + ' ' + DateRes.getDate();
        }
    })
}
}
// кастом набор времени посещения
let PlaceholderSVGTime = document.querySelector('.placeholderSVGTime');
let TimeOptionMenu = document.querySelector('#optionTime');
TimeOptionMenu.style.display = 'none';
let PlaceholderTime = document.querySelector('.placeholderTime');
let InpsTime = document.querySelectorAll('.InpTime');
let TimeOkno = document.querySelector('#Time');

for (let SelectCustomMini of SelectCustomsMini){
    let CloseCount = 0;
    if(SelectCustomMini.dataset.time == 'true'){
        SelectCustomMini.addEventListener('click', function OpnSlc3(){
            PlaceholderSVGTime.style.backgroundImage = "url('image/arrow2.svg')";
            CloseCount += 1;
            TimeOptionMenu.style.display = 'block';
            PlaceholderTime.textContent = '';
            for (let InpTime = 0; InpTime < InpsTime.length; InpTime++){
                InpsTime[0].addEventListener('focus', function(){
                    inputActive = true;
                })
                InpsTime[0].addEventListener('blur', function(){
                    inputActive = false;
                })
                InpsTime[1].addEventListener('focus', function(){
                    inputActive = true;
                })
                InpsTime[1].addEventListener('blur', function(){
                    inputActive = false;
                })
                if (InpsTime[0].value == 0){
                    InpsTime[0].value = 8;
                }
                if (InpsTime[1].value == 0){
                    InpsTime[1].value = 0;
                }
            }

            if (CloseCount % 2 == 0 && inputActive == false){
                TimeOptionMenu.style.display = 'none';
                PlaceholderSVGTime.style.backgroundImage = "url('image/arrow.svg')";
                if (InpsTime[0].value < 10 && InpsTime[1].value < 10){
                    PlaceholderTime.textContent = '0' + InpsTime[0].value + ':' + '0' + InpsTime[1].value;
                    TimeOkno.textContent = '0' + InpsTime[0].value + ' : ' + '0' + InpsTime[1].value;
                } else if (InpsTime[0].value < 10 ){
                    PlaceholderTime.textContent = '0' + InpsTime[0].value + ':' + InpsTime[1].value;
                    TimeOkno.textContent = '0' + InpsTime[0].value + ' : ' + InpsTime[1].value;
                } else if (InpsTime[1].value < 10){
                    PlaceholderTime.textContent = InpsTime[0].value + ':' + '0' + InpsTime[1].value;
                    TimeOkno.textContent = InpsTime[0].value + ' : ' + '0' + InpsTime[1].value;
                }
                else {
                    PlaceholderTime.textContent = InpsTime[0].value + ':' + InpsTime[1].value;
                    TimeOkno.textContent = InpsTime[0].value + ' : ' + InpsTime[1].value;
                } 
            }
            
        })
    }
}


// карусель

let countTurnAboutNow = document.getElementById('countBanner2');
let countTurnAboutTotal = document.getElementById('countBanner3');

let countBannerBlocks = document.querySelectorAll('#countBannerBlockActive');
let arrowLeft = document.querySelector('.arrowLeft');
let arrowRight = document.querySelector('.arrowRight');
let countTurnAbout = 1;
countTurnAboutNow.textContent = '0' + countTurnAbout;
let ImgMona = document.getElementById('imgMona');
console.log(ImgMona);
let arrImgMona768 = ['url(image/monalizawithout.png)', 'url(image/monalizawithout2.png)', 'url(image/monalizawithout3.png)', 'url(image/monalizawithout4.png)', 'url(image/monalizawithout5.png)']
let arrImgMona = ['url(image/monaliza.png)', 'url(image/monaliza2.png)', 'url(image/monaliza3.png)', 'url(image/monaliza4.png)', 'url(image/monaliza5.png)'];
for (let i = 0; i < countBannerBlocks.length;i++){
    countBannerBlocks[0].style.backgroundColor = '#D2B183';
}
ImgMona.style.opacity = 1;

let start = setInterval(function countTurnPlusSIt(){
    ImgMona.style.opacity = 0.5;
    countTurnAbout +=1;
    countTurnAboutNow.textContent = '0' + countTurnAbout;
    for (let i = 0; i < arrImgMona.length; i++){
        ImgMona.style.backgroundImage = arrImgMona[countTurnAbout -1];
        ImgMona.style.backgroundSize = 'contain';
        ImgMona.style.opacity = 1;
    }
    if (window.innerWidth <= 768){
        for (let i = 0; i < arrImgMona.length; i++){
            ImgMona.style.backgroundImage = arrImgMona768[countTurnAbout - 1];
            ImgMona.style.backgroundSize = 'contain';
            ImgMona.style.opacity = 1;
        }
    }

    if (countTurnAbout > 5){
        countTurnAbout = 1;
        countTurnAboutNow.textContent = '0' + countTurnAbout;
        for (let i = 0; i < arrImgMona.length; i++){
            ImgMona.style.backgroundImage = arrImgMona[countTurnAbout - 1];
            ImgMona.style.backgroundSize = 'contain';
            ImgMona.style.opacity = 1;
        }
        if (window.innerWidth <= 768){
            for (let i = 0; i < arrImgMona.length; i++){
                ImgMona.style.backgroundImage = arrImgMona768[countTurnAbout - 1];
                ImgMona.style.backgroundSize = 'contain';
                ImgMona.style.opacity = 1;
            }
        }
    } 
    if (countTurnAbout == 5){
        countTurnAbout = 5;
        countTurnAboutNow.textContent = '0' + countTurnAbout;
    }
    for (let i = 0; i < countBannerBlocks.length;i++){
        if (countTurnAbout == 1){
            countBannerBlocks[0].style.backgroundColor ='#D2B183';
            countBannerBlocks[1].style.backgroundColor = '#FFF';
            countBannerBlocks[2].style.backgroundColor = '#FFF';
            countBannerBlocks[3].style.backgroundColor = '#FFF';
            countBannerBlocks[4].style.backgroundColor = '#FFF';
        } else if (countTurnAbout == 2){
            countBannerBlocks[1].style.backgroundColor = '#D2B183';
            countBannerBlocks[0].style.backgroundColor = '#FFF';
            countBannerBlocks[2].style.backgroundColor = '#FFF';
            countBannerBlocks[3].style.backgroundColor = '#FFF';
            countBannerBlocks[4].style.backgroundColor = '#FFF';
        } else if (countTurnAbout == 3){
            countBannerBlocks[2].style.backgroundColor = '#D2B183';
            countBannerBlocks[1].style.backgroundColor = '#FFF';
            countBannerBlocks[0].style.backgroundColor = '#FFF';
            countBannerBlocks[3].style.backgroundColor = '#FFF';
            countBannerBlocks[4].style.backgroundColor = '#FFF';
        } else if (countTurnAbout == 4){
            countBannerBlocks[3].style.backgroundColor = '#D2B183';
            countBannerBlocks[1].style.backgroundColor = '#FFF';
            countBannerBlocks[2].style.backgroundColor = '#FFF';
            countBannerBlocks[0].style.backgroundColor = '#FFF';
            countBannerBlocks[4].style.backgroundColor = '#FFF';
        } else if (countTurnAbout == 5){
            countBannerBlocks[4].style.backgroundColor = '#D2B183';
            countBannerBlocks[1].style.backgroundColor = '#FFF';
            countBannerBlocks[2].style.backgroundColor = '#FFF';
            countBannerBlocks[3].style.backgroundColor = '#FFF';
            countBannerBlocks[0].style.backgroundColor = '#FFF';
        }

    }
   console.log(countTurnAbout);
}, 4000);

for (let countBannerBlock of countBannerBlocks){
    countBannerBlock.addEventListener('click', function(){
        if (this.dataset.count == '1'){
            countBannerBlocks[0].style.backgroundColor ='#D2B183';
            countBannerBlocks[1].style.backgroundColor = '#FFF';
            countBannerBlocks[2].style.backgroundColor = '#FFF';
            countBannerBlocks[3].style.backgroundColor = '#FFF';
            countBannerBlocks[4].style.backgroundColor = '#FFF';
            countTurnAbout = 1;
            countTurnAboutNow.textContent = '0' + countTurnAbout;
            ImgMona.style.opacity = 0.5;
            ImgMona.style.backgroundImage = arrImgMona[countTurnAbout -1];
            ImgMona.style.backgroundSize = 'contain';
            ImgMona.style.opacity = 1;

        }
        if (this.dataset.count == '2'){
            countBannerBlocks[1].style.backgroundColor = '#D2B183';
            countBannerBlocks[0].style.backgroundColor = '#FFF';
            countBannerBlocks[2].style.backgroundColor = '#FFF';
            countBannerBlocks[3].style.backgroundColor = '#FFF';
            countBannerBlocks[4].style.backgroundColor = '#FFF';
            countTurnAbout = 2;
            countTurnAboutNow.textContent = '0' + countTurnAbout;
            ImgMona.style.opacity = 0.5;
            ImgMona.style.backgroundImage = arrImgMona[countTurnAbout -1];
            ImgMona.style.backgroundSize = 'contain';
            ImgMona.style.opacity = 1;
        }
        if (this.dataset.count == '3'){
            countBannerBlocks[2].style.backgroundColor = '#D2B183';
            countBannerBlocks[1].style.backgroundColor = '#FFF';
            countBannerBlocks[0].style.backgroundColor = '#FFF';
            countBannerBlocks[3].style.backgroundColor = '#FFF';
            countBannerBlocks[4].style.backgroundColor = '#FFF';
            countTurnAbout = 3;
            countTurnAboutNow.textContent = '0' + countTurnAbout;
            ImgMona.style.opacity = 0.5;
            ImgMona.style.backgroundImage = arrImgMona[countTurnAbout -1];
            ImgMona.style.backgroundSize = 'contain';
            ImgMona.style.opacity = 1;
        }
        if (this.dataset.count == '4'){
            countBannerBlocks[3].style.backgroundColor = '#D2B183';
            countBannerBlocks[1].style.backgroundColor = '#FFF';
            countBannerBlocks[2].style.backgroundColor = '#FFF';
            countBannerBlocks[0].style.backgroundColor = '#FFF';
            countBannerBlocks[4].style.backgroundColor = '#FFF';
            countTurnAbout = 4;
            countTurnAboutNow.textContent = '0' + countTurnAbout;
            ImgMona.style.opacity = 0.5;
            ImgMona.style.backgroundImage = arrImgMona[countTurnAbout -1];
            ImgMona.style.backgroundSize = 'contain';
            ImgMona.style.opacity = 1;
        }
        if (this.dataset.count == '5'){
            countBannerBlocks[4].style.backgroundColor = '#D2B183';
            countBannerBlocks[1].style.backgroundColor = '#FFF';
            countBannerBlocks[2].style.backgroundColor = '#FFF';
            countBannerBlocks[3].style.backgroundColor = '#FFF';
            countBannerBlocks[0].style.backgroundColor = '#FFF';
            countTurnAbout = 5;
            countTurnAboutNow.textContent = '0' + countTurnAbout;
            ImgMona.style.opacity = 0.5;
            ImgMona.style.backgroundImage = arrImgMona[countTurnAbout -1];
            ImgMona.style.backgroundSize = 'contain';
            ImgMona.style.opacity = 1;
        }
        clearInterval(start);
    })
}

        arrowRight.addEventListener('click', function countTurnPlus(){
            clearInterval(start);
            ImgMona.style.opacity = 0.5;
            countTurnAbout +=1;
            countTurnAboutNow.textContent = '0' + countTurnAbout;
            for (let i = 0; i < arrImgMona.length; i++){
                ImgMona.style.opacity = 0.5;
                ImgMona.style.backgroundImage = arrImgMona[countTurnAbout -1];
                ImgMona.style.backgroundSize = 'contain';
                ImgMona.style.opacity = 1;
            }
            if (window.innerWidth <= 768){
                for (let i = 0; i < arrImgMona.length; i++){
                    ImgMona.style.opacity = 0.5;
                    ImgMona.style.backgroundImage = arrImgMona768[countTurnAbout - 1];
                    ImgMona.style.backgroundSize = 'contain';
                    ImgMona.style.opacity = 1;
                }
            }

            if (countTurnAbout > 5){
                countTurnAbout = 1;
                countTurnAboutNow.textContent = '0' + countTurnAbout;
                for (let i = 0; i < arrImgMona.length; i++){
                    ImgMona.style.opacity = 0.5;
                    ImgMona.style.backgroundImage = arrImgMona[countTurnAbout - 1];
                    ImgMona.style.backgroundSize = 'contain';
                    ImgMona.style.opacity = 1;
                }
                if (window.innerWidth <= 768){
                    for (let i = 0; i < arrImgMona.length; i++){
                        ImgMona.style.opacity = 0.5;
                        ImgMona.style.backgroundImage = arrImgMona768[countTurnAbout - 1];
                        ImgMona.style.backgroundSize = 'contain';
                        ImgMona.style.opacity = 1;
                    }
                }
            } 
            if (countTurnAbout == 5){
                countTurnAbout = 5;
                countTurnAboutNow.textContent = '0' + countTurnAbout;
            }
            for (let i = 0; i < countBannerBlocks.length;i++){
                if (countTurnAbout == 1){
                    countBannerBlocks[0].style.backgroundColor ='#D2B183';
                    countBannerBlocks[1].style.backgroundColor = '#FFF';
                    countBannerBlocks[2].style.backgroundColor = '#FFF';
                    countBannerBlocks[3].style.backgroundColor = '#FFF';
                    countBannerBlocks[4].style.backgroundColor = '#FFF';
                } else if (countTurnAbout == 2){
                    countBannerBlocks[1].style.backgroundColor = '#D2B183';
                    countBannerBlocks[0].style.backgroundColor = '#FFF';
                    countBannerBlocks[2].style.backgroundColor = '#FFF';
                    countBannerBlocks[3].style.backgroundColor = '#FFF';
                    countBannerBlocks[4].style.backgroundColor = '#FFF';
                } else if (countTurnAbout == 3){
                    countBannerBlocks[2].style.backgroundColor = '#D2B183';
                    countBannerBlocks[1].style.backgroundColor = '#FFF';
                    countBannerBlocks[0].style.backgroundColor = '#FFF';
                    countBannerBlocks[3].style.backgroundColor = '#FFF';
                    countBannerBlocks[4].style.backgroundColor = '#FFF';
                } else if (countTurnAbout == 4){
                    countBannerBlocks[3].style.backgroundColor = '#D2B183';
                    countBannerBlocks[1].style.backgroundColor = '#FFF';
                    countBannerBlocks[2].style.backgroundColor = '#FFF';
                    countBannerBlocks[0].style.backgroundColor = '#FFF';
                    countBannerBlocks[4].style.backgroundColor = '#FFF';
                } else if (countTurnAbout == 5){
                    countBannerBlocks[4].style.backgroundColor = '#D2B183';
                    countBannerBlocks[1].style.backgroundColor = '#FFF';
                    countBannerBlocks[2].style.backgroundColor = '#FFF';
                    countBannerBlocks[3].style.backgroundColor = '#FFF';
                    countBannerBlocks[0].style.backgroundColor = '#FFF';
                }

            }
           console.log(countTurnAbout);
        })

        arrowLeft.addEventListener('click', function countTurnMinus(){
            clearInterval(start);
            countTurnAbout -=1;
            countTurnAboutNow.textContent = '0' + countTurnAbout;
            for (let i = 0; i < arrImgMona.length; i++){
                ImgMona.style.opacity = 0.5;
                ImgMona.style.backgroundImage = arrImgMona[countTurnAbout - 1];
                ImgMona.style.backgroundSize = 'contain';
                ImgMona.style.opacity = 1;
            }
            if (window.innerWidth <= 768){
                for (let i = 0; i < arrImgMona.length; i++){
                    ImgMona.style.opacity = 0.5;
                    ImgMona.style.backgroundImage = arrImgMona768[countTurnAbout - 1];
                    ImgMona.style.backgroundSize = 'contain';
                    ImgMona.style.opacity = 1;
                }
            }
            if (countTurnAbout < 1){
                countTurnAbout = 5;
                countTurnAboutNow.textContent = '0' + countTurnAbout;
                for (let i = 0; i < arrImgMona.length; i++){
                    ImgMona.style.opacity = 0.5;
                    ImgMona.style.backgroundImage = arrImgMona[countTurnAbout - 1];
                    ImgMona.style.backgroundSize = 'contain';
                    ImgMona.style.opacity = 1;
                }
                if (window.innerWidth <= 768){
                    for (let i = 0; i < arrImgMona.length; i++){
                        ImgMona.style.opacity = 0.5;
                        ImgMona.style.backgroundImage = arrImgMona768[countTurnAbout - 1];
                        ImgMona.style.backgroundSize = 'contain';
                        ImgMona.style.opacity = 1;
                    }
                }
            }
            for (let i = 0; i < countBannerBlocks.length;i++){
                if (countTurnAbout == 1){
                    countBannerBlocks[0].style.backgroundColor ='#D2B183';
                    countBannerBlocks[1].style.backgroundColor = '#FFF';
                    countBannerBlocks[2].style.backgroundColor = '#FFF';
                    countBannerBlocks[3].style.backgroundColor = '#FFF';
                    countBannerBlocks[4].style.backgroundColor = '#FFF';
                } else if (countTurnAbout == 2){
                    countBannerBlocks[1].style.backgroundColor = '#D2B183';
                    countBannerBlocks[0].style.backgroundColor = '#FFF';
                    countBannerBlocks[2].style.backgroundColor = '#FFF';
                    countBannerBlocks[3].style.backgroundColor = '#FFF';
                    countBannerBlocks[4].style.backgroundColor = '#FFF';
                } else if (countTurnAbout == 3){
                    countBannerBlocks[2].style.backgroundColor = '#D2B183';
                    countBannerBlocks[1].style.backgroundColor = '#FFF';
                    countBannerBlocks[0].style.backgroundColor = '#FFF';
                    countBannerBlocks[3].style.backgroundColor = '#FFF';
                    countBannerBlocks[4].style.backgroundColor = '#FFF';
                } else if (countTurnAbout == 4){
                    countBannerBlocks[3].style.backgroundColor = '#D2B183';
                    countBannerBlocks[1].style.backgroundColor = '#FFF';
                    countBannerBlocks[2].style.backgroundColor = '#FFF';
                    countBannerBlocks[0].style.backgroundColor = '#FFF';
                    countBannerBlocks[4].style.backgroundColor = '#FFF';
                } else if (countTurnAbout == 5){
                    countBannerBlocks[4].style.backgroundColor = '#D2B183';
                    countBannerBlocks[1].style.backgroundColor = '#FFF';
                    countBannerBlocks[2].style.backgroundColor = '#FFF';
                    countBannerBlocks[3].style.backgroundColor = '#FFF';
                    countBannerBlocks[0].style.backgroundColor = '#FFF';
                }

            }
            console.log(countTurnAbout);
        })
// video

const video = document.querySelector('.video-player');
let play$pause = document.querySelector('.video-play');
let activeVideo = false;
let progressValue = document.querySelectorAll('.video-time');
let mute = document.querySelector('.video-volume');
let soundBootline = document.querySelector('.video-volume-bootline');
let bgPlay = document.getElementById('bgPlay');
let memcount = 1;
let kslider = 0;
let memForTitleContent = '';
let titlesContent = document.querySelectorAll('.TitleContentYT');
let slidersPage = document.querySelectorAll('#sliderPage');

// сокращаем длинный текст до 36 символов + ...
function sliceTitle(){
for (let titleContent of titlesContent){
    if (titleContent.textContent.length > 36){
        titleContent.textContent = titleContent.innerText.slice(0,36) + '...';
    }
}
}
// добавление функционалу слайдера чтобы менялся контент при переключении...
let arrVideo1 = {src1: 'image/Louvre Museum 4K _ Tour inside Louvre Museum Paris.mp4', src9: 'image/initiald_1.mp4', src2: 'image/video2.mp4', src3: 'image/video3.mp4', src4: 'image/video4.mp4', src5: 'image/video5.mp4', src6: 'image/video6.mp4', src7: 'image/video7.mp4', src8: 'image/video8.mp4', src10: 'image/video9.mp4', src11: 'image/video10.mp4', src12: 'image/video11.mp4', src13: 'image/video12.mp4', src14: 'image/video13.mp4', src15: 'image/video14.mp4',
 img1: 'url(image/postervideo2)'};
let slider1 = document.querySelector('.slider');
let VideoArr1 = ['url(image/postervideo1.png)', 'url(image/postervideo4.png)', 'url(image/postervideo7.png)', 'url(image/postervideo10.png)', 'url(image/postervideo13.png)'];
let VideoArr2 = ['url(image/postervideo2.png)', 'url(image/postervideo5.png)', 'url(image/postervideo8.png)', 'url(image/postervideo11.png)', 'url(image/postervideo14.png)'];
let VideoArr3 = ['url(image/postervideo3.png)', 'url(image/postervideo6.png)', 'url(image/postervideo9.png)', 'url(image/postervideo12.png)', 'url(image/postervideo15.png)'];
let VideoSrc1 = ['image/Louvre Museum 4K _ Tour inside Louvre Museum Paris.mp4', 'image/video4.mp4', 'image/video7.mp4', 'image/video10.mp4', 'image/video13.mp4'];
let VideoSrc2 = ['image/video2.mp4', 'image/video5.mp4', 'image/video8.mp4', 'image/video11.mp4', 'image/video14.mp4'];
let VideoSrc3 = ['image/video3.mp4', 'image/video6.mp4', 'image/video9.mp4', 'image/video12.mp4', 'image/initiald_1.mp4'];
let slider2 = document.querySelector('.slider2');
let slider3 = document.querySelector('.slider3');
let sliderToolL = document.querySelector('.sliderToolLeft');
let sliderToolR = document.querySelector('.sliderToolRight');
let sliderPages = document.querySelectorAll('#sliderPage');
let sliderPagesCount = 0;

//обрезаем текст
for (let titleCont of titlesContent){
 if (titleCont.textContent.length > 26 && window.innerWidth >= 768){
    let limit = 25;
    let res = new RegExp("(^.{" + (limit - 1) + "}([^ ]+|\\s))(.*)");
    titleCont.textContent = titleCont.textContent.replace(res, '$1');
 }
}

sliderPages[0].style.backgroundColor = '#333';
// попытка 2 реализовать переключение контента и бутфото для запуска различных видео
sliderToolL.addEventListener('click', MoveLeft);
sliderToolR.addEventListener('click', MoveRight);

for (let i = 0; i < sliderPages.length; i++){
    sliderPages[i].addEventListener('click', function ButtonMoveSlider(){
        sliderPagesCount = i;
        slider1.style.backgroundImage = VideoArr1[sliderPagesCount];
        slider2.style.backgroundImage = VideoArr2[sliderPagesCount];
        slider3.style.backgroundImage = VideoArr3[sliderPagesCount];
        for (let titleCont of titlesContent){
            if (titleCont.textContent.length > 26 && window.innerWidth >= 768){
                let limit = 25;
                let res = new RegExp("(^.{" + (limit - 1) + "}([^ ]+|\\s))(.*)");
                titleCont.textContent = titleCont.textContent.replace(res, '$1');
             }
            titleCont.textContent = titleCont.textContent.split('.mp4')[0];
           } 
    });
    sliderPages[0].addEventListener('click', function(){
        sliderPages[i].style.backgroundColor = '#999';
        this.style.backgroundColor = '#333';
    })
    sliderPages[1].addEventListener('click', function(){
        sliderPages[i].style.backgroundColor = '#999';
        this.style.backgroundColor = '#333';
    })
    sliderPages[2].addEventListener('click', function(){
        sliderPages[i].style.backgroundColor = '#999';
        this.style.backgroundColor = '#333';
    })
    sliderPages[3].addEventListener('click', function(){
        sliderPages[i].style.backgroundColor = '#999';
        this.style.backgroundColor = '#333';
    })
    sliderPages[4].addEventListener('click', function(){
        sliderPages[i].style.backgroundColor = '#999';
        this.style.backgroundColor = '#333';
    })
}
function MoveLeft(){
    sliderPagesCount--;
    if (sliderPagesCount < 0){
        sliderPagesCount = 4;
        sliderPages[0].style.backgroundColor = '#999';
        sliderPages[sliderPagesCount].style.backgroundColor = '#333';
        console.log('sldierPageCountIf', sliderPagesCount);
        slider1.style.backgroundImage = VideoArr1[sliderPagesCount];
        slider2.style.backgroundImage = VideoArr2[sliderPagesCount];
        slider3.style.backgroundImage = VideoArr3[sliderPagesCount];
        titlesContent[0].textContent = VideoSrc1[sliderPagesCount].split('/')[1];
        titlesContent[1].textContent = VideoSrc2[sliderPagesCount].split('/')[1];
        titlesContent[2].textContent = VideoSrc3[sliderPagesCount].split('/')[1];
    }
    else if (sliderPagesCount <=4 && sliderPagesCount >=0){
        console.log('sldierPageCountElse', sliderPagesCount);
        slider1.style.backgroundImage = VideoArr1[sliderPagesCount];
        slider2.style.backgroundImage = VideoArr2[sliderPagesCount];
        slider3.style.backgroundImage = VideoArr3[sliderPagesCount];
        sliderPages[sliderPagesCount].style.backgroundColor = '#333';
        sliderPages[sliderPagesCount+1].style.backgroundColor = '#999';
        sliderPages[4].style.backgroundColor = '#999';
    }
    titlesContent[0].textContent = VideoSrc1[sliderPagesCount].split('/')[1];
    titlesContent[1].textContent = VideoSrc2[sliderPagesCount].split('/')[1];
    titlesContent[2].textContent = VideoSrc3[sliderPagesCount].split('/')[1];
    for (let titleCont of titlesContent){
        if (titleCont.textContent.length > 26 && window.innerWidth >= 768){
            let limit = 25;
            let res = new RegExp("(^.{" + (limit - 1) + "}([^ ]+|\\s))(.*)");
            titleCont.textContent = titleCont.textContent.replace(res, '$1');
         }
        titleCont.textContent = titleCont.textContent.split('.mp4')[0];
       }
};
function MoveRight(){
    sliderPagesCount++;
    if (sliderPagesCount <= 4 && sliderPagesCount >= 0){
        console.log('sldierPageCountIf', sliderPagesCount);
        console.log('+++');
        sliderPages[4].style.backgroundColor = '#999';
        sliderPages[sliderPagesCount].style.backgroundColor = '#333';
        sliderPages[sliderPagesCount-1].style.backgroundColor = '#999';
        slider1.style.backgroundImage = VideoArr1[sliderPagesCount];
        slider2.style.backgroundImage = VideoArr2[sliderPagesCount];
        slider3.style.backgroundImage = VideoArr3[sliderPagesCount];
        if (sliderPagesCount > 4){
            sliderPagesCount = 0;
            sliderPages[sliderPagesCount].style.backgroundColor = '#333';
        }
    }
    else if (sliderPagesCount > 4){
        console.log('sldierPageCountElse', sliderPagesCount);
        sliderPagesCount = 0;
        sliderPages[4].style.backgroundColor = '#999';
        sliderPages[sliderPagesCount].style.backgroundColor = '#333';
        slider1.style.backgroundImage = VideoArr1[sliderPagesCount];
        slider2.style.backgroundImage = VideoArr2[sliderPagesCount];
        slider3.style.backgroundImage = VideoArr3[sliderPagesCount];
    }
    titlesContent[0].textContent = VideoSrc1[sliderPagesCount].split('/')[1];
    titlesContent[1].textContent = VideoSrc2[sliderPagesCount].split('/')[1];
    titlesContent[2].textContent = VideoSrc3[sliderPagesCount].split('/')[1];
    for (let titleCont of titlesContent){
        if (titleCont.textContent.length > 26 && window.innerWidth >= 768){
            let limit = 25;
            let res = new RegExp("(^.{" + (limit - 1) + "}([^ ]+|\\s))(.*)");
            titleCont.textContent = titleCont.textContent.replace(res, '$1');
         }
        titleCont.textContent = titleCont.textContent.split('.mp4')[0];
       }
};
slider1.addEventListener('click', function(){
    video.src = VideoSrc1[sliderPagesCount];
    console.log('slider1Event', sliderPagesCount);
    console.log('videoSRC', video.src);
    bgPlay.style.display = 'block';
})
slider2.addEventListener('click', function(){
    video.src = VideoSrc2[sliderPagesCount];
    console.log('slider1Event', sliderPagesCount);
    console.log('videoSRC', video.src);
    bgPlay.style.display = 'block';
})
slider3.addEventListener('click', function(){
    video.src = VideoSrc3[sliderPagesCount];
    console.log('slider1Event', sliderPagesCount);
    console.log('videoSRC', video.src);
    bgPlay.style.display = 'block';
})

/*
console.log (kslider, 'kslider');
sliderRight.addEventListener('click', function slideRight(){
    kslider += 1;
    for (let j = 0; j < titlesContent.length; j++){
    console.log (kslider, 'kslider');
    if (kslider == 0){
        if (window.innerWidth <= 768 && window.innerWidth > 420){
            console.log('+++');
            titlesContent[0].textContent = titlesContent[0].innerText.slice(0,25) + '...';
        } else if (window.innerWidth <= 420) {
            titlesContent[0].textContent = titlesContent[0].innerText.slice(0,7) + '...';
            titlesContent[1].textContent = titlesContent[1].innerText.slice(0,7) + '...';
            titlesContent[2].textContent = titlesContent[2].innerText.slice(0,7) + '...';
        } 
        else {
            titlesContent[0].textContent = titlesContent[0].innerText.slice(0,36) + '...';
        }
        slider1.style.backgroundImage = 'url(image/postervideo1.png)';
        slider1.style.backgroundRepeat = 'no-repeat';
        slider2.style.backgroundImage = 'url(image/postervideo2.png)';
        slider3.style.backgroundImage = 'url(image/postervideo3.png)';
        slidersPage[0].style.backgroundColor = '#333333';
        slidersPage[1].style.backgroundColor = '#999999';
        slidersPage[2].style.backgroundColor = '#999999';
        slidersPage[3].style.backgroundColor = '#999999';
        slidersPage[4].style.backgroundColor = '#999999';
    } else if (kslider == 1){
        slider1.style.backgroundImage = 'url(image/postervideo4.png)';
        titlesContent[0].textContent = 'Les chefs-dœuvre méconnus du Louvre (Axolot)';
        if (window.innerWidth <= 768 && window.innerWidth > 420){
            console.log('+++');
            titlesContent[0].textContent = titlesContent[0].innerText.slice(0,25) + '...';
        } else if (window.innerWidth <= 420) {
            titlesContent[0].textContent = titlesContent[0].innerText.slice(0,7) + '...';
            titlesContent[1].textContent = titlesContent[1].innerText.slice(0,7) + '...';
            titlesContent[2].textContent = titlesContent[2].innerText.slice(0,7) + '...';
        } 
        else {
            titlesContent[0].textContent = titlesContent[0].innerText.slice(0,36) + '...';
        }
        slider1.style.backgroundRepeat = 'repeat';
        slider2.style.backgroundImage = 'url(image/postervideo5.png)';
        titlesContent[1].textContent = 'Le Louvre';
        slider3.style.backgroundImage ='url(image/postervideo6.png)';
        titlesContent[2].textContent = 'The Louvre: 800 years of history';
        slidersPage[0].style.backgroundColor = '#999999';
        slidersPage[1].style.backgroundColor = '#333333';
        slidersPage[2].style.backgroundColor = '#999999';
        slidersPage[3].style.backgroundColor = '#999999';
        slidersPage[4].style.backgroundColor = '#999999';
    } else if (kslider == 2){
        titlesContent[1].textContent = 'Le Sacre de Napoléon, de David - Musée du Louvre';
        if (window.innerWidth <= 768 && window.innerWidth > 420){
            console.log('+++');
            titlesContent[0].textContent = titlesContent[0].innerText.slice(0,25) + '...';
        } else if (window.innerWidth <= 420) {
            titlesContent[0].textContent = titlesContent[0].innerText.slice(0,7) + '...';
            titlesContent[1].textContent = titlesContent[1].innerText.slice(0,7) + '...';
            titlesContent[2].textContent = titlesContent[2].innerText.slice(0,7) + '...';
        } 
        else {
            titlesContent[0].textContent = titlesContent[0].innerText.slice(0,36) + '...';
        }

        slider1.style.backgroundImage = 'url(image/start.png)';
        titlesContent[0].textContent = 'initial wave';
        slider2.style.backgroundImage = 'url(image/postervideo7.png)';

     // лишний текст идет нафиг я знаю что так не эффективно но я джун мне пока можно (нет) , сейчас бы самим с собой общаться в 5 утра ночи
        slider3.style.backgroundImage = 'url(image/postervideo8.png)';
        titlesContent[2].textContent = 'Au Louvre ! Le Sacre de Napoléon';
        slidersPage[0].style.backgroundColor = '#999999';
        slidersPage[1].style.backgroundColor = '#999999';
        slidersPage[2].style.backgroundColor = '#333333';
        slidersPage[3].style.backgroundColor = '#999999';
        slidersPage[4].style.backgroundColor = '#999999';
    } else if (kslider == 3){
        slider1.style.backgroundImage = 'url(image/postervideo9.png)';
        titlesContent[0].textContent = 'Au Louvre ! La cour Khorsabad';
        slider2.style.backgroundImage = 'url(image/postervideo10.png)';
        titlesContent[1].textContent = "Au Louvre ! La galerie d'Apollon";
        slider3.style.backgroundImage = 'url(image/postervideo11.png)';
        titlesContent[2].textContent = "Au Louvre ! La salle du temple et la salle des sarcophages";
        if (window.innerWidth <= 768 && window.innerWidth > 420){
            console.log('+++');
            titlesContent[0].textContent = titlesContent[0].innerText.slice(0,25) + '...';
        } else if (window.innerWidth <= 420) {
            titlesContent[0].textContent = titlesContent[0].innerText.slice(0,7) + '...';
            titlesContent[1].textContent = titlesContent[1].innerText.slice(0,7) + '...';
            titlesContent[2].textContent = titlesContent[2].innerText.slice(0,7) + '...';
        } 
        else {
            titlesContent[0].textContent = titlesContent[0].innerText.slice(0,36) + '...';
        }
        slidersPage[0].style.backgroundColor = '#999999';
        slidersPage[1].style.backgroundColor = '#999999';
        slidersPage[2].style.backgroundColor = '#999999';
        slidersPage[3].style.backgroundColor = '#333333';
        slidersPage[4].style.backgroundColor = '#999999';
    } else if (kslider == 4){
        titlesContent[1].textContent = "Au Louvre ! Le Salon carré";
        slider1.style.backgroundImage = 'url(image/postervideo12.png)';
        titlesContent[0].textContent = "Au Louvre ! Les salles des Arts de l'Islam";
        titlesContent[0].textContent = titlesContent[0].innerText.slice(0,36) + '...';
        if (window.innerWidth <= 768 && window.innerWidth > 420){
            console.log('+++');
            titlesContent[0].textContent = titlesContent[0].innerText.slice(0,25) + '...';
        } else if (window.innerWidth <= 420) {
            titlesContent[0].textContent = titlesContent[0].innerText.slice(0,7) + '...';
            titlesContent[1].textContent = titlesContent[1].innerText.slice(0,7) + '...';
            titlesContent[2].textContent = titlesContent[2].innerText.slice(0,7) + '...';
        } 
        else {
            titlesContent[0].textContent = titlesContent[0].innerText.slice(0,36) + '...';
        }
        slider1.style.backgroundRepeat = 'no-repeat';
        slider2.style.backgroundImage = 'url(image/postervideo13.png)';
        slider3.style.backgroundImage = 'url(image/postervideo14.png)';
        titlesContent[2].textContent = "Au Louvre ! Sainte Marie-Madeleine";
        slidersPage[0].style.backgroundColor = '#999999';
        slidersPage[1].style.backgroundColor = '#999999';
        slidersPage[2].style.backgroundColor = '#999999';
        slidersPage[3].style.backgroundColor = '#999999';
        slidersPage[4].style.backgroundColor = '#333333';
    }
    if (kslider >= 4){
        kslider = -1;
    }
}
})
sliderLeft.addEventListener('click', function(){
    kslider -= 1;
    console.log (kslider, 'sliderLeft');
    for (let sliderPage of slidersPage){

    if (sliderPage.dataset.number = 1){
        slider1.style.backgroundImage = 'url(image/postervideo1.png)';
        slider1.style.backgroundRepeat = 'no-repeat';
        slider2.style.backgroundImage = 'url(image/postervideo2.png)';
        slider3.style.backgroundImage = 'url(image/postervideo3.png)';
        slidersPage[0].style.backgroundColor = '#333333';
        slidersPage[1].style.backgroundColor = '#999999';
        slidersPage[2].style.backgroundColor = '#999999';
        slidersPage[3].style.backgroundColor = '#999999';
        slidersPage[4].style.backgroundColor = '#999999';
    } else if (kslider == 1){
        slider1.style.backgroundImage = 'url(image/postervideo4.png)';
        titlesContent[0].textContent = 'Les chefs-dœuvre méconnus du Louvre (Axolot)';
        slider1.style.backgroundRepeat = 'repeat';
        slider2.style.backgroundImage = 'url(image/postervideo5.png)';
        titlesContent[1].textContent = 'Le Louvre';
        slider3.style.backgroundImage ='url(image/postervideo6.png)';
        titlesContent[2].textContent = 'The Louvre: 800 years of history';
        slidersPage[0].style.backgroundColor = '#999999';
        slidersPage[1].style.backgroundColor = '#333333';
        slidersPage[2].style.backgroundColor = '#999999';
        slidersPage[3].style.backgroundColor = '#999999';
        slidersPage[4].style.backgroundColor = '#999999';
    } else if (kslider == 2){
        slider1.style.backgroundImage = 'url(image/start.png)';
        titlesContent[0].textContent = 'initial wave';
        slider2.style.backgroundImage = 'url(image/postervideo7.png)';
        titlesContent[1].textContent = 'Le Sacre de Napoléon, de David - Musée du Louvre';
        titlesContent[1].textContent = titlesContent[1].innerText.slice(0,36) + '...'; // лишний текст идет нафиг я знаю что так не эффективно но я джун мне пока можно (нет) , сейчас бы самим с собой общаться в 5 утра ночи
        if (window.innerWidth < 768){
            
        }
        titlesContent[1].textContent = titlesContent[1].innerText.slice(0,36) + '...';
        slider3.style.backgroundImage = 'url(image/postervideo8.png)';
        titlesContent[2].textContent = 'Au Louvre ! Le Sacre de Napoléon';
        slidersPage[0].style.backgroundColor = '#999999';
        slidersPage[1].style.backgroundColor = '#999999';
        slidersPage[2].style.backgroundColor = '#333333';
        slidersPage[3].style.backgroundColor = '#999999';
        slidersPage[4].style.backgroundColor = '#999999';
    } else if (kslider == 3){
        slider1.style.backgroundImage = 'url(image/postervideo9.png)';
        titlesContent[0].textContent = 'Au Louvre ! La cour Khorsabad';
        slider2.style.backgroundImage = 'url(image/postervideo10.png)';
        titlesContent[1].textContent = "Au Louvre ! La galerie d'Apollon";
        slider3.style.backgroundImage = 'url(image/postervideo11.png)';
        titlesContent[2].textContent = "Au Louvre ! La salle du temple et la salle des sarcophages";
        titlesContent[2].textContent = titlesContent[1].innerText.slice(0,36) + '...';
        slidersPage[0].style.backgroundColor = '#999999';
        slidersPage[1].style.backgroundColor = '#999999';
        slidersPage[2].style.backgroundColor = '#999999';
        slidersPage[3].style.backgroundColor = '#333333';
        slidersPage[4].style.backgroundColor = '#999999';
    } else if (kslider == 4){
        slider1.style.backgroundImage = 'url(image/postervideo12.png)';
        titlesContent[0].textContent = "Au Louvre ! Les salles des Arts de l'Islam";
        titlesContent[0].textContent = titlesContent[1].innerText.slice(0,36) + '...';
        slider1.style.backgroundRepeat = 'no-repeat';
        slider2.style.backgroundImage = 'url(image/postervideo13.png)';
        titlesContent[1].textContent = "Au Louvre ! Le Salon carré";
        slider3.style.backgroundImage = 'url(image/postervideo14.png)';
        titlesContent[2].textContent = "Au Louvre ! Sainte Marie-Madeleine";
        slidersPage[0].style.backgroundColor = '#999999';
        slidersPage[1].style.backgroundColor = '#999999';
        slidersPage[2].style.backgroundColor = '#999999';
        slidersPage[3].style.backgroundColor = '#999999';
        slidersPage[4].style.backgroundColor = '#333333';
    }
    if (kslider <= 0){
        kslider = 5;
    }
}
})
*/
mute.addEventListener('click', function muteSound(){
    if (video.volume == 0) {
        video.volume = 1;
        mute.style.backgroundImage = 'url(image/volume.svg)';
        soundBootline.value = 100;
    } else {
        video.volume = 0;
        mute.style.backgroundImage = 'url(image/mute.svg)';
        soundBootline.value = 0;
    }
})
play$pause.addEventListener('click', function playPause(){
    if (video.paused){
        activeVideo = true;
        video.play();
        play$pause.style.backgroundImage = 'url(image/pause.svg)';
        bgPlay.style.display = 'none';
    }
    else {
        video.pause();
        play$pause.style.backgroundImage = 'url(image/play.svg)';
        console.log(video.duration);
        console.log(video.currentTime);
    }

});
bgPlay.addEventListener('click', function playPause(){
    if (video.paused){
        activeVideo = true;
        video.play();
        play$pause.style.backgroundImage = 'url(image/pause.svg)';
        bgPlay.style.display = 'none';
    }
    else {
        video.pause();
        play$pause.style.backgroundImage = 'url(image/play.svg)';
        console.log(video.duration);
        console.log(video.currentTime);
    }

});

video.addEventListener('click', function playPause(){
    if (video.paused){
        activeVideo = true;
        video.play();
        play$pause.style.backgroundImage = 'url(image/pause.svg)';
        bgPlay.style.display = 'none';
    }
    else {
        video.pause();
        play$pause.style.backgroundImage = 'url(image/play.svg)';
        console.log(video.duration);
        console.log(video.currentTime);
    }

});

function videoTime(time) { //Рассчитываем время в секундах и минутах
    time = Math.floor(time);
    var minutes = Math.floor(time / 60);
    var seconds = Math.floor(time - minutes * 60);
    var minutesVal = minutes;
    var secondsVal = seconds;
    if(minutes < 10) {
    minutesVal = '0' + minutes;
    }
    if(seconds < 10) {
    secondsVal = '0' + seconds;
    }
    return minutesVal + ':' + secondsVal;
}

let mem = 0;
function videoProgress() { //Отображаем время воспроизведения

    progress = (Math.floor(video.currentTime) / (Math.floor(video.duration) / 100));
    console.log(progress.toFixed(0), 'progress');
    //progressValue.value = progress.toFixed(0);
    for (let i = 0; i < progressValue.length; i++){
        progressValue[i].value = progress.toFixed(0);
    
    mem = progressValue.value;

    progressValue[i].addEventListener('input',function videoChangeTime(){
        video.currentTime = progressValue[i].value * ((video.duration).toFixed(0) / 100);
    }); 
}
    
    }

    video.addEventListener('timeupdate',videoProgress);


soundBootline.addEventListener('input', function corrSound(){
    let volume = soundBootline.value / 100;
    video.volume = volume;
    if (soundBootline.value == 0){
        mute.style.backgroundImage = 'url(image/mute.svg)';
    } else {
        mute.style.backgroundImage = 'url(image/volume.svg)';
    }

})

// фулл скрин

let fullscr = document.querySelector('.video-fullscr');
let fullscrStatus = false;
fullscr.addEventListener('click', function fullscreen(){
    fullscr.style.backgroundImage = 'url(image/fullscreen_exit.svg)';
    video.requestFullscreen();
    video.controls = false;
    fullscrStatus = true;
    if (fullscrStatus == true){
        fullscr.style.backgroundImage = 'url(image/fullscreen.svg)';
    }
})

let hud = document.querySelector('.video-hud');
function offVideoHud(){
    if (video.paused != true && window.innerWidth > 768){
        hud.style.opacity = 0;
    }
}
hud.addEventListener('mousemove', function(){
    console.log('худ будет виден');
    if (event.target = hud){
    }
        hud.style.opacity = 1;
        clearTimeout(offVideoHud);
});

hud.addEventListener('mouseleave', function(){
    setTimeout(offVideoHud, 5000);
})
document.addEventListener('wheel', (evt)=>{
    console.log(evt.deltaY);
})


let bgArt = document.querySelector('.forjs');
let ColumnGroupArt = document.querySelector('.forjs1');
let ColumnGroupArt2 = document.querySelector('.forjs2');
let ColumnGroupArt3 = document.querySelector('.forjs3');
var lastScrollTop = 0;
let body = document.body, html = document.documentElement;
let heightBgArt = Math.max (bgArt.scrollHeight);
let heightPage = Math.max (body.scrollHeight);
let saveCheck = 0;
let lastRes;
let res = 0;
let checkCroll = 0
let resDown = 0;
let resUp = 0;
// проверка на прокрутку
/*function onScroll () {
    var top = window.pageYOffset;
    let translatePage = 'translateY(8px)';
    let translatePage2 = 'translateY(-8px)';
    let translatePage2Fast = 'translateY(-8px)';
    let translatePage2Faster = 'translateY(-12px)';
    let translatePage2MostFast = 'translateY(-15px)';
    let translatePageFast = 'translateY(8px)';
    let translatePageFaster = 'translateY(12px)';
    let translatePageMostFast = 'translateY(15px)';
    let resDown = 0;
    let resUp = 0;
            if (lastScrollTop > top) {
                ColumnGroupArt.style.transform += translatePageMostFast;
                ColumnGroupArt3.style.transform += translatePageFaster;
                ColumnGroupArt2.style.transform += translatePageFast;
                saveCheck = saveCheck + 15;
                console.log('resUp', resUp);
                console.log('resUp', resDown);
            } 
            if (lastScrollTop < top ) {
                ColumnGroupArt.style.transform += translatePage2MostFast;
                ColumnGroupArt3.style.transform += translatePage2Faster;
                ColumnGroupArt2.style.transform += translatePage2Fast;
                saveCheck = saveCheck - 15;
                console.log('resdown',resUp);
                console.log('resdown',resDown);
        
            }
    lastScrollTop = top;
}  */ 
let element = document.querySelector('.forjs');
let kColumn1 = 0;
let kArr = [];
let SaveAnim;
let positionCheck;
let ConstPositionCheck = ColumnGroupArt.getBoundingClientRect();
let ConstPositionCheck1 = ConstPositionCheck.top + window.pageYOffset;
let calculationPozition;
let j = 0;
var Visible = function (target) {
    // Все позиции элемента
    var targetPosition = {
        top: window.pageYOffset + target.getBoundingClientRect().top,
        left: window.pageXOffset + target.getBoundingClientRect().left,
        right: window.pageXOffset + target.getBoundingClientRect().right,
        bottom: window.pageYOffset + target.getBoundingClientRect().bottom
      },
      // Получаем позиции окна
      windowPosition = {
        top: window.pageYOffset,
        left: window.pageXOffset,
        right: window.pageXOffset + document.documentElement.clientWidth,
        bottom: window.pageYOffset + document.documentElement.clientHeight
      };
  
    if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
      targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
      targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
      targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
      // Если элемент полностью видно, то запускаем следующий код
      console.log('Виден', kColumn1);
      kArr.push(kColumn1);
      checkCroll = kArr[kArr.length -1];
      var top = window.pageYOffset;
      let translatePage2Fast = 'translateY(-8px)';
      let translatePage2Faster = 'translateY(-12px)';
      let translatePage2MostFast = 'translateY(-15px)';
      let translatePageFast = 'translateY(8px)';
      let translatePageFaster = 'translateY(12px)';
      let translatePageMostFast = 'translateY(15px)';
      positionCheck = ColumnGroupArt.getBoundingClientRect();
      calculationPozition = ConstPositionCheck1 - (positionCheck.top +window.pageYOffset);
              if (lastScrollTop > top) {
                    if (ConstPositionCheck1 < (positionCheck.top + window.pageYOffset)){
                        console.log('stop');
                    } else {

                    
                  ColumnGroupArt.style.transform += translatePageMostFast;
                  ColumnGroupArt2.style.transform += translatePageFast;
                  ColumnGroupArt3.style.transform += translatePageFaster;
                    }

              } 
              if (lastScrollTop < top ) {
                if (calculationPozition > 3700 && winddow.innerWidth > 1024){
                    console.log('stop');
                } else if(calculationPozition > 3000 && (window.innerWidth < 1024 && window.innerWidth > 420)) {
                    console.log('stop');
                } else if (calculationPozition > 1100 && window.innerWidth <= 420){
                    console.log('stop');
                }
                else{

                  ColumnGroupArt.style.transform += translatePage2MostFast;
                  ColumnGroupArt3.style.transform += translatePage2Faster;
                  ColumnGroupArt2.style.transform += translatePage2Fast;
                }
              }
      lastScrollTop = top;
    } else {
      // Если элемент не видно, то запускаем этот код
      kColumn1 = 0;
      SaveAnim = kArr[kArr.length-1];
      console.log('resUp', resUp);
      console.log('resdown',resDown);
    };
  };
  
  // Запускаем функцию при прокрутке страницы
  window.addEventListener('scroll', function() {
    kColumn1++;
    Visible (element);
    //console.log('checkscroll', checkCroll);
    console.log('top', positionCheck.top + window.pageYOffset);
    console.log('вечная координата колонки', ConstPositionCheck1);
    console.log('изменяющаяся координа колонки', calculationPozition);
  });
  /*"Пет проект выполнил Кленин Евгений @evg3nOff
        evgenkleninoff@gmail.com
         */
        class Employee {
            constructor(salary) {
                this.salary = salary;
            }
            add$ToSalary() {
                return this.salary + '$';
            }
        }