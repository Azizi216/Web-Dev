import { Component } from '@angular/core';
import { Product } from '../../product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Huawei WATCH GT 6 41mm Gold-Gold',
      description: 'HUAWEI WATCH GT 6 41mmA sleek smartwatch',
      price: 100466,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pb7/p87/72527964.png?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/pb7/p87/72527964.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p87/pfe/73833197.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p9a/p87/72527965.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/huawei-watch-gt-6-41-mm-zolotistyi-zolotistyi-147986879/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_gadgets_wearables_desktop&gbraid=0AAAAAC7-v7jM9RoouwCxoFsSslZE7kDmI&gclid=Cj0KCQiA49XMBhDRARIsAOOKJHabWh7acFNq0OiziEdIYfNiwvKoNEa_kwc6wbUyjx4UKZXU7qfgwowaArOsEALw_wcB'
    },
    {
      id: 2,
      name: 'YUNTEDKO Gi20 47mm Pink-Pink',
      description: 'The YUNTEKO Gi20 smartwatch is a stylish',
      price: 15888,
      rating: 4.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h49/h9a/84355202383902.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/ha0/h23/84353783431198.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h6b/hdc/84355202580510.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h24/h3f/84355202711582.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/123457/'
    },
    {
      id: 3,
      name: 'Xiaomi Smart Band 10 black',
      description: 'The Xiaomi Smart Band 10 is a stylish ',
      price: 23588,
      rating: 4.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pe9/p90/84688212.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/pe9/p90/84688212.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p74/p92/67214815.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p32/p05/49520027.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/xiaomi-smart-band-10-chernyi-141530632/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_gadgets_wearables_desktop&gbraid=0AAAAAC7-v7jM9RoouwCxoFsSslZE7kDmI&gclid=Cj0KCQiA49XMBhDRARIsAOOKJHabWh7acFNq0OiziEdIYfNiwvKoNEa_kwc6wbUyjx4UKZXU7qfgwowaArOsEALw_wcB'
    },
     {
      id: 4,
      name: 'Samsung Galaxy Fit3 black',
      description: 'Introducing the Samsung Galaxy Fit3—your',
      price: 22988,
      rating: 4.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h6d/hfc/85335415848990.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hf0/h6d/85335415914526.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h23/hb9/85335415980062.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hda/h3f/85335416111134.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-fit3-chernyi-117127851/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_gadgets_wearables_desktop&gbraid=0AAAAAC7-v7jM9RoouwCxoFsSslZE7kDmI&gclid=Cj0KCQiA49XMBhDRARIsAOOKJHabWh7acFNq0OiziEdIYfNiwvKoNEa_kwc6wbUyjx4UKZXU7qfgwowaArOsEALw_wcB'
    },

     {
      id: 5,
      name: 'Xiaomi Smart Band 9 Pro black',
      description: 'This is a short description of product 2.',
      price: 37065,
      rating: 4.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pc2/p14/87508033.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p47/pbc/8999023.jpg?format=gallery-large', 'https://resources.cdn-kaspi.kz/img/m/p/pde/p14/87508034.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pfa/p14/87508035.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/xiaomi-smart-band-9-pro-chernyi-130236510/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_gadgets_wearables_desktop&gbraid=0AAAAAC7-v7jM9RoouwCxoFsSslZE7kDmI&gclid=Cj0KCQiA49XMBhDRARIsAOOKJHabWh7acFNq0OiziEdIYfNiwvKoNEa_kwc6wbUyjx4UKZXU7qfgwowaArOsEALw_wcB'
    },
    {
      id: 6,
      name: 'Xiaomi Smart Band 10 gold',
      description: 'Xiaomi Smart Band 10 is a stylish ',
      price: 44990,
      rating: 4.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p56/pad/84687939.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p35/peb/67601282.PNG?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p50/pf7/67392353.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pc2/paf/84687940.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/xiaomi-smart-band-10-zolotistyi-146463268/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_gadgets_wearables_desktop&gbraid=0AAAAAC7-v7jM9RoouwCxoFsSslZE7kDmI&gclid=Cj0KCQiA49XMBhDRARIsAOOKJHabWh7acFNq0OiziEdIYfNiwvKoNEa_kwc6wbUyjx4UKZXU7qfgwowaArOsEALw_wcB'
    },
    {
      id: 7,
      name: 'XRide H80 gold',
      description: 'XRide H80 Sports Smart Bracelet ',
      price: 28328,
      rating: 4.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h04/h5d/85000616345630.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h24/h79/85000616411166.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hbc/hee/85000616476702.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h93/h18/85000616542238.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/xride-h80-zolotistyi-114063591/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_gadgets_wearables_desktop&gbraid=0AAAAAC7-v7jM9RoouwCxoFsSslZE7kDmI&gclid=Cj0KCQiA49XMBhDRARIsAOOKJHabWh7acFNq0OiziEdIYfNiwvKoNEa_kwc6wbUyjx4UKZXU7qfgwowaArOsEALw_wcB'
    },
     {
      id: 8,
      name: 'XRide K31 beige',
      description: 'This is a short description of product 2.',
      price: 34687,
      rating: 4.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p8b/pf7/59340139.png?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p13/pfa/59340141.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p30/pfa/59340142.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p4c/pfa/59340143.png?format=gallery-large'],
      link: 'https://kaspi.kz/shop/p/xride-k31-bezhevyi-144296204/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_gadgets_wearables_desktop&gbraid=0AAAAAC7-v7jM9RoouwCxoFsSslZE7kDmI&gclid=Cj0KCQiA49XMBhDRARIsAOOKJHabWh7acFNq0OiziEdIYfNiwvKoNEa_kwc6wbUyjx4UKZXU7qfgwowaArOsEALw_wcB'
    },

    {
      id: 9,
      name: 'BandRate Smart BRSM55 black',
      description: 'This is a short description of product 2.',
      price: 12089,
      rating: 4.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h96/hba/64010767958046.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h96/hba/64010767958046.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h96/hba/64010767958046.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h96/hba/64010767958046.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/bandrate-smart-brsm55-chernyi-102506709/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_gadgets_wearables_desktop&gbraid=0AAAAAC7-v7jM9RoouwCxoFsSslZE7kDmI&gclid=Cj0KCQiA49XMBhDRARIsAOOKJHabWh7acFNq0OiziEdIYfNiwvKoNEa_kwc6wbUyjx4UKZXU7qfgwowaArOsEALw_wcB'
    },

    
    // Add at least 8 more products here
  ];

 shareProduct(product: Product) {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent('Check out this product: ' + product.link)}`;
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(product.link)}&text=${encodeURIComponent(product.name)}`;
    window.open(whatsappUrl, '_blank');
    // window.open(telegramUrl, '_blank');
  }

}
