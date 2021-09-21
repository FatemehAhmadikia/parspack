import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserInfoService } from '../@core/services/user-info.service';
import { UserInfo } from '../@core/models/user-info.model';
import * as L from 'leaflet';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
  providers: [UserInfoService],
})
export class UserInfoComponent implements OnInit, OnDestroy {
  usersInfo: UserInfo[] | undefined;
  isVisibleModal: boolean = false;
  searchKeywords!: string;
  isLoading: boolean = false;

  //map
  private map: any;

  constructor(private userInfoService: UserInfoService) {}

  ngOnInit(): void {
    this.getUserInfo();
  }

  getUserInfo() {
    this.userInfoService.getUserInfo().subscribe((result) => {
      this.usersInfo = result;
    });
  }

  handleClickOnShowMapBtn(id: number) {
    this.showModal();
    let item = this.getItemDetailWithID(id);
    this.isLoading = true;
    setTimeout(() => {
      this.showDetailOnMap(item);
    }, 100);
  }

  getItemDetailWithID(id: number) {
    let result = this.usersInfo?.filter((item) => item.id === id);
    return result?.[0];
  }

  showDetailOnMap(item: any) {
    if (!item) return;
    let markerTitle = item.address.city + ',' + item.address.street;
    let lat = item.address.geo.lat;
    let lng = item.address.geo.lng;
    this.isLoading = false;
    this.map = L.map('map').setView([lat, lng], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);
    L.marker([lat, lng]).addTo(this.map).bindPopup(markerTitle).openPopup();
  }

  showModal(): void {
    this.isVisibleModal = true;
  }

  handleClickOnCloseModal(): void {
    this.isVisibleModal = false;
  }

  ngOnDestroy() {
    if (this.map) {
      this.map.off();
      this.map.remove();
    }
  }
}
