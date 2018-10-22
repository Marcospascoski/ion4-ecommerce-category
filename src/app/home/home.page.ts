import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  data: any = {
    'status': 200,
    'data': {
      'category': {
        'title': 'หมวดหมู่',
        'items': [
          {
            '_id': 'cate001',
            'name': 'เสื้อผ้าแฟชั่นผู้ชาย',
            'image': {
              'url': 'https://cf.shopee.co.th/file/cb5c30020fd21663ea93967cc68abad2_tn'
            }
          },
          {
            '_id': 'cate002',
            'name': 'มือถือและอุปกรณ์เสริม',
            'image': {
              'url': 'https://cf.shopee.co.th/file/4e920b485d1d00fb8d5b6644bf85e2f0_tn'
            }
          },
          {
            '_id': 'cate003',
            'name': 'เครื่องใช้ในบ้าน',
            'image': {
              'url': 'https://cf.shopee.co.th/file/057483a50a43a513384c1ce5ed5d3656_tn'
            }
          },
          {
            '_id': 'cate004',
            'name': 'นาฬิกาและแว่นตา',
            'image': {
              'url': 'https://cf.shopee.co.th/file/22a761fed91954f9f90edcaad1c59381_tn'
            }
          },
          {
            '_id': 'cate005',
            'name': 'รองเท้าผู้ชาย',
            'image': {
              'url': 'https://cf.shopee.co.th/file/62c7c766f22f8652fb37a21da9c803f5_tn'
            }
          },
          {
            '_id': 'cate006',
            'name': 'คอมพิวเตอร์และแล็ปท็อป',
            'image': {
              'url': 'https://cf.shopee.co.th/file/c01fb69af0327ca988efcf2d83192ae8_tn'
            }
          },
          {
            '_id': 'cate007',
            'name': 'กล้องและอุปกรณ์ถ่ายภาพ',
            'image': {
              'url': 'https://cf.shopee.co.th/file/5ad2f4b27ba654437aade63af7f33190_tn'
            }
          },
          {
            '_id': 'cate008',
            'name': 'กีฬาและกิจกรรมกลางแจ้ง',
            'image': {
              'url': 'https://cf.shopee.co.th/file/8110dc3308ed5451f29e6a1d6a3bcdcd_tn'
            }
          },
          {
            '_id': 'cate009',
            'name': 'สื่อบันเทิงภายในบ้าน',
            'image': {
              'url': 'https://cf.shopee.co.th/file/033077b1335cbebc616ab82432837844_tn'
            }
          },
          {
            '_id': 'cate100',
            'name': 'อื่นๆ',
            'image': {
              'url': 'https://cf.shopee.co.th/file/80bb2c205344a459072b199332e7d8f4_tn'
            }
          }
        ]
      }
    }
  };

  constructor() {

  }

  itemSelected(e) {
    console.log(e);
  }

}
