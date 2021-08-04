import React, { Component } from 'react';

class Catalog extends Component {

    constructor(props){
     super(props);
     this.state={
        title:'Top 5 Technlogies',
        technologies:[
            {id:1,name:'React',likes:0,dislikes:0},
            {id:2,name:'Angular',likes:0,dislikes:0},
            {id:3,name:'Vue',likes:0,dislikes:0},
            {id:4,name:'AWS',likes:0,dislikes:0},
            {id:5,name:'Azure',likes:0,dislikes:0},
            
        ]
     }
    }
    render() {

      let {technologies,title}=this.state;
      let data= technologies.map(t=>{
        return     <tr  key={t.id}>
                       <td>{t.id}</td>
                       <td>{t.name}</td>
                       <td>{t.likes}</td>
                       <td>{t.dislikes}</td>
                       <td> <input  type="button" className="btn btn-info" value="LIKE IT"></input> </td>
                       <td> <input  type="button" className="btn btn-danger" value="DISLIKE IT"></input> </td>           </tr>              
      })
     return (
            <div className="jumbotron">
               <h3>{title}</h3>    
             <table className="table table-hover table-striped">
                 <thead>
                          <tr>
                          <th> ID </th>
                          <th> NAME </th>
                          <th> LIKES </th>
                          <th> DISLIKES </th>
                          <th> LIKE IT </th>
                          <th> DISLIKE IT</th>
                                                        
                          </tr>

                 </thead>
                 <tbody>
                     {data}
              </tbody>
             </table>
            </div>
        );
    }
}

export default Catalog;