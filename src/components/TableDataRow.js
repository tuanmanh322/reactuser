import React, { Component } from 'react';

class TableDataRow extends Component {
    constructor(props) {
        super(props);
        this.state={

        }
    }
    
    permissonShow = ()=>{
        if(this.props.permisson === 1){
            return "Admin";
        }else if(this.props.permisson === 2){
            return "Moderator";
        }else{
            return "Nomal User";
        }
    }
    editClick=()=>{
        this.props.editFunClick();
        this.props.changeEditUserStatus();
    }

    // xóa value
    deleteButtonClick = (idUser)=>{
        // console.log("id của phần tử :" + idUser);
        this.props.deleteButtonClick(idUser);
    }
    render() {
        //console.log(this.props.editFunClick);
        return (
                    <tr>
                                <th scope="row">{this.props.userID}</th>
                                <th>{this.props.userName}</th>
                                <th>{this.props.phone}</th>
                                <th> 
                                    {
                                        this.permissonShow()
                                    }
                                </th>
                                <th>
                                    <div className="btn-group">
                                        <div onClick={()=>this.editClick()} className="btn btn-warning sua">
                                            <i className="fa fa-edit"></i>
                                            Sửa
                                        </div>
                                        <div className="btn btn-danger sua" onClick={(idUser)=>this.deleteButtonClick(this.props.userID)}>
                                            <i className="fa fa-delete"></i>
                                            Xóa
                                        </div>
                                    </div>
                                </th>
                            </tr>
        );
    }
}

export default TableDataRow;