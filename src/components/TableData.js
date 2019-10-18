import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {
    deleteButtonClick=(idUser)=>{
        // console.log(idUser);
        this.props.deleteUser(idUser);
    }
    //đẩy dữ liệu ra
    mappingDataUser = ()=>
                            this.props.dataUserProps.map((value,key)=>(
                                <TableDataRow
                                //mỗi value là 1 user
                                editFunClick={(user)=>this.props.editFun(value)}
                                key = {key + 1}
                                userID={value.id}
                                userName={value.name}
                                phone={value.tel}
                                permisson={value.Permission}
                                  changeEditUserStatus={()=>this.props.changeEditUserStatus()}

                                  //xóa value
                                  deleteButtonClick={(idUser)=> this.deleteButtonClick(idUser)}
                                  ></TableDataRow>
                            ))
    


    render() {
        
        return (
                 <div className="col">
                    <table className="table table-striped table-hover">
                        <thead className="thead-inverse">
                            <tr>
                                <th>STT</th>
                                <th>Tên</th>
                                <th>Điện thoại</th>
                                <th>Quyền</th>
                                <th>Thao tác</th>

                            </tr>
                        </thead>
                        <tbody>
                        {/* {this.props.dataUserProps.map((value,key)=>(
                            <TableDataRow
                                key={key}
                                userID={value.id}
                                userName={value.name}
                                phone={value.tel}
                                permisson={value.Permission}
                            ></TableDataRow>

                        ))} */}
                        {this.mappingDataUser()}
                            
                        </tbody>
                    </table>
                </div>
        );
    }
}

export default TableData;