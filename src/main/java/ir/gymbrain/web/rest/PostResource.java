package ir.gymbrain.web.rest;

import ir.gymbrain.service.PostService;
import ir.gymbrain.web.rest.errors.BadRequestAlertException;
import ir.gymbrain.service.dto.PostDTO;

import io.github.jhipster.web.util.HeaderUtil;
import io.github.jhipster.web.util.PaginationUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;

import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing {@link ir.gymbrain.domain.Post}.
 */
@RestController
@RequestMapping("/api")
public class PostResource {

    private final Logger log = LoggerFactory.getLogger(PostResource.class);

    private static final String ENTITY_NAME = "post";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final PostService postService;

    public PostResource(PostService postService) {
        this.postService = postService;
    }

    /**
     * {@code POST  /posts} : Create a new post.
     *
     * @param postDTO the postDTO to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new postDTO, or with status {@code 400 (Bad Request)} if the post has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/posts")
    public ResponseEntity<PostDTO> createPost(@Valid @RequestBody PostDTO postDTO) throws URISyntaxException {
        log.debug("REST request to save Post : {}", postDTO);
        if (postDTO.getId() != null) {
            throw new BadRequestAlertException("A new post cannot already have an ID", ENTITY_NAME, "idexists");
        }
        PostDTO result = postService.save(postDTO);
        return ResponseEntity.created(new URI("/api/posts/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /posts} : Updates an existing post.
     *
     * @param postDTO the postDTO to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated postDTO,
     * or with status {@code 400 (Bad Request)} if the postDTO is not valid,
     * or with status {@code 500 (Internal Server Error)} if the postDTO couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/posts")
    public ResponseEntity<PostDTO> updatePost(@Valid @RequestBody PostDTO postDTO) throws URISyntaxException {
        log.debug("REST request to update Post : {}", postDTO);
        if (postDTO.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        PostDTO result = postService.save(postDTO);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, postDTO.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /posts} : get all the posts.
     *

     * @param pageable the pagination information.
     * @param eagerload flag to eager load entities from relationships (This is applicable for many-to-many).
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of posts in body.
     */
    @GetMapping("/posts")
    public ResponseEntity<List<PostDTO>> getAllPosts(Pageable pageable, @RequestParam(required = false, defaultValue = "false") boolean eagerload) {
        log.debug("REST request to get a page of Posts");
        Page<PostDTO> page;
        if (eagerload) {
            page = postService.findAllWithEagerRelationships(pageable);
        } else {
            page = postService.findAll(pageable);
        }
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(ServletUriComponentsBuilder.fromCurrentRequest(), page);
        return ResponseEntity.ok().headers(headers).body(page.getContent());
    }

    /**
     * {@code GET  /posts/:id} : get the "id" post.
     *
     * @param id the id of the postDTO to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the postDTO, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/posts/{id}")
    public ResponseEntity<PostDTO> getPost(@PathVariable Long id) {
        log.debug("REST request to get Post : {}", id);
        Optional<PostDTO> postDTO = postService.findOne(id);
        return ResponseUtil.wrapOrNotFound(postDTO);
    }

    /**
     * {@code DELETE  /posts/:id} : delete the "id" post.
     *
     * @param id the id of the postDTO to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/posts/{id}")
    public ResponseEntity<Void> deletePost(@PathVariable Long id) {
        log.debug("REST request to delete Post : {}", id);
        postService.delete(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
