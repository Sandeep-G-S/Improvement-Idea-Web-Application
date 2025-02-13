package com.example.improvidea.Entity;

import jakarta.persistence.*;
import org.springframework.stereotype.Component;
import org.springframework.transaction.reactive.GenericReactiveTransaction;

@Entity
@Component
public class Idea {

    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(name = "plant", nullable = false, length = 100)
    private String plant;

    @Column(name = "created_by", nullable = false, length = 100)
    private String createdBy;

    @Column(name = "pillar", nullable = false, length = 100)
    private String pillar;

    @Column(name = "main_category", nullable = false, length = 100)
    private String mainCategory;

    @Column(name = "unit", nullable = false, length = 50)
    private String unit;

    @Column(name = "created_date", nullable = false)
    private String createdDate; //

    @Column(name = "kaizen_type", nullable = false, length = 100)
    private String kaizenType;

    @Column(name = "sub_category", nullable = false, length = 100)
    private String subCategory;

    @Column(name = "module", nullable = false, length = 100)
    private String module;

    @Column(name = "idea_description", nullable = false, length = 255)
    private String ideaDescription;

    @Column(name = "target_month", length = 50)
    private String targetMonth;

    @Column(name = "idea_level", length = 100)
    private String ideaLevel;

    @Column(name = "estimated_mrp", length = 100)
    private String estimatedMRP;

    @Column(name = "estimated_savings_in_rs", length = 100)
    private String estimatedSavingsInRs;

    @Column(name = "estimated_savings_in_lakhs", length = 100)
    private String estimatedSavingsInLakhs;

    @Column(name = "current_status", length = 100)
    private String currentStatus;

    @Column(name = "pending_with", length = 100)
    private String pendingWith;

    @Column(name = "savings_built_into_budget", nullable = false, length = 3)
    private String savingsBuiltintoBudget; // 'Yes' or 'No'

    @Column(name = "carried_forward", nullable = false, length = 3)
    private String carriedForward; // 'Yes' or 'No'

    @Column(name = "completed_mrp", length = 100)
    private String completedMrp;

    @Column(name = "completed_month", length = 50)
    private String completedMonth;

    @Column(name = "realised_savings", length = 100)
    private String realisedSavings;

    @Column(name = "completed_savings_in_rs", length = 100)
    private String completedSavingsInRs;

    @Column(name = "completed_savings_in_lakhs", length = 100)
    private String completedSavingsInLakhs;

    @Column(name = "idea_completed", nullable = false, length = 3)
    private String ideaCompleted; // 'Yes' or 'No'

    @Column(name = "kaizen_no", length = 50)
    private String kaizenNo;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getPlant() {
        return plant;
    }

    public void setPlant(String plant) {
        this.plant = plant;
    }

    public String getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }

    public String getPillar() {
        return pillar;
    }

    public void setPillar(String pillar) {
        this.pillar = pillar;
    }

    public String getMainCategory() {
        return mainCategory;
    }

    public void setMainCategory(String mainCategory) {
        this.mainCategory = mainCategory;
    }

    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }

    public String getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(String createdDate) {
        this.createdDate = createdDate;
    }

    public String getKaizenType() {
        return kaizenType;
    }

    public void setKaizenType(String kaizenType) {
        this.kaizenType = kaizenType;
    }

    public String getSubCategory() {
        return subCategory;
    }

    public void setSubCategory(String subCategory) {
        this.subCategory = subCategory;
    }

    public String getModule() {
        return module;
    }

    public void setModule(String module) {
        this.module = module;
    }

    public String getIdeaDescription() {
        return ideaDescription;
    }

    public void setIdeaDescription(String ideaDescription) {
        this.ideaDescription = ideaDescription;
    }

    public String getTargetMonth() {
        return targetMonth;
    }

    public void setTargetMonth(String targetMonth) {
        this.targetMonth = targetMonth;
    }

    public String getIdeaLevel() {
        return ideaLevel;
    }

    public void setIdeaLevel(String ideaLevel) {
        this.ideaLevel = ideaLevel;
    }

    public String getEstimatedMRP() {
        return estimatedMRP;
    }

    public void setEstimatedMRP(String estimatedMRP) {
        this.estimatedMRP = estimatedMRP;
    }

    public String getEstimatedSavingsInRs() {
        return estimatedSavingsInRs;
    }

    public void setEstimatedSavingsInRs(String estimatedSavingsInRs) {
        this.estimatedSavingsInRs = estimatedSavingsInRs;
    }

    public String getEstimatedSavingsInLakhs() {
        return estimatedSavingsInLakhs;
    }

    public void setEstimatedSavingsInLakhs(String estimatedSavingsInLakhs) {
        this.estimatedSavingsInLakhs = estimatedSavingsInLakhs;
    }

    public String getCurrentStatus() {
        return currentStatus;
    }

    public void setCurrentStatus(String currentStatus) {
        this.currentStatus = currentStatus;
    }

    public String getPendingWith() {
        return pendingWith;
    }

    public void setPendingWith(String pendingWith) {
        this.pendingWith = pendingWith;
    }

    public String getSavingsBuiltintoBudget() {
        return savingsBuiltintoBudget;
    }

    public void setSavingsBuiltintoBudget(String savingsBuiltintoBudget) {
        this.savingsBuiltintoBudget = savingsBuiltintoBudget;
    }

    public String getCarriedForward() {
        return carriedForward;
    }

    public void setCarriedForward(String carriedForward) {
        this.carriedForward = carriedForward;
    }

    public String getCompletedMrp() {
        return completedMrp;
    }

    public void setCompletedMrp(String completedMrp) {
        this.completedMrp = completedMrp;
    }

    public String getCompletedMonth() {
        return completedMonth;
    }

    public void setCompletedMonth(String completedMonth) {
        this.completedMonth = completedMonth;
    }

    public String getRealisedSavings() {
        return realisedSavings;
    }

    public void setRealisedSavings(String realisedSavings) {
        this.realisedSavings = realisedSavings;
    }

    public String getCompletedSavingsInRs() {
        return completedSavingsInRs;
    }

    public void setCompletedSavingsInRs(String completedSavingsInRs) {
        this.completedSavingsInRs = completedSavingsInRs;
    }

    public String getCompletedSavingsInLakhs() {
        return completedSavingsInLakhs;
    }

    public void setCompletedSavingsInLakhs(String completedSavingsInLakhs) {
        this.completedSavingsInLakhs = completedSavingsInLakhs;
    }

    public String getIdeaCompleted() {
        return ideaCompleted;
    }

    public void setIdeaCompleted(String ideaCompleted) {
        this.ideaCompleted = ideaCompleted;
    }

    public String getKaizenNo() {
        return kaizenNo;
    }

    public void setKaizenNo(String kaizenNo) {
        this.kaizenNo = kaizenNo;
    }

}
