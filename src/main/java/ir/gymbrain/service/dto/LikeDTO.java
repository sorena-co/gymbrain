package ir.gymbrain.service.dto;
import javax.validation.constraints.*;
import java.io.Serializable;
import java.util.Objects;

/**
 * A DTO for the {@link ir.gymbrain.domain.Like} entity.
 */
public class LikeDTO implements Serializable {

    private Long id;

    @NotNull
    private String username;


    private Long postId;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
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

        LikeDTO likeDTO = (LikeDTO) o;
        if (likeDTO.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), likeDTO.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "LikeDTO{" +
            "id=" + getId() +
            ", username='" + getUsername() + "'" +
            ", post=" + getPostId() +
            "}";
    }
}
