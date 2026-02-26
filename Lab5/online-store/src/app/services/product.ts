import { Injectable } from '@angular/core';
import { Product } from '../../product.model';
import { Category } from '../product-list/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public categories: Category[] = [
    { id: 1, name: 'SmartWatches' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Tablets' }
  ];

  public products: Product[] = [
    // Example product
    {
      id: 1,
      name: 'Huawei WATCH GT 6 41mm Gold-Gold',
      description: 'HUAWEI WATCH GT 6 41mmA sleek smartwatch',
      price: 100466,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pb7/p87/72527964.png?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/pb7/p87/72527964.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p87/pfe/73833197.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p9a/p87/72527965.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/huawei-watch-gt-6-41-mm-zolotistyi-zolotistyi-147986879/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_gadgets_wearables_desktop&gbraid=0AAAAAC7-v7jM9RoouwCxoFsSslZE7kDmI&gclid=Cj0KCQiA49XMBhDRARIsAOOKJHabWh7acFNq0OiziEdIYfNiwvKoNEa_kwc6wbUyjx4UKZXU7qfgwowaArOsEALw_wcB',
      likes:0,
      categoryId:1
    }
    ,
    {
      id: 2,
      name: 'YUNTEDKO Gi20 47mm Pink-Pink',
      description: 'The YUNTEKO Gi20 smartwatch is a stylish',
      price: 15888,
      rating: 4.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h49/h9a/84355202383902.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/ha0/h23/84353783431198.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h6b/hdc/84355202580510.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h24/h3f/84355202711582.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/123457/',
       likes:0,
      categoryId:1
    },
    {
      id: 3,
      name: 'Xiaomi Smart Band 10 black',
      description: 'The Xiaomi Smart Band 10 is a stylish ',
      price: 23588,
      rating: 4.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pe9/p90/84688212.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/pe9/p90/84688212.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p74/p92/67214815.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p32/p05/49520027.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/xiaomi-smart-band-10-chernyi-141530632/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_gadgets_wearables_desktop&gbraid=0AAAAAC7-v7jM9RoouwCxoFsSslZE7kDmI&gclid=Cj0KCQiA49XMBhDRARIsAOOKJHabWh7acFNq0OiziEdIYfNiwvKoNEa_kwc6wbUyjx4UKZXU7qfgwowaArOsEALw_wcB',
       likes:0,
      categoryId:1
    },
     {
      id: 4,
      name: 'Samsung Galaxy Fit3 black',
      description: 'Introducing the Samsung Galaxy Fit3—your',
      price: 22988,
      rating: 4.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h6d/hfc/85335415848990.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hf0/h6d/85335415914526.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h23/hb9/85335415980062.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hda/h3f/85335416111134.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-fit3-chernyi-117127851/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_gadgets_wearables_desktop&gbraid=0AAAAAC7-v7jM9RoouwCxoFsSslZE7kDmI&gclid=Cj0KCQiA49XMBhDRARIsAOOKJHabWh7acFNq0OiziEdIYfNiwvKoNEa_kwc6wbUyjx4UKZXU7qfgwowaArOsEALw_wcB',
       likes:0,
      categoryId:1
    },

     {
      id: 5,
      name: 'Xiaomi Smart Band 9 Pro black',
      description: 'This is a short description of product 2.',
      price: 37065,
      rating: 4.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pc2/p14/87508033.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p47/pbc/8999023.jpg?format=gallery-large', 'https://resources.cdn-kaspi.kz/img/m/p/pde/p14/87508034.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pfa/p14/87508035.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/xiaomi-smart-band-9-pro-chernyi-130236510/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_gadgets_wearables_desktop&gbraid=0AAAAAC7-v7jM9RoouwCxoFsSslZE7kDmI&gclid=Cj0KCQiA49XMBhDRARIsAOOKJHabWh7acFNq0OiziEdIYfNiwvKoNEa_kwc6wbUyjx4UKZXU7qfgwowaArOsEALw_wcB',
       likes:0,
      categoryId:1
    },
     {
      id: 6,
      name: 'PRYME OfficeBOOK 15.6/8 GB',
      description: 'This is a short description of product 6.',
      price: 28093,
      rating: 4.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p2c/p4a/75516635.png?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p47/pbc/8999023.jpg?format=gallery-large', 'https://resources.cdn-kaspi.kz/img/m/p/pde/p14/87508034.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pfa/p14/87508035.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/xiaomi-smart-band-9-pro-chernyi-130236510/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_gadgets_wearables_desktop&gbraid=0AAAAAC7-v7jM9RoouwCxoFsSslZE7kDmI&gclid=Cj0KCQiA49XMBhDRARIsAOOKJHabWh7acFNq0OiziEdIYfNiwvKoNEa_kwc6wbUyjx4UKZXU7qfgwowaArOsEALw_wcB',
       likes:0,
      categoryId:2
    },
         {
      id: 7,
      name: 'PRYME N5095',
      description: 'This is a short description of product 7.',
      price: 28093,
      rating: 4.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p77/pfd/45122459.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p47/pbc/8999023.jpg?format=gallery-large', 'https://resources.cdn-kaspi.kz/img/m/p/pde/p14/87508034.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pfa/p14/87508035.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/xiaomi-smart-band-9-pro-chernyi-130236510/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_gadgets_wearables_desktop&gbraid=0AAAAAC7-v7jM9RoouwCxoFsSslZE7kDmI&gclid=Cj0KCQiA49XMBhDRARIsAOOKJHabWh7acFNq0OiziEdIYfNiwvKoNEa_kwc6wbUyjx4UKZXU7qfgwowaArOsEALw_wcB',
      likes:0,
      categoryId:2
    },

     {
      id: 8,
      name: 'ELERON SmartBokkn',
      description: 'This is a short description of product 8.',
      price: 28093,
      rating: 4.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p84/p2e/77613207.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p47/pbc/8999023.jpg?format=gallery-large', 'https://resources.cdn-kaspi.kz/img/m/p/pde/p14/87508034.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pfa/p14/87508035.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/xiaomi-smart-band-9-pro-chernyi-130236510/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_gadgets_wearables_desktop&gbraid=0AAAAAC7-v7jM9RoouwCxoFsSslZE7kDmI&gclid=Cj0KCQiA49XMBhDRARIsAOOKJHabWh7acFNq0OiziEdIYfNiwvKoNEa_kwc6wbUyjx4UKZXU7qfgwowaArOsEALw_wcB',
      likes:0,
      categoryId:2
    },
     {
      id: 9,
      name: 'Apple MackBook Air',
      description: 'This is a short description of product 9.',
      price: 28093,
      rating: 4.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p52/p42/36846116.png?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p47/pbc/8999023.jpg?format=gallery-large', 'https://resources.cdn-kaspi.kz/img/m/p/pde/p14/87508034.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pfa/p14/87508035.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/xiaomi-smart-band-9-pro-chernyi-130236510/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_gadgets_wearables_desktop&gbraid=0AAAAAC7-v7jM9RoouwCxoFsSslZE7kDmI&gclid=Cj0KCQiA49XMBhDRARIsAOOKJHabWh7acFNq0OiziEdIYfNiwvKoNEa_kwc6wbUyjx4UKZXU7qfgwowaArOsEALw_wcB',
      likes:0,
      categoryId:2
    },
     {
      id: 9,
      name: 'Apple MackBook Pro',
      description: 'This is a short description of product 10.',
      price: 28093,
      rating: 4.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pc1/p7c/36863341.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p47/pbc/8999023.jpg?format=gallery-large', 'https://resources.cdn-kaspi.kz/img/m/p/pde/p14/87508034.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pfa/p14/87508035.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/xiaomi-smart-band-9-pro-chernyi-130236510/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_gadgets_wearables_desktop&gbraid=0AAAAAC7-v7jM9RoouwCxoFsSslZE7kDmI&gclid=Cj0KCQiA49XMBhDRARIsAOOKJHabWh7acFNq0OiziEdIYfNiwvKoNEa_kwc6wbUyjx4UKZXU7qfgwowaArOsEALw_wcB',
      likes:0,
      categoryId:2
    },

         {
      id: 11,
      name: 'CAT EAR Wireless Headphone',
      description: 'This is a short description of product 11.',
      price: 28093,
      rating: 4.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb5/h73/64054139256862.jpg?format=preview-large',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p47/pbc/8999023.jpg?format=gallery-large', 'https://resources.cdn-kaspi.kz/img/m/p/pde/p14/87508034.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pfa/p14/87508035.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/xiaomi-smart-band-9-pro-chernyi-130236510/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_gadgets_wearables_desktop&gbraid=0AAAAAC7-v7jM9RoouwCxoFsSslZE7kDmI&gclid=Cj0KCQiA49XMBhDRARIsAOOKJHabWh7acFNq0OiziEdIYfNiwvKoNEa_kwc6wbUyjx4UKZXU7qfgwowaArOsEALw_wcB',
      likes:0,
      categoryId:3
    },

     {
      id: 12,
      name: 'Bose QuietComfort Headphone',
      description: 'This is a short description of product 12.',
      price: 28093,
      rating: 4.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p9f/pc2/97568449.png?format=preview-large',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p47/pbc/8999023.jpg?format=gallery-large', 'https://resources.cdn-kaspi.kz/img/m/p/pde/p14/87508034.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pfa/p14/87508035.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/xiaomi-smart-band-9-pro-chernyi-130236510/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_gadgets_wearables_desktop&gbraid=0AAAAAC7-v7jM9RoouwCxoFsSslZE7kDmI&gclid=Cj0KCQiA49XMBhDRARIsAOOKJHabWh7acFNq0OiziEdIYfNiwvKoNEa_kwc6wbUyjx4UKZXU7qfgwowaArOsEALw_wcB',
      likes:0,
      categoryId:3
    },

     {
      id: 13,
      name: 'ANC Hi-Fi Bluetooth Headphone',
      description: 'This is a short description of product 13.',
      price: 28093,
      rating: 4.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p3b/p32/108616925.jpeg?format=preview-large',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p47/pbc/8999023.jpg?format=gallery-large', 'https://resources.cdn-kaspi.kz/img/m/p/pde/p14/87508034.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pfa/p14/87508035.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/xiaomi-smart-band-9-pro-chernyi-130236510/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_gadgets_wearables_desktop&gbraid=0AAAAAC7-v7jM9RoouwCxoFsSslZE7kDmI&gclid=Cj0KCQiA49XMBhDRARIsAOOKJHabWh7acFNq0OiziEdIYfNiwvKoNEa_kwc6wbUyjx4UKZXU7qfgwowaArOsEALw_wcB',
      likes:0,
      categoryId:3
    },

         {
      id: 14,
      name: 'NOTHING CMF Headphone',
      description: 'This is a short description of product 14.',
      price: 28093,
      rating: 4.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p35/pe8/78287658.jpeg?format=preview-large',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p47/pbc/8999023.jpg?format=gallery-large', 'https://resources.cdn-kaspi.kz/img/m/p/pde/p14/87508034.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pfa/p14/87508035.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/xiaomi-smart-band-9-pro-chernyi-130236510/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_gadgets_wearables_desktop&gbraid=0AAAAAC7-v7jM9RoouwCxoFsSslZE7kDmI&gclid=Cj0KCQiA49XMBhDRARIsAOOKJHabWh7acFNq0OiziEdIYfNiwvKoNEa_kwc6wbUyjx4UKZXU7qfgwowaArOsEALw_wcB',
      likes:0,
      categoryId:3
    },

             {
      id: 15,
      name: 'HYDRA Home Minor Beige',
      description: 'This is a short description of product 15.',
      price: 28093,
      rating: 4.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pe0/p7f/46750474.jpg?format=preview-large',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p47/pbc/8999023.jpg?format=gallery-large', 'https://resources.cdn-kaspi.kz/img/m/p/pde/p14/87508034.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pfa/p14/87508035.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/xiaomi-smart-band-9-pro-chernyi-130236510/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_gadgets_wearables_desktop&gbraid=0AAAAAC7-v7jM9RoouwCxoFsSslZE7kDmI&gclid=Cj0KCQiA49XMBhDRARIsAOOKJHabWh7acFNq0OiziEdIYfNiwvKoNEa_kwc6wbUyjx4UKZXU7qfgwowaArOsEALw_wcB',
      likes:0,
      categoryId:3
    },

       {
      id: 16,
      name: 'Smart Product',
      description: 'This is a short description of product 16.',
      price: 28093,
      rating: 4.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h7f/hf8/85479045136414.jpg?format=preview-large',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p47/pbc/8999023.jpg?format=gallery-large', 'https://resources.cdn-kaspi.kz/img/m/p/pde/p14/87508034.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pfa/p14/87508035.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/xiaomi-smart-band-9-pro-chernyi-130236510/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_gadgets_wearables_desktop&gbraid=0AAAAAC7-v7jM9RoouwCxoFsSslZE7kDmI&gclid=Cj0KCQiA49XMBhDRARIsAOOKJHabWh7acFNq0OiziEdIYfNiwvKoNEa_kwc6wbUyjx4UKZXU7qfgwowaArOsEALw_wcB',
      likes:0,
      categoryId:4
    },

           {
      id: 17,
      name: 'CCIT Kids Tablet',
      description: 'This is a short description of product 17.',
      price: 28093,
      rating: 4.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb9/hf1/84816318038046.png?format=preview-large',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p47/pbc/8999023.jpg?format=gallery-large', 'https://resources.cdn-kaspi.kz/img/m/p/pde/p14/87508034.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pfa/p14/87508035.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/xiaomi-smart-band-9-pro-chernyi-130236510/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_gadgets_wearables_desktop&gbraid=0AAAAAC7-v7jM9RoouwCxoFsSslZE7kDmI&gclid=Cj0KCQiA49XMBhDRARIsAOOKJHabWh7acFNq0OiziEdIYfNiwvKoNEa_kwc6wbUyjx4UKZXU7qfgwowaArOsEALw_wcB',
      likes:0,
      categoryId:4
    },
          {
      id: 18,
      name: 'Apple ipad A16',
      description: 'This is a short description of product 18.',
      price: 28093,
      rating: 4.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pef/pe8/37011887.png?format=preview-large',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p47/pbc/8999023.jpg?format=gallery-large', 'https://resources.cdn-kaspi.kz/img/m/p/pde/p14/87508034.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pfa/p14/87508035.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/xiaomi-smart-band-9-pro-chernyi-130236510/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_gadgets_wearables_desktop&gbraid=0AAAAAC7-v7jM9RoouwCxoFsSslZE7kDmI&gclid=Cj0KCQiA49XMBhDRARIsAOOKJHabWh7acFNq0OiziEdIYfNiwvKoNEa_kwc6wbUyjx4UKZXU7qfgwowaArOsEALw_wcB',
      likes:0,
      categoryId:4
    },
   
      {
      id: 19,
      name: 'Xiaomi Redmi Pad 2 11-inch',
      description: 'This is a short description of product 19.',
      price: 28093,
      rating: 4.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pac/p7a/81439516.jpg?format=preview-large',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p47/pbc/8999023.jpg?format=gallery-large', 'https://resources.cdn-kaspi.kz/img/m/p/pde/p14/87508034.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pfa/p14/87508035.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/xiaomi-smart-band-9-pro-chernyi-130236510/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_gadgets_wearables_desktop&gbraid=0AAAAAC7-v7jM9RoouwCxoFsSslZE7kDmI&gclid=Cj0KCQiA49XMBhDRARIsAOOKJHabWh7acFNq0OiziEdIYfNiwvKoNEa_kwc6wbUyjx4UKZXU7qfgwowaArOsEALw_wcB',
      likes:0,
      categoryId:4
    },
    {
      id: 20,
      name: 'Huawei MatePad 11.5 2025',
      description: 'This is a short description of product 20.',
      price: 28093,
      rating: 4.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p7f/p08/65766347.png?format=preview-large',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p47/pbc/8999023.jpg?format=gallery-large', 'https://resources.cdn-kaspi.kz/img/m/p/pde/p14/87508034.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pfa/p14/87508035.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/xiaomi-smart-band-9-pro-chernyi-130236510/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_gadgets_wearables_desktop&gbraid=0AAAAAC7-v7jM9RoouwCxoFsSslZE7kDmI&gclid=Cj0KCQiA49XMBhDRARIsAOOKJHabWh7acFNq0OiziEdIYfNiwvKoNEa_kwc6wbUyjx4UKZXU7qfgwowaArOsEALw_wcB',
      likes:0,
      categoryId:4
    },
   
   
   
   

    // 👉 add remaining 19 products
  ];

  getCategories(): Category[] {
    return this.categories;
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter(
      product => product.categoryId === categoryId
    );
  }
}