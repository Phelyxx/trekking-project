import {Component, Input, OnInit} from '@angular/core';
import {Comment} from '../comment';
import {CommentService} from '../comment.service';

@Component({
  selector: 'app-comment-replies',
  templateUrl: './comment-replies.component.html',
  styleUrls: ['./comment-replies.component.css']
})
export class CommentRepliesComponent implements OnInit {
  replies: Array<Comment> = [];
  @Input() idComment;
  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    if (this.idComment !== null && this.idComment !== undefined){
    this.commentService.getComment(this.idComment)
      .subscribe(commentDetail => {
        this.replies = commentDetail.replies;
      });
    }else{
      this.commentService.getComments().subscribe(comments => {
        this.replies = comments;
      });
    }
  }

}
