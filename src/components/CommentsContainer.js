import Comment from "./Comment"
const CommentsContainer = ()=>{
    const commentsData = [
        {
          name: "Akshay Saini",
          text: "Lorem ipsum dolor sit amet, consectetur adip",
          replies: [],
        },
        {
          name: "Akshay Saini",
          text: "Lorem ipsum dolor sit amet, consectetur adip",
          replies: [
            {
              name: "Akshay Saini",
              text: "Lorem ipsum dolor sit amet, consectetur adip",
              replies: [],
            },
            {
              name: "Akshay Saini",
              text: "Lorem ipsum dolor sit amet, consectetur adip",
              replies: [
                {
                  name: "Akshay Saini",
                  text: "Lorem ipsum dolor sit amet, consectetur adip",
                  replies: [
                    {
                      name: "Akshay Saini",
                      text: "Lorem ipsum dolor sit amet, consectetur adip",
                      replies: [
                        {
                          name: "Akshay Saini",
                          text: "Lorem ipsum dolor sit amet, consectetur adip",
                          replies: [
                            {
                              name: "Akshay Saini",
                              text: "Lorem ipsum dolor sit amet, consectetur adip",
                              replies: [],
                            },
                          ],
                        },
                        {
                          name: "Akshay Saini",
                          text: "Lorem ipsum dolor sit amet, consectetur adip",
                          replies: [],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "Akshay Saini",
          text: "Lorem ipsum dolor sit amet, consectetur adip",
          replies: [],
        },
        {
          name: "Akshay Saini",
          text: "Lorem ipsum dolor sit amet, consectetur adip",
          replies: [],
        },
        {
          name: "Akshay Saini",
          text: "Lorem ipsum dolor sit amet, consectetur adip",
          replies: [],
        },
        {
          name: "Akshay Saini",
          text: "Lorem ipsum dolor sit amet, consectetur adip",
          replies: [],
        },
      ];

      const CommentsList = ({comments})=>{
        return comments.map((comment,index)=>
        <div>
        <Comment key={index} data ={comment} />
        <div className="pl-5 ml-5">
            <CommentsList comments={comment.replies}/>
        </div>
        </div>
    
    )
        
      }

    return<div className="m-5 p-2">
        <h1 className="text-2xl font-bold">Comments</h1>
    <CommentsList comments={commentsData}/>
    </div>
};

export default CommentsContainer