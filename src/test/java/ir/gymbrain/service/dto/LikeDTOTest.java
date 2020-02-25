package ir.gymbrain.service.dto;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import ir.gymbrain.web.rest.TestUtil;

public class LikeDTOTest {

    @Test
    public void dtoEqualsVerifier() throws Exception {
        TestUtil.equalsVerifier(LikeDTO.class);
        LikeDTO likeDTO1 = new LikeDTO();
        likeDTO1.setId(1L);
        LikeDTO likeDTO2 = new LikeDTO();
        assertThat(likeDTO1).isNotEqualTo(likeDTO2);
        likeDTO2.setId(likeDTO1.getId());
        assertThat(likeDTO1).isEqualTo(likeDTO2);
        likeDTO2.setId(2L);
        assertThat(likeDTO1).isNotEqualTo(likeDTO2);
        likeDTO1.setId(null);
        assertThat(likeDTO1).isNotEqualTo(likeDTO2);
    }
}
