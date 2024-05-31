import React, { useState, useEffect } from 'react';

function Blogs() {
    const [blogs, setBlogs] = useState([]);
    const [visibleBlogsCount, setVisibleBlogsCount] = useState(5);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(blogList => {
                setBlogs(blogList);
            });
    }, []);

    const List = ({ id, title }) => {
        return (
            <div className='ListOfBlogs' key={id}>
                <h3>{id}. {title}</h3>
            </div>
        );
    };

    const showMoreBlogs = () => {
        setVisibleBlogsCount(prevCount => prevCount + 5);
    };

    return (
        <div>
            <h2>Latest Blogs: </h2>
            {blogs.slice(0, visibleBlogsCount).map(blog => (
                <List key={blog.id} {...blog} />
            ))}
            {visibleBlogsCount < blogs.length && (
                <button onClick={showMoreBlogs}>Show More</button>
            )}
        </div>
    );
}

export default Blogs;
