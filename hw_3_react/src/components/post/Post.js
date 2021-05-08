export default function Post({item, searchPost}) {
    return(
        <div>
            {item.id} )
            {item.title}
            <button onClick={()=>searchPost(item.id)}>Details post</button>
        </div>
    );
}