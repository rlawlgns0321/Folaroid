import React, { useEffect } from 'react';
import { loadItem } from '../redux/items';
import { useSelector, useDispatch } from 'react-redux';
import BoardItem from './BoardItem';
import ItemInput from './ItemInput';
import axios from 'axios';

const BoardList = () => {
    const dispatch = useDispatch()
    const items = useSelector(state => state.items.items);
  	// get으로 서버에 있는 게시글 모두 불러오기
    useEffect(() => {
        const fetchItem = async () => {
            axios.get('/items')
                .then(response => {
                    dispatch(loadItem(response.data));
                })
                .catch(err => console.log(err))
        };
        fetchItem();
    }, [dispatch])
  
    return (
        <div className="BoardList">
            <ItemInput />
            {items.map(item => (
                <BoardItem key={item.id} content={item.content} id={item.id} />
            ))}

        </div>
    )
}
export default BoardList;