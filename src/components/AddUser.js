import React, { Component } from 'react';

class AddUser extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state={
    //         // trong component nào thì state của compnoent đó / k dùng chung state được / mặc định state là private
    //         trangThaiChinhSua:false  
    //     }
    // }
    // thayDoiTrangThai = ()=>{
    //     this.setState({
    //         trangThaiChinhSua: !this.state.trangThaiChinhSua
    //     });
    // }

    // hienThiNut = ()=>{
    //     if(this.state.trangThaiChinhSua === true){
    //         // khi để arrow function thì chỉ khi ta click vào thì hàm mới chạy / khác so với thisfunction()
    //         return <div className="btn btn-block btn-outline-secondary" onClick={()=>this.thayDoiTrangThai()}>Đóng lại</div>;
    //     }else{
    //         return <div className="btn btn-block btn-outline-info" onClick={()=>this.thayDoiTrangThai()}>Thêm mới</div>;
    //     }
    // }

    // hienThiForm = () => {
    //      if(this.state.trangThaiChinhSua === true){
    //         return  (
    //             <div className="card border-primary mb-3 mt-2">
    //                         <div className="card-header">Thêm mới user vào hệ thống</div>
    //                         <div className="card-body text-primary">
    //                             <div className="form-group">
    //                                 <label >Tên user</label>
    //                                 <input type="text" className="form-control" name="" id="" aria-describedby="helpId"
    //                                     placeholder="Tên user"/>
    //                             </div>
    //                             <div className="form-group">
    //                                 <label >Điện thoại</label>
    //                                 <input type="text" className="form-control" name="" id="" aria-describedby="helpId"
    //                                     placeholder="Tên user"/>
    //                             </div>
    //                             <div className="form-group">
    //                                 <select className="custom-select" required="">
    //                                     <option value="">Chọn quyền mặc định</option>
    //                                     <option value="1">Admin</option>
    //                                     <option value="2">Moderator</option>
    //                                     <option value="3">Normal</option>
    //                                 </select>
    //                             </div>
    //                             <div className="form-group">
    //                                 <div className="btn btn-block btn-primary">
    //                                     Thêm mới
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //         )
    //     } 
    // }
    constructor(props) {
        // đẩy dữ liệu ra state
        super(props);
        this.state={
            id:"",
            name:"",
            tel:"",
            Permission:""
        }
        
    }
    isChange = (event)=>{
        // lấy tên của trường vừa nhập
        const name = event.target.name;

        // lấy giá trị vừa nhập vào
        const value = event.target.value;
        
        
        // console.log(name);
        // console.log(value);

        this.setState({
            // mảng name là bao gồm tất cả các state
            [name] : value
        });
        // đòng gói state vào 1 đối tượng là item
        var item ={};
        item.id = this.state.id;
        item.name = this.state.name;
        item.tel = this.state.tel;
        item.Permission = this.state.Permission;

        //console.log(item)


    }
    
    kiemTraTrangThai = ()=>{
        if(this.props.hienThiForm === true){
            return (
                <div className="col">
                <form method="post">
                <div className="card border-primary mb-3 mt-2">
                <div className="card-header">Thêm mới user vào hệ thống</div>
                <div className="card-body text-primary">
                    <div className="form-group">
                        <label >Tên user</label>
                        <input name="name" type="text" className="form-control"   id="" aria-describedby="helpId" onChange={(event) => this.isChange(event)}
                            placeholder="Tên user"/>
                    </div>
                    <div className="form-group">
                        <label >Điện thoại</label>
                        <input name="tel" type="text" className="form-control"  id="" aria-describedby="helpId" onChange={(event) => this.isChange(event)}
                            placeholder="Số điện thoại"/>
                    </div>
                    <div className="form-group">
                        <select className="custom-select" required="" name="Permission" onChange={(event) => this.isChange(event)}>
                            <option value="">Chọn quyền mặc định</option>
                            <option value="1">Admin</option>
                            <option value="2">Moderator</option>
                            <option value="3">Normal</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <input type="reset" className="btn btn-block btn-primary" 
                        onClick={(name,tel,Permission)=> this.props.addUserData(this.state.name,this.state.tel,this.state.Permission)}
                        value=" Thêm mới"
                        />
                           
                         
                    </div>
                   
                </div>
                
            </div>
            </form>
            </div>
            )
        }
    }

    render() {
       // console.log(this.state)
        return (
               <div>
                     {/* {this.hienThiNut()} */}
                    
                       {/* {this.hienThiForm()} */}
                     
                     {this.kiemTraTrangThai()}
                     </div>
        );
    }
}

export default AddUser;