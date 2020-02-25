package ir.gymbrain.service.mapper;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;


public class LikeMapperTest {

    private LikeMapper likeMapper;

    @BeforeEach
    public void setUp() {
        likeMapper = new LikeMapperImpl();
    }

    @Test
    public void testEntityFromId() {
        Long id = 2L;
        assertThat(likeMapper.fromId(id).getId()).isEqualTo(id);
        assertThat(likeMapper.fromId(null)).isNull();
    }
}
