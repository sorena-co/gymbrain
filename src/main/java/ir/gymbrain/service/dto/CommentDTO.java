package ir.gymbrain.service.dto;
import java.time.ZonedDateTime;
import javax.validation.constraints.*;
import java.io.Serializable;
import java.util.Objects;

/**
 * A DTO for the {@link ir.gymbrain.domain.Comment} entity.
 */
public class CommentDTO implements Serializable {

    private Long id;

    @NotNull
    private String title;

    private Boolean active;

    private String activeBy;

    private ZonedDateTime activeDate;


    private Long postId;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Boolean isActive() {
        return active;
    }

    public void setActive(Boolean active) {
        this.active = active;
    }

    public String getActiveBy() {
        return activeBy;
    }

    public void setActiveBy(String activeBy) {
        this.activeBy = activeBy;
    }

    public ZonedDateTime getActiveDate() {
        return activeDate;
    }

    public void setActiveDate(ZonedDateTime activeDate) {
        this.activeDate = activeDate;
    }

    public Long getPostId() {
        return postId;
    }

    public void setPostId(Long postId) {
        this.postId = postId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        CommentDTO commentDTO = (CommentDTO) o;
        if (commentDTO.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), commentDTO.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "CommentDTO{" +
            "id=" + getId() +
            ", title='" + getTitle() + "'" +
            ", active='" + isActive() + "'" +
            ", activeBy='" + getActiveBy() + "'" +
            ", activeDate='" + getActiveDate() + "'" +
            ", post=" + getPostId() +
            "}";
    }
}
