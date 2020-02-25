package ir.gymbrain.domain;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;
import java.time.ZonedDateTime;

/**
 * A Comment.
 */
@Entity
@Table(name = "comment")
public class Comment implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @NotNull
    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "active")
    private Boolean active;

    @Column(name = "active_by")
    private String activeBy;

    @Column(name = "active_date")
    private ZonedDateTime activeDate;

    @ManyToOne
    @JsonIgnoreProperties("comments")
    private Post post;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public Comment title(String title) {
        this.title = title;
        return this;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Boolean isActive() {
        return active;
    }

    public Comment active(Boolean active) {
        this.active = active;
        return this;
    }

    public void setActive(Boolean active) {
        this.active = active;
    }

    public String getActiveBy() {
        return activeBy;
    }

    public Comment activeBy(String activeBy) {
        this.activeBy = activeBy;
        return this;
    }

    public void setActiveBy(String activeBy) {
        this.activeBy = activeBy;
    }

    public ZonedDateTime getActiveDate() {
        return activeDate;
    }

    public Comment activeDate(ZonedDateTime activeDate) {
        this.activeDate = activeDate;
        return this;
    }

    public void setActiveDate(ZonedDateTime activeDate) {
        this.activeDate = activeDate;
    }

    public Post getPost() {
        return post;
    }

    public Comment post(Post post) {
        this.post = post;
        return this;
    }

    public void setPost(Post post) {
        this.post = post;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Comment)) {
            return false;
        }
        return id != null && id.equals(((Comment) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "Comment{" +
            "id=" + getId() +
            ", title='" + getTitle() + "'" +
            ", active='" + isActive() + "'" +
            ", activeBy='" + getActiveBy() + "'" +
            ", activeDate='" + getActiveDate() + "'" +
            "}";
    }
}
