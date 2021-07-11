## Auction App

## LIVE ==> 

## Toolbox
 - MERN stack
 - React Hooks
 - Socket.io
 - Swagger

 ## Notes
 Socket.io ile her client'a yeni bir id atanıyor. Client tarafından ürün eklendiğinde onun id'siyle birlikte ürün kaydediliyor ve mongodb tarafından da ürüne unique bir id atanıyor. Ürün listelenirken verilen teklifler, vs listeleniyor. Yeni bir teklif girilirken diğer socket.io yardımıyla diğer clientlerde teklif girme formu kalkıyor.(**Sorun1**) Ancak teklif girildiğinde geri gelmiyor. (**Sorun2**) SetInterval ile ürün ekledikten sonra 10 dk geri sayıma başlayıp bunu nasıl servera socket.io ile gerçek zamanlı servis edebileceğimi çözemedim. (**Sorun3**) Teklif girildikten sonra sadece teklifi giren client tarafından listeleniyor diğer kullanıcılar tarafından listelenmesi için sayfayı refresh etmek gerekiyor. (**Sorun4**) bir client tarafından bir ürüne teklif yazılırken diğer kullanıcılarda diğer ürünler de teklif girilemez hale geliyor.