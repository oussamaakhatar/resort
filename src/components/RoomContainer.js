import React from 'react';
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';

import { withRoomConsumer} from '../context';
import Loading from './Loading';

function RoomContainer({ context }){
   const {loading,sortedRooms, rooms} = context;
   if (loading) {
    return <loading />;
   }

    return (
     <>
         
         <RoomFilter rooms={rooms}/>
         <RoomList rooms={sortedRooms}/>
      </>
  );
}

export default withRoomConsumer(RoomContainer);


/*
import React from 'react';
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';

import {RoomConsumer} from '../context';
import Loading from './Loading';

export default function RoomContainer() {
    return (
        <RoomConsumer>
            {value => {
              const { loading, sortedRooms, rooms } = value;
              if (loading) {
                  return <loading />;
              }
    
              return (
                   <div>
                       Hello from Rooms Container
                       <RoomFilter rooms={rooms}/>
                       <RoomList rooms={sortedRooms}/>
                    </div>
                );
            }}
        </RoomConsumer>
    );
}
*/
