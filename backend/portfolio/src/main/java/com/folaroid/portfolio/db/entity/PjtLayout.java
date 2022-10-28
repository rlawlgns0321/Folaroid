package com.folaroid.portfolio.db.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@NoArgsConstructor
@Entity
@Getter
public class PjtLayout {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "pjt_layout_no")
    private Long pjtLayoutNo;

    @Column(name = "pjt_layout_content", columnDefinition = "TEXT")
    private String pjtLayoutContent;

    /**
     * Type이 정해지지 않음
     @Column(name = pjt_layout_order)
     private pjtLayOrder

     @Column(name = "pjt_layout_templates")
     private pjtLayoutTemplates

    **/

    @ManyToOne( cascade = CascadeType.ALL)
    @JoinColumn(name = "pjt_no")
    private Project project;
//    @Column(name = "pjt_no")
//    private Long pjtNo;

    @Column(name = "pjt_layout_font", length = 100)
    private String pjtLayOutFont;

    @Column(name = "pjt_layout_color", length = 20)
    private String pjtLayoutColor;

}
