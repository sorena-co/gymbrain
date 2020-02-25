package ir.gymbrain.service.mapper;

import ir.gymbrain.domain.*;
import ir.gymbrain.service.dto.LikeDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity {@link Like} and its DTO {@link LikeDTO}.
 */
@Mapper(componentModel = "spring", uses = {PostMapper.class})
public interface LikeMapper extends EntityMapper<LikeDTO, Like> {

    @Mapping(source = "post.id", target = "postId")
    LikeDTO toDto(Like like);

    @Mapping(source = "postId", target = "post")
    Like toEntity(LikeDTO likeDTO);

    default Like fromId(Long id) {
        if (id == null) {
            return null;
        }
        Like like = new Like();
        like.setId(id);
        return like;
    }
}
