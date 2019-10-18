import React, { Component } from 'react';
import  './../App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import dataUser from './Data.json';

const uuidv1 = require('uuid/v1');

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      hienThiForm:true,
      data:[],
      getText:'',
      
      editUserStatus:false, // trạng thái sửa trong Search.js

      userEditObject:{} // tạo 1 đối tượng state

    }
  }
  
  componentWillMount() {
    // kiểm tra xem có localStorage chưa
   // console.log(localStorage.getItem('userData'));
    if(localStorage.getItem('userData') === null){
      localStorage.setItem('userData',JSON.stringify(dataUser)); // trả về 1 mảng data
    }else{
      var temp =JSON.parse(localStorage.getItem('userData'));
      this.setState({
        data:temp
      });
    }
  }
  
  doiTrangThai =()=>{
    this.setState({
      hienThiForm:!this.state.hienThiForm
    });
  }

  // hàm tìm kiếm
  getTextSearch = (dl) =>{
    this.setState({
      getText:dl
    });
    console.log('dữ liệu app.js nhận được là :' + this.state.getText);
  }
  // lấy đối tượng truyền vào từ addUser
  getNewUserData = (name,tel,Permission) =>{
    // tạo 1 đối tượng rỗng là item
    var item = {};
    item.id  =uuidv1();
    item.name = name;
    item.tel = tel;
    item.Permission = Permission;

    console.log(item)

    // đẩy dữ liệu vào data.json
    var items = this.state.data;
    items.push(item);
    //cập nhật lại state
    this.setState({
      data:items
    });
    localStorage.setItem('userData',JSON.stringify(items));

    console.log(this.state.data);
    // console.log("name :" + name);
    // console.log("tel :" + tel);
    // console.log("Permission :" + Permission);
  }
  //hàm sửa User
  editUser = (user)=>{
    // console.log("eidt ")
    this.setState({
      userEditObject:user
    });
    
  //   console.log(user);
  }
  //hàm sửa user
  changeEditUserStatus = ()=>{
    this.setState({
      editUserStatus:!this.state.editUserStatus
    });
  }
  //hàm trả dữ liệu đã sửa  và gắn giá trị mới
  getUserEditInfoApp= (info)=>{
    //console.log("thông tin đã sửa xong "+ info.name);
    this.state.data.forEach((value,key)=>{
      // so sánh id info với id của data thì cập nhật lại giá trị của value
      if(value.id === info.id){
        //cập nhật lại giá trị của value
        value.name = info.name;
        value.tel = info.tel;
        value.Permission = info.Permission;
      }
    })
    localStorage.setItem('userData',JSON.stringify(this.state.data));

  }
  // xóa user
  deleteUser = (idUser)=>{
    // hàm filter
    // var arr  = [1,2,3,4];
    // var x = 2;
    // arr = arr.filter(item => item !== x); // tạo ra 1 mảng mới k chứa x
    // console.log(arr);

    var tempData = this.state.data;
    console.log(idUser);
    tempData = tempData.filter(item => item.id !== idUser);
    // console.log(tempData);
    this.setState({
      data:tempData
    });

    //duyệt qua tất cả dữ liệu là data
    // tempData.forEach((value,key)=>{
    //   if(value.id === idUser){
    //     console.log(value.name);
    //     // k nên thay đổi trực tiếp vào data
    //     tempData.de
    //   }
    // })
    //
    // đẩy vào dữ liệu
    localStorage.setItem('userData',JSON.stringify(tempData));
  }
  render() {
    //khai báo mảng tạm để lưu dữ liệu tìm
    var kq =[];
    this.state.data.forEach((item) =>{
      // != -1 là có phần tử
      if(item.name.indexOf(this.state.getText) !== -1){
        //đẩy text tìm kiếm vào mảng tạm
          kq.push(item);

        }
    })
    // test localStorage
    localStorage.setItem('userdata',JSON.stringify(dataUser));
    //console.log(localStorage.getItem("key1"));

    return (
      <div>
         <Header></Header>
         <div className="searchForm">
           <div className="container">
             <div className="row">
               <Search ketNoi={() => this.doiTrangThai()} hienThiForm={this.state.hienThiForm} 
               getUserEditInfoApp={(info)=>this.getUserEditInfoApp(info)}
               userEditObject={this.state.userEditObject}
                 editUserStatus={this.state.editUserStatus}
               checkConnectProps={(dl)=>this.getTextSearch(dl)}
               changeEditUserStatus={()=>this.changeEditUserStatus()}
               ></Search>
               <div className="col-12">
                    <hr/>
              </div>
              <TableData editFun={(user) => this.editUser(user)} dataUserProps={kq}
                    changeEditUserStatus={()=>this.changeEditUserStatus()}

                    deleteUser={(idUser)=>this.deleteUser(idUser)}
              ></TableData>
              <AddUser hienThiForm={this.state.hienThiForm} addUserData={(name,tel,Permission) =>this.getNewUserData(name,tel,Permission)}></AddUser>
             </div>
           </div>
         </div>
      </div>
    );
  }
}

export default App;