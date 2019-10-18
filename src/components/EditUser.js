import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state={
            id:this.props.userEditObject.id,
            name:this.props.userEditObject.name,
            tel:this.props.userEditObject.tel,
            Permission:this.props.userEditObject.Permission
        }
    }
    isChange = (event)=>{
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]:value
        });
        //console.log(this.state.name)
       return this.state.name;
    }
    // lưu giá trị vừa thay đổi vào 1 đối tượng
    saveButton = ()=>{
        var info = {};
        info.id = this.state.id;
        info.name = this.state.name;
        info.tel  = this.state.tel;
        info.Permission  = this.state.Permission;
        //console.log("info là : " + info.name);

        this.props.getUserEditInfo(info);

        this.props.changeEditUserStatus(); //ẩn form
    }
    render() {
        //console.log(this.state)
        return (
                 <div className="col">
                <form method="post">
                <div className="card text-white bg-warning mb-3 mt-2">
                <div className="card-header text-center">Edit user</div>
                <div className="card-body text-primary">
                    <div className="form-group">
                        <label >Tên user</label>
                        <input defaultValue={this.props.userEditObject.name} name="name" onChange={(event)=> this.isChange(event)} type="text" className="form-control"   id="" aria-describedby="helpId"  
                            placeholder="Tên user"/>
                    </div>
                    <div className="form-group">
                        <label >Điện thoại</label>
                        <input defaultValue={this.props.userEditObject.tel} name="tel"  onChange={(event)=> this.isChange(event)} type="text" className="form-control"  id="" aria-describedby="helpId" 
                            placeholder="Số điện thoại"/>
                    </div>
                    <div className="form-group">
                        <select className="custom-select" required=""  name="Permission" onChange={(event)=> this.isChange(event)}  defaultValue={this.props.userEditObject.Permission}>
                            <option value="">Chọn quyền mặc định</option>
                            <option value="1">Admin</option>
                            <option value="2">Moderator</option>
                            <option value="3">Normal</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <input type="button" className="btn btn-block btn-primary" 
                        onClick={()=>this.saveButton()}
                        value=" Lưu"
                        />
                    </div>
                </div>
            </div>
            </form>
            </div>
        );
    }
}

export default EditUser;