import React from "react";
// import xxx from './logo.svg';

const Comment = (props) => {
    const styles = {
        wrapper: {
            margin: 8,
            padding: 8,
            display: 'flex',
            flexDirection: 'row',
            border: '1px solid blue',
            borderRadius: 16,
            backgroundColor: 'lightgreen',

        },

        imageContianer: {},
        image: {
            width: 50,
            height: 50,
            borderRadius: 25,
        },
        contentContainer: {
            margin: 8,
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'lightpink',
        },
        nameText: {
            color: 'black',
            fontSize: 16,
            fontWeight: 'bold',
        },
        commentText: {
            color: 'blue',
            fontSize: 16,
        },

    }
    return(
        <>
        <div style={styles.wrapper}>
            <div style={styles.imageContianer}>
                {/* <img src={xxx} style={styles.image} alt='FFFF' /> */}

            </div>
            <div style={styles.contentContainer}>
                <span style={styles.nameText}>{props.name}</span>
                <span style={styles.commentText}>{props.comment}</span>
            </div>
        </div>
        </>
    );
}

export default Comment;