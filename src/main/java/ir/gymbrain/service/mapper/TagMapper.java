package ir.gymbrain.service.mapper;

import ir.gymbrain.domain.*;
import ir.gymbrain.service.dto.TagDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity {@link Tag} and its DTO {@link TagDTO}.
 */
@Mapper(componentModel = "spring", uses = {})
public interface TagMapper extends EntityMapper<TagDTO, Tag> {


    @Mapping(target = "posts", ignore = true)
    @Mapping(target = "removePost", ignore = true)
    Tag toEntity(TagDTO tagDTO);

    default Tag fromId(Long id) {
        if (id == null) {
            return null;
        }
        Tag tag = new Tag();
        tag.setId(id);
        return tag;
    }
}
