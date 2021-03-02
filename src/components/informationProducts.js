
import { useSelector } from 'react-redux';
import axios from 'axios';




function InformationProducts() {


 
    const a = useSelector(state => state.hobby.list);
   

    function deleteProduct(id){

        alert('Bạn có muốn xóa sp không')

            axios.delete(`https://6013b47c54044a00172ddc4a.mockapi.io/productName/${id}`)
            .then(res => {
              console.log(res);
              console.log(res.data);
            }) 
    }


    return (
        <tbody>
            {a?.map((item,index) => 

                <tr key = {index} >
                <td> {index}</td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>{item.content}</td>
                <td>
                    <button onClick = {() => {deleteProduct(item.id)} } >Xóa</button>
                    <button>Sửa</button>
                </td>
            </tr>
            ) }
        </tbody>

       
    );
}

export default InformationProducts;