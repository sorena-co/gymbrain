package ir.gymbrain.domain;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import ir.gymbrain.web.rest.TestUtil;

public class LikeTest {

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Like.class);
        Like like1 = new Like();
        like1.setId(1L);
        Like like2 = new Like();
        like2.setId(like1.getId());
        assertThat(like1).isEqualTo(like2);
        like2.setId(2L);
        assertThat(like1).isNotEqualTo(like2);
        like1.setId(null);
        assertThat(like1).isNotEqualTo(like2);
    }
}
