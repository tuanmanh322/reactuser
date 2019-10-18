import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state={
            temp:'',
            userObj:{}
        }
    }
    

    hienThiNut = ()=>{
        if(this.props.hienThiForm === true){
            return (
                <div className="btn btn-block btn-outline-secondary" onClick={()=>this.props.ketNoi()}>Đóng lại</div>

            )
        }else{
            return (
                <div className="btn btn-block btn-outline-info" onClick={()=>this.props.ketNoi()}>Thêm mới</div>
            )
        }
    }
    getText = (event)=>{
        this.setState({
            temp:event.target.value
        });
        console.log(event.target.value);
        // hiển thị dữ liệu cần tìm ngay lập tức
        this.props.checkConnectProps(this.state.temp);
    }
  
    // lấy thông tin cần sửa
    getUserEditInfo = (info) =>{
        this.setState({
            userObj:info
        });
        this.props.getUserEditInfoApp(info);
    }
    isShowEditForm = ()=>{
        if(this.props.editUserStatus === true){
            return <EditUser changeEditUserStatus={()=>this.props.changeEditUserStatus()} 
                userEditObject={this.props.userEditObject}
                getUserEditInfo={(info)=> this.getUserEditInfo(info)}
                />
        }
    }
    render() {
        return (
            <div>
                <div className="col-12">
                     {this.isShowEditForm()}
                    <div className="form-group">
                        <div className="btn-group">
                            <label></label>
                            <input type="text" className="form-control" name="fText" id="á" aria-describedby="helpId"
                                placeholder="Nhập tên cần tìm..." style={{width: '1057px'}} onChange={(event) => this.getText(event)}/>
                            <div className="btn btn-info" onClick={(dl)=>this.props.checkConnectProps(this.state.temp)}>Tìm</div>
                        </div>
                        <div className="btn-group1">
                            {this.hienThiNut()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;