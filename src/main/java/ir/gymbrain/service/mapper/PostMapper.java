package ir.gymbrain.service.mapper;

import ir.gymbrain.domain.*;
import ir.gymbrain.service.dto.PostDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity {@link Post} and its DTO {@link PostDTO}.
 */
@Mapper(componentModel = "spring", uses = {TagMapper.class})
public interface PostMapper extends EntityMapper<PostDTO, Post> {


    @Mapping(target = "comments", ignore = true)
    @Mapping(target = "removeComment", ignore = true)
    @Mapping(target = "likes", ignore = true)
    @Mapping(target = "removeLike", ignore = true)
    @Mapping(target = "removeTag", ignore = true)
    Post toEntity(PostDTO postDTO);

    default Post fromId(Long id) {
        if (id == null) {
            return null;
        }
        Post post = new Post();
        post.setId(id);
        return post;
    }
}
